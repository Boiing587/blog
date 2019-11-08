#!/usr/bin/env python3

from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='/public')


@app.route('/')
def form():
    return send_from_directory('./public', 'index.html')


@app.route('/<path:path>', methods=['GET'])
def serve(path):
    return send_from_directory('public', path)


app.run(host='0.0.0.0', port=1337)

