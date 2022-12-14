import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dataObj = {};

const formEl = document.querySelector('.form');

function onInput(evt) {
  dataObj[evt.target.name] = Number(evt.target.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmitForm(evt) {
  evt.preventDefault();
  for (let i = 1; i <= dataObj.amount; i++) {
    createPromise(i, dataObj.delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    dataObj.delay += dataObj.step;
  }
  evt.target.reset();
}

formEl.addEventListener('submit', onSubmitForm);
formEl.addEventListener('input', onInput);
