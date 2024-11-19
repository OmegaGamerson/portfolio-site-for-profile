document.getElementById('logIpButton').addEventListener('click', async () => {
    try {
        // Get the user's IP address
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const userIP = ipData.ip;

        // Send the IP address to the server to get geolocation info
        const response = await fetch(`https://api.ipapi.com/api/${userIP}?access_key=YOUR_IPAPI_KEY`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }
        
        const locationData = await response.json();

        // Display the results
        document.getElementById('result').textContent = JSON.stringify(locationData, null, 2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error fetching data.';
    }
});