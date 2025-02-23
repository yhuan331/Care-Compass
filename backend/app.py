import os
from flask import Flask, jsonify, send_from_directory

app = Flask(__name__, static_folder='../frontend', static_url_path='')

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/clinics')
def get_clinics():
    clinics = [
        {"name": "Community Health Center", "lat": 37.7749, "lng": -122.4194},
        {"name": "Free Clinic", "lat": 34.0522, "lng": -118.2437}
    ]
    return jsonify(clinics)

@app.route('/<path:filename>')  # Serve static files like script.js, styles.css
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(debug=True)
