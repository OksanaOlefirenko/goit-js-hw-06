
let counterEl = document.querySelector("#value");
let counterValue = 0;

const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const onBtnIncrementClick = () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
}
const onBtnDecrementClick = () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
}

btnIncrement.addEventListener("click", onBtnIncrementClick);
btnDecrement.addEventListener("click", onBtnDecrementClick);

