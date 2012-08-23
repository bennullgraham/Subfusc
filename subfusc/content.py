from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound, Environment
from hamlish_jinja import HamlishExtension


env = Environment(extensions=[HamlishExtension])
content = Blueprint('content', __name__, template_folder='templates')


@content.route('/', defaults={'page': 'index'})
@content.route('/<page>/')
def show(page):
    try:
        return render_template('%s.haml' % page)
    except TemplateNotFound:
        abort(404)
