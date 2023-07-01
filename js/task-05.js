

// const inputEl = document.querySelector('#name-input');

// const spanEl = document.querySelector("#name-output");

// inputEl.addEventListener('input', (event) => {
//   const{value} = event.target
//     spanEl.textContent =
//       value === "" ? "Anonymus" : value; 
    

// })


const inputEl = document.getElementById("name-input");
console.log(inputEl);

const spanEl = document.getElementById("name-output");

inputEl.addEventListener('input', eventFoo);

function eventFoo(event) {
  spanEl.textContent = event.target.value;
  if (event.target.value === '') 
    spanEl.textContent = "Anonymus";

}