const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const list = document.querySelector('#ingredients');

// const ingredientsList = ingredients.map(ingredient => {
//   const listEl = document.createElement('li');
//   listEl.textContent = ingredient;
//   listEl.classList.add("item")
//   return listEl;
// })

// list.append(...ingredientsList);





function createIngredientEl(ingredientName) {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
   ingredientEl.textContent = ingredientName;
  return ingredientEl;
}

// const upgradeList = ingredients.map((ingredientName) =>
//   createIngredientEl(ingredientName));

// const upgradeList = ingredients.map(createIngredientEl);



function nameEl (ingredientName) {
  const ingredientListItem = createIngredientEl(ingredientName);

 upgradeList.push(ingredientListItem);
}

const upgradeList = [];
ingredients.forEach(nameEl);

const list = document.querySelector("#ingredients");
  list.append(...upgradeList);




  
