from flask import Flask, render_template
from flask.ext.assets import Environment
from webassets.loaders import YAMLLoader

app = Flask(__name__)
assets = Environment(app)
assets.url = '/static'
bundles = YAMLLoader('bgraham/static/assets.yaml').load_bundles()
[assets.register(name, bundle) for name, bundle in bundles.iteritems()]


@app.route("/")
def root():
    return render_template('root.j2t')


@app.route("/<page>/")
def content(page):
    return render_template("%s.j2t" % page)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.j2t'), 404


def run():
    app.run(host='0.0.0.0', debug=True)
