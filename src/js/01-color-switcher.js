const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
btnStop.disabled = true;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(timerId);
});

// Не рабочий вариант

// let timerId = null;
// btnStop.disabled = true;
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// timerId = setInterval(() => {
//   bodyEl.style.backgroundColor = getRandomHexColor();
// }, 1000);

// function OnClickBtnStart(timer) {
//   btnStart.disabled = true;
//   btnStop.disabled = false;
//   timer();
// }

// function OnClickBtnStop(timer) {
//   btnStart.disabled = false;
//   btnStop.disabled = true;

//   clearInterval(timer);
// }

// btnStart.addEventListener('click', OnClickBtnStart(timerId));
// btnStop.addEventListener('click', OnClickBtnStop(timerId));
