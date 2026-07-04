from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

@app.route('/predict', methods=['POST'])
def predict():
    # Check if file is in the request
    if 'file' not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files['file']

    # Check if a file is selected
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Here is where your AI model would analyze the image
    # For now, we return a dummy response
    return jsonify({"disease": "Leaf Rust", "confidence": 0.95})

if __name__ == '__main__':
    app.run(debug=True)
