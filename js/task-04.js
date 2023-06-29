let counterValue = 0;

const spanEl = document.querySelector('#value');

const btnPlus = document.querySelector('button[data-action="increment"]');
btnPlus.addEventListener("click", () =>{
    counterValue += 1
spanEl.textContent = counterValue;}
    
)

const btnMinus = document.querySelector('button[data-action="decrement"]');
btnMinus.addEventListener("click", () =>{
    counterValue -= 1
spanEl.textContent = counterValue;}
)


