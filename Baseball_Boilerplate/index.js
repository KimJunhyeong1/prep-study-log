const start_button = document.querySelector("#start-button");
const number_input = document.querySelector("#number-input");
const display_count = document.querySelector("#display-count");
const display_left_count = document.querySelector("#display-left-count");
const restart_button = document.querySelector("#restart-button");

let target_number = "";
let left_count = 10;

const makeTargetNumber = function () {
  while (target_number.length < 3) {
    const random_number = Math.floor(Math.random() * 10);
    if (target_number.indexOf(random_number) === -1) {
      target_number += random_number;
    }
  }

  console.log(target_number);
};

const startButtonHandler = function () {
  if (target_number.length !== 0) {
    return;
  }

  restart_button.style.display = "block";

  makeTargetNumber();

  display_left_count.innerHTML = left_count;

  start_button.style.display = "none";
  number_input.style.display = "block";
};

const checkStrikeBallCount = function (target_number, input_number) {
  let strike_count = 0;
  let ball_conut = 0;

  for (let i = 0; i < 3; i++) {
    if (target_number[i] === input_number[i]) {
      strike_count++;
      continue;
    }

    for (let j = 0; j < 3; j++) {
      if (i === j) {
        continue;
      }
      if (target_number[i] === input_number[j]) {
        ball_conut++;
      }
    }
  }

  return [strike_count, ball_conut];
};

const inputKeyPress = function (event) {
  if (event.which === 13) {
    const input_number = event.target.value;

    if (input_number.length !== 3) {
      alert("3자리 숫자가 아니네여!");
      return;
    }

    if (left_count <= 0) {
      alert(
        `기회를 다 쓰셨네요\n정답은 ${target_number}였습니다.\n재시작을 눌러서 재도전해보세요.`
      );

      return;
    }

    left_count--;
    display_left_count.innerHTML = left_count;

    const [strike_count, ball_conut] = checkStrikeBallCount(
      target_number,
      input_number
    );

    display_count.innerHTML = `${strike_count}strike ${ball_conut}ball`;
    console.log(strike_count, ball_conut);
  }
};

const restartButtonHandler = function () {
  target_number = "";
  makeTargetNumber();
  left_count = 10;

  display_left_count.innerHTML = left_count;
};

start_button.addEventListener("click", startButtonHandler);
number_input.addEventListener("keypress", inputKeyPress);
restart_button.addEventListener("click", restartButtonHandler);
