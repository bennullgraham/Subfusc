import os
from flask import Flask, render_template
from subfusc.content import content

# gevent is only required on production
try:
    from gevent.wsgi import WSGIServer
except ImportError:
    pass


app = Flask(__name__)
app.config.from_object('default-config')
if os.environ.get('SUBFUSC_SETTINGS'):
    app.config.from_envvar('SUBFUSC_SETTINGS')

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
    return render_template('404.html'), 404


def run():
    if app.debug == True:
        app.run()
    else:
        http_server = WSGIServer(('', 5000), app)
        http_server.serve_forever()
