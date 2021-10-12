const current_day = document.querySelector("#day");
const current_date = document.querySelector("#date");
const year_month = document.querySelector("#year-month");

let date = new Date();
const week = ["SUN", "MON", "THU", "WED", "THU", "FRI", "SAT"];
const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
current_day.innerHTML = week[date.getDay()];

current_date.innerHTML = date.getDate();

year_month.innerHTML = monthNames[date.getMonth()] + " " + date.getFullYear();
