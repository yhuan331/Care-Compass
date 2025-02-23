console.log("✅ script.js is loaded!"); // Confirm script is loaded

let markers = []; // Store markers globally

function initMap() {
    console.log("✅ initMap() is running..."); // Confirm map is initializing

    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 10
    });

    console.log("🔄 Fetching clinic data from API...");

    fetch("http://127.0.0.1:5000/clinics")
        .then(response => {
            console.log("✅ Fetch response received:", response);
            return response.json();
        })
        .then(data => {
            console.log("✅ Fetched Data:", data);

            if (!Array.isArray(data) || data.length === 0) {
                console.error("❌ Error: No data received!");
                return;
            }

            data.forEach(clinic => {
                console.log(`📍 Creating marker for ${clinic.name} at (${clinic.lat}, ${clinic.lng})`);

                let marker = new google.maps.Marker({
                    position: { lat: parseFloat(clinic.lat), lng: parseFloat(clinic.lng) },
                    map,
                    title: clinic.name
                });

                let infoWindow = new google.maps.InfoWindow({
                    content: `<h3>${clinic.name}</h3>
                              <p>${clinic.address}</p>
                              <p><b>Services:</b> ${clinic.services}</p>`
                });

                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                });

                markers.push(marker); // Store marker
            });

            console.log("✅ Markers Created:", markers);
        })
        .catch(error => console.error("❌ Error fetching clinic data:", error));
}

// ✅ Search function to filter clinics
function filterClinics() {
    let searchText = document.getElementById("search").value.toLowerCase();
    console.log("🔎 Search text:", searchText);

    if (markers.length === 0) {
        console.error("❌ No markers found!");
        return;
    }

    markers.forEach(marker => {
        let isMatch = marker.title.toLowerCase().includes(searchText);
        console.log(`🔄 Checking ${marker.title} → Match: ${isMatch}`);

        marker.setVisible(isMatch);
    });
}
