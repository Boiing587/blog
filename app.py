#!/usr/bin/env python3
import os
import json
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

@app.route('/authenticate', methods=['GET'])
def authenticate():
    return render_template('authenticate.html')

@app.route('/compose', methods=['GET'])
def compose():
    try:
        if request.args['api_key'] == apiKey:
            return render_template('compose.html', message=request.args['api_key'])
        else:
            return redirect('authenticate')
    except:
        return redirect('authenticate')

@app.route('/post', methods=['GET'])
def post():
    if request.args['api_key'] == apiKey:
        if 'title' in request.args and 'content' in request.args and 'author' in request.args:
            if request.args.get('title') == "" and request.args.get('content') == "" and request.args.get('author') == "":
                return redirect('/compose?api_key=' + apiKey)
            else:
                if not os.path.isfile('./public/posts.json'):
                    with open('public/posts.json', 'w+') as file:
                        file.write("[]")
                with open('public/posts.json', 'r') as file:    # Open posts.json in read mode
                    content = json.loads(file.read())           # Load current posts into variable
                    content.append({                            # Append a new post object
                        "title": request.args.get("title"),     # Dette skriver ikke 'request.args.get("title") til content,
                        "author": request.args.get("author"),   #  men outputen av det
                        "content": request.args.get("content")
                    })
                with open('public/posts.json', 'w') as file:    # Open posts.json in write mode
                    file.write(str(json.dumps(content)))
                return redirect('/blog.html')
                #with open('public/posts.json', 'r') as file:
                #    return jsonify(json.loads(file.read()))     # Return the contents of posts.json
    else:
        return '<h1>Wait that\'s <strong>illegal!</strong></h1>'

@app.route('/test')
def test():
    return send_from_directory('./public', 'test.html')


app.run(host='0.0.0.0', port=port)

