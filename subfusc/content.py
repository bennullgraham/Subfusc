from flask import Flask, render_template
from flask.ext.assets import Environment
from webassets.loaders import YAMLLoader

app = Flask(__name__)
assets = Environment(app)
assets.versions = 'hash'
assets.url = '/static'
bundles = YAMLLoader('subfusc/static-src/assets.yaml').load_bundles()
[assets.register(name, bundle).build() for name, bundle in bundles.iteritems()]


@app.route("/")
def root():
    return render_template('root.j2t')


@app.route("/st2/")
def st2():
    return render_template("st2.j2t")


@app.route("/resume/")
def resume():
    return render_template("resume.j2t")


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.j2t'), 404


# def run():
    # app.run(host='0.0.0.0', debug=True)
    # app.run(debug=True)
