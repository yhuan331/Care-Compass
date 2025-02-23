# 🏥 Care Compass - Health Equity Resource Finder

A **social impact project** to connect underserved communities with **free and low-cost healthcare services**.

## 📌 Overview  
**Care Compass** is an interactive web tool designed to help users locate **free and low-cost healthcare clinics** near them.  

This platform utilizes **Google Maps API** and **Google Places API** to provide **accurate, location-based results**.


## ✨ Features  
✅ **Search for Clinics** - Find free or low-cost clinics based on your location  
✅ **Google Maps Integration** - Interactive map with clinic markers  
✅ **Live Filtering** - Dynamic search functionality to filter clinics in real-time  
✅ **Categories & Services** - Additional free resources for **vaccinations, mental health, prescriptions, and more**  


## 🚀 Technologies Used  
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Python (Flask)  
- **APIs:** Google Maps API, Google Places API  
- **Database:** SQLite (Optional for future development)  
- **Version Control:** Git & GitHub  

## 📌 How It Works  
1. **User enters their location** – Care Compass searches for nearby clinics.  
2. **Google Maps displays results** – Users can see clinics and their details on an interactive map.  
3. **Live Filtering** – Users can refine searches based on healthcare services.  
4. **Additional Resources** – Users can access resources for **vaccinations, mental health, and prescriptions**.  


## 🛠️ Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
   git clone https://github.com/your-repo/Health-Equity-Resource-Finder.git
   cd Health-Equity-Resource-Finder
```
### 2️⃣ Set Up the Virtual Environment
   ```sh
       python -m venv venv
       source venv/bin/activate  # (Mac/Linux)
       venv\Scripts\activate  # (Windows)
```
### 3️⃣ Start the Flask Backend 
   ```sh
   cd backend
   python app.py
 ```
The Flask server should now be running at:
➡️ http://127.0.0.1:5000/

### 4️⃣ Run the Frontend
1. **Option 1** - Open frontend/index.html in your web browser
2. **Option 2** - Use a simple HTTP Server
  Run the following command to start a local server:
   ```sh
   cd frontend
   python -m http.server 5050
   ```
   Now, open the following URL in your browser:
➡️ http://localhost:5050


### 🖥️ Project Structure
    📂 Health-Equity-Resource-Finder
     │── backend/             # Flask backend
     │   ├── app.py           # Main backend script
     │── frontend/            # Frontend files
     │   ├── index.html       # Main webpage
     │   ├── script.js        # Google Maps + search functionality
     │   ├── index.css        # Styling
     │   ├── logo.png         # Logo image
     │── README.md            # Project documentation

