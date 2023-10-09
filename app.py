from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Serve static files (CSS, JavaScript, images, etc.)
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

@app.route('/')
def hello():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)