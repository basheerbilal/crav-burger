from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from urllib.parse import urlsplit
import os
os.chdir(Path(__file__).resolve().parent)
class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urlsplit(self.path).path.rstrip('/')
        if path in ('/menu', '/spices', '/contact'):
            self.path = path + '.html'
        super().do_GET()
    def do_HEAD(self):
        path = urlsplit(self.path).path.rstrip('/')
        if path in ('/menu', '/spices', '/contact'):
            self.path = path + '.html'
        super().do_HEAD()
print('CRAV website: http://localhost:8000 — Ctrl+C to stop')
ThreadingHTTPServer(('127.0.0.1', 8000), Handler).serve_forever()
