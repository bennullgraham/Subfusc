import os
from flask import Flask, render_template
from flask.ext.assets import Environment
from webassets.loaders import YAMLLoader
from gevent.wsgi import WSGIServer

here, f = os.path.split(os.path.abspath(__file__))

app = Flask(__name__)
app.config.from_object('default-config')
if os.environ.get('SUBFUSC_SETTINGS'):
    app.config.from_envvar('SUBFUSC_SETTINGS')

# configure assets
assets = Environment(app)
assets.versions = 'hash'
assets.url = '/static'
bundles = YAMLLoader("%s/static-src/assets.yaml" % here).load_bundles()
[assets.register(name, bundle) for name, bundle in bundles.iteritems()]


def run():
    if app.debug == True:
        app.run(host='0.0.0.0')
    else:
        http_server = WSGIServer(('', 5000), app)
        http_server.serve_forever()


@app.route("/")
def root():
    return render_template('index.html')


@app.route("/st2/")
def st2():
    return render_template("st2.html")


@app.route("/resume/")
def resume():
    return render_template("resume.html")


@app.route("/tech/")
def tech():
    return render_template("tech.html")


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html'), 404
