# from subfusc import content
from gevent.wsgi import WSGIServer
from subfusc.content import app

# content.run()

if __name__ == "__main__":
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()
