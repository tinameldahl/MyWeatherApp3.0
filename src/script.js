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


