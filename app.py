#!/usr/bin/env python3
from flask import Flask, send_from_directory
import os
from dotenv import load_dotenv()

app = Flask(__name__, static_url_path='/public')
port = os.getenv('PORT', 1337)

@app.route('/')
def form():
    return send_from_directory('./public', 'index.html')

@app.route('/about')
def bruh():
    return send_from_directory('./public', 'bruh.html')

@app.route('/<path:path>', methods=['GET'])
def serve(path):
    return send_from_directory('public', path)


app.run(host='0.0.0.0', port=port)

