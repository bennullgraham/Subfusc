import os
from flask import Flask, render_template
from hamlish_jinja import HamlishExtension
from subfusc.content import content


app = Flask(__name__)
app.config.from_object('default-config')
if os.path.isfile('local-config.py'):
    app.config.from_object('local-config')
if os.environ.get('SUBFUSC_SETTINGS'):
    app.config.from_envvar('SUBFUSC_SETTINGS')

# hamlish!
app.jinja_env.add_extension(HamlishExtension)

# configure assets
from flask.ext.assets import Environment
assets = Environment(app)
assets.versions = 'hash'
assets.url = '/static'

# load asset bundles
from webassets.loaders import YAMLLoader
here, f = os.path.split(os.path.abspath(__file__))
bundles = YAMLLoader("%s/static-src/assets.yaml" % here).load_bundles()
[assets.register(name, bundle) for name, bundle in bundles.iteritems()]

# blueprints
app.register_blueprint(content)


@app.errorhandler(404)
def not_found(error):
    return render_template('404.haml'), 404


def run():
    # gevent is only required on production
    try:
        from gevent.wsgi import WSGIServer
    except ImportError:
        print "Warning: running in debug mode. Install gevent to avoid."
        app.debug = True
        pass
    if app.debug == True:
        app.run(host='0.0.0.0')
    else:
        http_server = WSGIServer(('', 5000), app)
        http_server.serve_forever()
