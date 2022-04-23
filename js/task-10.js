function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const divContainer = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");



const destroyBoxes = () => {
  divContainer.innerHTML = "";
  inputEl.value="";
}

const getAmountBoxes = () => {
  let amount = +inputEl.value;
  createBoxes(amount);
}

const createBoxes = (amount) => {
  
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = String (30 + 10*i) + "px";
    divEl.style.height = String (30 + 10*i) + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    divContainer.append(divEl);
  }
  
}


btnCreate.addEventListener("click", getAmountBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

