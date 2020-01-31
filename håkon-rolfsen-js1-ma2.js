// QUESTION 1

const myFunctionExpression = function() {
  console.log("Håkon");
};

myFunctionExpression();

// QUESTION 2

const btn = document.querySelector(".btn");

btn.addEventListener("click", clickedButton);

function clickedButton() {
  console.log("I was clicked");
}

// QUESTION 3
const inputFirstname = document.querySelector("#firstName");

inputFirstname.addEventListener("keydown", consoleLogKeydown);

function consoleLogKeydown() {
  console.log(event.key);
}

// QUESTION 4

const btnHover = document.querySelector("button");

btnHover.addEventListener("mouseover", addClassHover);

function addClassHover(event) {
  event.target.classList.add("hover");
}

// QUESTION 5
const btnByDataAttribute = document.querySelector("[data-animal='dog']");

btnByDataAttribute.addEventListener("mouseout", removeHover);

function removeHover(event) {
  event.target.classList.remove("hover");
}

// QUESTION 6
const allBulletPoints = document.querySelectorAll("li");

for (let i = 0; i < allBulletPoints.length; i++) {
  allBulletPoints[i].addEventListener("mouseover", logDataAttribute);
}

function logDataAttribute(event) {
  console.dir(event.target.dataset.animal);
}
// QUESTION 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// QUESTION 8
const sheep = ["Malcolm", "Anders", "Marie"];

function logSheeps(sheep) {
  console.log(sheep);
}

sheep.forEach(logSheeps);

// QUESTION 9
function logHelloSixTimes() {
  console.log("Hello");

  if (counter === 5) {
    clearInterval(setIntervalValue);
  }

  counter++;
}

let counter = 0;

const setIntervalValue = setInterval(logHelloSixTimes, 500);

// QUESTION 10
const container = document.querySelector(".container");

const intervalId = setInterval(updateText, 2000);

function updateText() {
  container.innerHTML = "Text updated";

  if (counter1 === 1) {
    clearInterval(intervalId);
  }

  counter1++;
}

let counter1 = 0;
