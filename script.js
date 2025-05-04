async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "87f942fcf54c86a8a0ad9595ba997f15";
    const url =    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
      const response = await fetch(url);
      const data = await response.json();
      
      if(data.cod === 200){
        document.getElementById("weatherResult").innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>🌡️ Temp: </strong> ${data.main.temp}&deg;C</p>
          <p><strong>☁️ Condition: </strong> ${data.weather[0].description}</p>
          <p><strong>💧 Humidity: </strong> ${data.main.humidity}%</p>
          <p><strong>🌬️ Wind: </strong> ${data.wind.speed} m/s</p>
      `
      }
      else{
        document.getElementById("weatherResult").innerHTML = `<p>City not found. Please try again.</p>`
      }
    }
    catch(error){
        console.error("Error Fetching weather:",error);
        document.getElementById("weatherResult").innerHTML = '<p>Failed to fetch weather.Try again later.</p>'
    }
}