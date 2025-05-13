// function getWeather() {
//   const location = document.getElementById('locationInput').value;
//   const apiKey = '108f1172fb5b4588ac9142146251205';
//   const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Weather not found");
//       }
//       return response.json();
//     })
//     .then(data => {
//       const temp = data.current.temp_c;
//       const city = data.location.name;
//       const country = data.location.country;
//       document.getElementById('result').innerHTML = 
//         `Temperature in <strong>${city}, ${country}</strong> is <strong>${temp}°C</strong>`;
//     })
//     .catch(error => {
//       document.getElementById('result').innerHTML = `Error: ${error.message}`;
//     });
// }
