// Time and day
let currentTime = new Date(); // JS Date object, defines new Date as currentTime Hours
let hours = currentTime.getHours(); // Gets the current time in hours
if (hours < 10) {
  // Ads a 0 before hour if the number is less than 10
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes(); // JS Date object, defines new Date as currentTime Minutes
if (minutes < 10) {
  // Gets the current time in minutes
  minutes = `0${minutes}`; // Ads a 0 before minutes if the number is less than 10
}

let currentDay = new Date(); // JS Date object, defines new Date as currentDay
let days = [
  // Defines the days
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentDay.getDay()]; // This is important

let timeAndDate = document.querySelector(".time-date");
timeAndDate.innerHTML = `${day} ${hours}:${minutes}, `;

// Date and year
let dateNow = new Date(); // JS Date object, defines new Date as dateNow
let year = dateNow.getFullYear(); // Gets full year
let date = dateNow.getDate();
{
  // Gets the date, and amends the ending with if/else statements
  if (date == 1) {
    date = `${date}st`;
  } else if (date == 2) {
    date = `${date}nd`;
  } else if (date == 3) {
    date = `${date}rd`;
  } else if (date == 21) {
    date = `${date}st`;
  } else if (date == 22) {
    date = `${date}nd`;
  } else if (date == 23) {
    date = `${date}rd`;
  } else if (date == 31) {
    date = `${date}st`;
  } else {
    date = `${date}th`;
  }
}

// Month
let monthLet = new Date();
let months = [
  // Defines the months
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[monthLet.getMonth()];

// Inserts date, month and year into the HTML document
let monthElement = document.querySelector(".date-month");
monthElement.innerHTML = `${date} of ${month} - ${year}`;

function displayForecast(response) {
  console.log(response.data.daily);
  let forecastElement = document.querySelector("#forecast")

  let forecastHTML = `<div class="row">`;
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu"];
  days.forEach(function(day){
  forecastHTML =
    forecastHTML + `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
          <img class="forecast-image" src="https://openweathermap.org/img/wn/01d@2x.png" width="40"/>
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">18</span> 
            <span class="weather-forecast-temperature-min">19</span>
         </div>  
        `;
        
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;  
  })
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "7efef5260931c8f50230e9ac708a39f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units="metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
};

// Temperature, city and country

function showTemp(response) {
  // Function showTemp

  let temperature = Math.round(response.data.main.temp); // Round the degree to whole number
  let mainTemperature = document.querySelector(".temperature"); // Say that mainTemperature will be shown in the class MainTemperature
  mainTemperature.innerHTML = `${temperature}°C `; // Defines that mainTemperature is let = temperature

  let city = response.data.name; // Gets the city name
  let country = response.data.sys.country; // Gets the country code
  let cityCountry = document.querySelector(".city"); // Says that cityCountry will be shown in the class city
  cityCountry.innerHTML = `${city} `; // Defines that cityCountry is the city and coountry

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  let description = response.data.weather[0].description; // Gets the weather description
  let weatherDescription = document.querySelector(".weather-description"); // Says that weatherDescription will be shown in the ID temperature-description
  weatherDescription.innerHTML = `${description} `; // Defines that weatherDescription is description

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
      "src", 
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );

  iconElement.setAttribute(
      "alt", 
      response.data.weather[0].description
      );

  getForecast(response.data.coord);  

}


      


// Search function
function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-input").value;
  let units = "Metric";
  let apiKey = "7efef5260931c8f50230e9ac708a39f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemp);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);


// Function that finds latitude and longitude, and then shows temp for that place
function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "Metric";
  let apiKey = "7efef5260931c8f50230e9ac708a39f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  
  axios.get(apiUrl).then(showTemp);
}

// Function that finds your current position
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

// Defines that the function getCurrentPosition will happen when you click the button
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

