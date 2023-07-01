function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector("[data-destroy]");
const inputTextValue = document.querySelector('input[type=number]');
const divElCollection = document.getElementById('boxes');




const newArr = [];
function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1) {
    let newDiv = document.createElement("div");
    const color = getRandomHexColor();
    const size = 30 + i * 10;
    
    newDiv.style.width = `${size}px`;
    newDiv.style.height = `${size}px`;
    newDiv.style.backgroundColor = color;
    newArr.push(newDiv);
    console.log(newDiv)
  }
  console.log(newArr);
  divElCollection.append(newArr.join(""));
}

createBtn.addEventListener("click", () => {
  const amount = inputTextValue.value;
  createBoxes(amount);
});

//   divElCollection.append(newArr.join(""));
//   console.log(inputTextValue)
// }