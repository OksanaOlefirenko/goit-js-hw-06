const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.textContent = `${ingredient}`;
    itemEl.classList.add("item");

    return itemEl;
  })
}

const elements = makeList(ingredients);
const listContainer = document.querySelector("#ingredients");

listContainer.append(...elements);

