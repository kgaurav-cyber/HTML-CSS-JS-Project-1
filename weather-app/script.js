async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const result = document.getElementById("result");

    const city = cityInput.value.trim();

    // Clear previous result
    result.textContent = "";

    if (!city) {
        result.textContent = "Please enter a city name";
        result.style.color = "red";
        return;
    }

    try {
        const apiKey = "14815e4ec0c045a5e421433f45346427"; // 🔑 Replace with your new key

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        // If API returns error
        if (!response.ok) {
            result.textContent = "Error: " + data.message;
            result.style.color = "red";
            return;
        }

        // Extract data
        const temperature = data.main.temp;
        const weatherDesc = data.weather[0].description;
        const feelsLike = data.main.feels_like;
        const humidity = data.main.humidity;

        // Show result
        result.style.color = "green";
        result.textContent =
            `📍 ${city.toUpperCase()}
🌡 Temperature: ${temperature}°C
🤔 Feels like: ${feelsLike}°C
💧 Humidity: ${humidity}%
🌤 Condition: ${weatherDesc}`;

    } catch (error) {
        console.error(error);
        result.textContent = "Network error or API not reachable";
        result.style.color = "red";
    }
}