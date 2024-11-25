document.getElementById('fetchIpButton').addEventListener('click', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip').innerText = `Your IP is: ${data.ip}`;
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            document.getElementById('ip').innerText = 'Could not fetch IP address.';
        });
});