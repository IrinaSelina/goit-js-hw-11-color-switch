import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body')
console.log(buttonStart);
console.log(buttonStop);
console.log(body);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

buttonStart.addEventListener('click', changeColor)
buttonStop.addEventListener('click', stopColor)
let intervalId = null

function changeColor() {
    intervalId = setInterval(function () {  body.style.backgroundColor = `${colors[randomIntegerFromInterval(0, colors.length-1)]}`;
          buttonStart.disabled = true
      }, 1000)
    buttonStart.disabled = true
}

function stopColor() {
    clearInterval(intervalId)
    buttonStart.disabled = false
}

