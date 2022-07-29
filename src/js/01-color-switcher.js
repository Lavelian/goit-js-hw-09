const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let timerId = null;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function OnClickBtnStart() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function OnClickBtnStop() {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
}

btnStart.addEventListener('click', OnClickBtnStart);
btnStop.addEventListener('click', OnClickBtnStop);
