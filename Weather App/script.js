const API_KEY = "005a2a1ffbf6a48c681f732b56980821";
const CITY_NAME = "Houston";
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;

let dt = new Date();

let sectionTitleDate = document.querySelector(".section-title--date");
let dateDay = document.querySelector(".date_day");
let windSpeed = document.querySelector(".reading--wind");
let windArrow = document.querySelector(".wind-arrow");
let tempMax = document.querySelector(".reading--max");
let tempMin = document.querySelector(".reading--min");

let weekday = dt.getDay();
let month = dt.getMonth();
let date = dt.getDate().toString();
var speed = 0;
let weekdays = new Array(7);

weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getWeather() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      windSpeed.textContent = data.wind.speed + "kph";
      windArrow.style.setProperty("--direction", `${data.wind.deg}deg`);
      console.log(data);
      tempMax.textContent =
        "High: " + (data.main.temp_max - 273.15).toFixed(0) + "C";
      tempMin.textContent =
        "Low: " + (data.main.temp_min - 273.15).toFixed(0) + "F";
    });
}

getWeather();

sectionTitleDate.textContent = weekdays[weekday];
dateDay.textContent = months[month] + " " + date;
console.log(speed);
