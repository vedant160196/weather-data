// Function to fetch weather data when the user clicks the button
async function getWeather() {
    const location = document.getElementById("location").value; // Get location input
    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${}&appid=${c9354158548a23cb2d41d9932545b0b0}&units=metric`;

    try {
        const response = await fetch(url); // Fetch data from API
        const data = await response.json(); // Parse the response as JSON

        // If the location is found, display the weather data
        if (data.cod === 200) {
            const weatherData = `
                <h3>Weather in ${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Condition: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weather-data").innerHTML = weatherData;
        } else {
            // If location is not found
            document.getElementById("weather-data").innerHTML = "Location not found. Please check your input.";
        }
    } catch (error) {
        // Handle any errors that may occur during the API request
        document.getElementById("weather-data").innerHTML = "Error fetching weather data. Please try again.";
    }
}
