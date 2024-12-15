let map = L.map('apMap').setView([51.219448, 4.402464], 13); 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
let bounds = [[51.22050, 4.40000], [51.21850, 4.40400]]; 
L.rectangle(bounds, { color: "#0056A0", weight: 1 }).addTo(map);
let antwerpenMarker = L.marker([51.219448, 4.402464]).addTo(map);
antwerpenMarker.bindPopup("<b>Antwerpen</b><br>Centrum").openPopup();
