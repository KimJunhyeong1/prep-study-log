const change_button = document.querySelector("#change_button");
const hex_color_text = document.querySelector("h2");
const body = document.querySelector("body");

const hexGenerator = function () {
  const hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hex_color = "#";

  for (var i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * hexNumbers.length);
    hex_color += hexNumbers[random];
  }

  return hex_color;
};

const buttonClickHandler = function () {
  const hex_color = hexGenerator();
  hex_color_text.textContent = `HEX COLOR :${hex_color}`;
  body.style.backgroundColor = hex_color;
};

change_button.addEventListener("click", buttonClickHandler);
