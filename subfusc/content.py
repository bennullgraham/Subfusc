from flask import Blueprint, render_template, abort, current_app
from jinja2 import TemplateNotFound, Environment
from hamlish_jinja import HamlishExtension
from subprocess import check_output, CalledProcessError


env = Environment(extensions=[HamlishExtension])
content = Blueprint('content', __name__, template_folder='templates')


@content.route('/', defaults={'page': 'index'})
@content.route('/<page>/')
def show(page):
    try:
        git_dir = '--git-dir=%s' % current_app.config['GIT_DIR']
        rev = check_output(['git', git_dir, 'rev-parse', '--short', 'HEAD'])
    except CalledProcessError:
        rev = 'unknown'

    try:
        return render_template('%s.haml' % page, rev=rev)
    except TemplateNotFound:
        abort(404)
