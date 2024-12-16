function createMap() {
    var map = L.map('map').setView([32.5, -95], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    async function randomCor() {
        function getRandomInRange(from, to, fixed) {
            return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        } 
        // Creating variables   
        var lat = getRandomInRange(30, 35, 3);
        var long = getRandomInRange(-90, -100, 3);

        var lat1 = getRandomInRange(30, 35, 3);
        var long1 = getRandomInRange(-90, -100, 3);

        var lat2 = getRandomInRange(30, 35, 3);
        var long2 = getRandomInRange(-90, -100, 3);

        var marker1 = L.marker([lat, long]).addTo(map);
        var marker2 = L.marker([lat1, long1]).addTo(map);
        var marker3 = L.marker([lat2, long2]).addTo(map);

        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`)
            .then((response) => response.json())
            .then((data) => {
                var markerOneText = `<strong><p>Marker 1: Latitude: ${lat}, Longitude: ${long}</p> <p>Locality: ${data.locality || 'Unknown'}</p></strong>`;
                document.getElementById('coordinateBox').innerHTML += markerOneText;
            });

        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat1}&longitude=${long1}&localityLanguage=en`)
            .then((response) => response.json())
            .then((data) => {
                var markerTwoText = `<strong><p>Marker 2: Latitude: ${lat1}, Longitude: ${long1}</p> <p>Locality: ${data.locality || 'Unknown'}</p></strong>`;
                document.getElementById('coordinateBox').innerHTML += markerTwoText;
            });

        await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat2}&longitude=${long2}&localityLanguage=en`)
            .then((response) => response.json())
            .then((data) => {
                var markerThreeText = `<strong><p>Marker 3: Latitude: ${lat2}, Longitude: ${long2}</p> <p>Locality: ${data.locality || 'Unknown'}</p></strong>`;
                document.getElementById('coordinateBox').innerHTML += markerThreeText;
            });    
    }
    randomCor();
}

window.onload = createMap;
