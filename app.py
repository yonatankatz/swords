from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

# Serve docs files (CSS, JavaScript, images, etc.)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('docs', filename)

if __name__ == '__main__':
    app.run(debug=True)