let map;
let service;
let userLocation = null;
window.clinicMarkers = []; // Store markers for filtering

function initMap() {
    console.log("Initializing Map...");
    
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 36.9741, lng: -122.0308 }, // Default: Santa Cruz
        zoom: 12
    });

    service = new google.maps.places.PlacesService(map);

    // Try to get the user's location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation);
                map.setZoom(14);

                new google.maps.Marker({
                    map,
                    position: userLocation,
                    title: "You are here",
                    icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                });
            },
            () => {
                console.warn("Geolocation failed.");
            }
        );
    } else {
        console.warn("Geolocation not supported.");
    }
}

// Search for clinics using Google Places API
function searchClinics(queryString) {
    if (!service) {
        alert("Google Places Service not ready.");
        return;
    }

    const searchCenter = userLocation || { lat: 36.9741, lng: -122.0308 }; // Default to Santa Cruz
    const request = {
        query: queryString,
        location: searchCenter,
        radius: 15000
    };

    service.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearMarkers(); // Clear previous markers
            window.clinicMarkers = []; // Reset marker array

            results.forEach(place => {
                if (!place.geometry || !place.geometry.location) return;

                const marker = new google.maps.Marker({
                    map,
                    position: place.geometry.location,
                    title: place.name
                });

                window.clinicMarkers.push(marker); // Store marker for filtering

                const infoWindow = new google.maps.InfoWindow({
                    content: `<h3>${place.name}</h3><p>${place.formatted_address}</p>`
                });

                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                });
            });

            if (results[0] && results[0].geometry) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(12);
            }
        } else {
            alert("No results found.");
        }
    });
}

// Filter markers based on search bar input
function filterClinics() {
    let input = document.getElementById("search").value.toLowerCase();

    window.clinicMarkers.forEach(marker => {
        if (marker.title.toLowerCase().includes(input)) {
            marker.setMap(map); // Show marker
        } else {
            marker.setMap(null); // Hide marker
        }
    });
}

// Clears all markers from the map
function clearMarkers() {
    window.clinicMarkers.forEach(marker => marker.setMap(null));
    window.clinicMarkers = [];
}


function toggleButton(selectedButton) {
    // Get all buttons with the class "clinic-btn"
    selectedButton.classList.toggle("active");
}