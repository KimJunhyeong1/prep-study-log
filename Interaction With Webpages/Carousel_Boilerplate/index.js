const image = document.querySelector("#image");
const left_arrow = document.querySelector(".fa-arrow-circle-left");
const right_arrow = document.querySelector(".fa-arrow-circle-right");
const dot_box = document.querySelector(".dot-box");

let image_index = 1;
const dot_list = dot_box.querySelectorAll(".dot");

const leftArrowClickHandler = function () {
  image_index--;
  if (image_index < 1) {
    image_index = 5;
  }
  image.src = `images/image-${image_index}.png`;
  console.log(image_index);
};

const rightArrowClickHandler = function () {
  image_index++;
  if (image_index > 5) {
    image_index = 1;
  }
  image.src = `images/image-${image_index}.png`;
  console.log(image_index);
};

const dotClickHandler = function (event) {
  image_index = event.target.id;
  image.src = `images/image-${image_index}.png`;
};

left_arrow.addEventListener("click", leftArrowClickHandler);
right_arrow.addEventListener("click", rightArrowClickHandler);

for (let i = 0; i < dot_list.length; i++) {
  dot_list[i].addEventListener("click", dotClickHandler);
}
