#!/usr/bin/env python3
import os
from flask import Flask, send_from_directory, render_template, request, jsonify, redirect
from dotenv import load_dotenv
load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

app = Flask(__name__, static_url_path='/public')
port = os.getenv('PORT', 8080)
apiKey = os.getenv('API_KEY', '')

@app.route('/', methods=['GET'])
def index():
    return send_from_directory('./public', 'index.html')

@app.route('/<path:path>', methods=['GET'])
def serve(path):
    return send_from_directory('./public', path)

@app.route('/compose', methods=['GET'])
def compose():
    if request.args['api_key'] == apiKey:
        return render_template('compose.html', message=request.args['api_key'])
    else:
        return '<h1>Wait that\'s <strong>illegal!</strong></h1>'

@app.route('/post', methods=['GET'])
def post():
    if request.args['api_key'] == apiKey:
        if 'title' in request.args and 'content' in request.args:
            print('Title: ' + request.args.get('title'))
            print('Content: ' + request.args.get('content'))
            return redirect('/compose?api_key=' + request.args['api_key'])
    else:
        return '<h1>Wait that\'s <strong>illegal!</strong></h1>'


@app.route('/test')
def test():
    return send_from_directory('./public', 'test.html')


app.run(host='0.0.0.0', port=port)

