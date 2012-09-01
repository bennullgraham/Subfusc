from flask import Blueprint, render_template, current_app
from urllib2 import urlopen
import xml.etree.ElementTree as ET


goodreads = Blueprint('goodreads', __name__, template_folder='templates')


@goodreads.route('/xhr/books/')
def books():
    uid = current_app.config['GOODREADS_UID']
    key = current_app.config['GOODREADS_KEY']
    url = 'http://www.goodreads.com/user/show/%s.xml?key=%s' % (uid, key)
    xml = urlopen(url).read()
    tree = ET.fromstring(xml)
    updates = []
    for update in tree.iter('update'):
        updates.append(update[0].text)
    return render_template('xhr/books.haml', updates=updates[:3])
