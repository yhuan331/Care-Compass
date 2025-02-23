from flask import Flask, jsonify
import json

app = Flask(__name__)

# Sample clinic data
clinics = [
    {"name": "Community Health Center", "lat": 37.7749, "lng": -122.4194, "address": "123 Main St, SF", "services": "General checkup"},
    {"name": "Free Clinic", "lat": 34.0522, "lng": -118.2437, "address": "456 Broadway, LA", "services": "Dental, Immunizations"}
]

@app.route('/clinics', methods=['GET'])
def get_clinics():
    return jsonify(clinics)

if __name__ == '__main__':
    app.run(debug=True)
