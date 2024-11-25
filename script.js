document.getElementById('fetchIpButton').addEventListener('click', function() {
    fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('ip').innerText = `Your IP is: ${data.query}`;
                document.getElementById('location').innerText = `Location: ${data.city}, ${data.region}, ${data.country}`;
                document.getElementById('coordinates').innerText = `Coordinates: ${data.lat}, ${data.lon}`;
            } else {
                throw new Error('Failed to retrieve location data.');
            }
        })
        .catch(error => {
            console.error('Error fetching location:', error);
            document.getElementById('ip').innerText = '';
            document.getElementById('location').innerText = 'Could not fetch location.';
            document.getElementById('coordinates').innerText = '';
        });
});