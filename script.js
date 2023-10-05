// Func to get API
function fetchWeather(city) {
  const apiKey = "2e094dcebed4e5cf1b716216e7aa9677";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => alert("No weather found"));
}

function displayWeather(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  document.querySelector(".city").innerHTML = `Weather in ${name}`;
  document.querySelector(".temp").innerText = `${temp}°C`;
  document.querySelector(
    ".icon"
  ).src = `https://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".description").innerText = description;
  document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
  document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
  document.querySelector(".weather").classList.remove("loading");
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
  document.querySelector("#search-bar").value = "";
}

//func search city
function search() {
  const city = document.querySelector("#search-bar").value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name");
  }
}

//search bar event
document
  .querySelector(".top-search button ")
  .addEventListener("click", search());

document.querySelector("#search-bar").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

// Initial weather for Cairo
fetchWeather("Cairo");
