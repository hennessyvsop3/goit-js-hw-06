let counterValue = 0;

const spanEl = document.querySelector('#value');

const btnPlus = document.querySelector('button[data-action="increment"]');
btnPlus.addEventListener("click", calcFunction);

const btnMinus = document.querySelector('button[data-action="decrement"]');
btnMinus.addEventListener("click", calcFunction);

function calcFunction(event) {
  if (event.target.dataset.action === "increment") {
    counterValue += 1;
    spanEl.textContent = counterValue;
    return;
  }
  counterValue -= 1;
  spanEl.textContent = counterValue;
}
