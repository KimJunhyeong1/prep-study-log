const WEEK = ["SUN", "MON", "THU", "WED", "THU", "FRI", "SAT"];
const MONTHNAMES = [
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
const MONTHDATE = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const current_day = document.querySelector("#day");
const current_date = document.querySelector("#date");
const year_month = document.querySelector("#year-month");
const columns = document.querySelector("thead").querySelectorAll("th");
const rows = document.querySelector("tbody").querySelectorAll("tr");
const left_button = document.querySelector("#left-button");
const right_button = document.querySelector("#right-button");

let date = new Date();

const init = function () {
  current_day.innerHTML = WEEK[date.getDay()];
  current_date.innerHTML = date.getDate();
  year_month.innerHTML = MONTHNAMES[date.getMonth()] + " " + date.getFullYear();

  clearRows();
  displayDates(date.getMonth());

  cellAddListener();
};

const displayDates = function (month) {
  const date_num = date.getDate();
  const last_date = MONTHDATE[month];

  let row_index = 0;

  for (let i = 1; i <= last_date; i++) {
    date.setDate(i);
    if (date.getDay() == 0) {
      row_index++;
    }
    const cells = rows[row_index].querySelectorAll("td");

    cells[date.getDay()].innerHTML = i;
  }

  date.setDate(date_num);
};

const clearRows = function () {
  for (let tr of rows) {
    const cells = tr.querySelectorAll("td");
    for (let td of cells) {
      td.innerHTML = "";
    }
  }
};

const leftButtonHandler = function () {
  const month = date.getMonth() - 1;

  date.setMonth(month, 1);

  clearRows();
  displayDates(date.getMonth());

  current_date.innerHTML = date.getDate();
  current_day.innerHTML = WEEK[date.getDay()];
  year_month.innerHTML = MONTHNAMES[date.getMonth()] + " " + date.getFullYear();
};

const rightButtonHandler = function () {
  const month = date.getMonth() + 1;

  date.setMonth(month, 1);

  clearRows();
  displayDates(date.getMonth());

  current_date.innerHTML = date.getDate();
  current_day.innerHTML = WEEK[date.getDay()];
  year_month.innerHTML = MONTHNAMES[date.getMonth()] + " " + date.getFullYear();
};

const cellHandler = function (event) {
  date.setDate(event.target.innerHTML);
  current_date.innerHTML = date.getDate();
  current_day.innerHTML = WEEK[date.getDay()];
};

const cellAddListener = function () {
  for (let tr of rows) {
    const cells = tr.querySelectorAll("td");
    for (let td of cells) {
      td.addEventListener("click", cellHandler);
    }
  }
};

init();

left_button.addEventListener("click", leftButtonHandler);
right_button.addEventListener("click", rightButtonHandler);
