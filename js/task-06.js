const inputEl = document.querySelector("input");

const onInputCheck = (event) => {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    }
    else {
        inputEl.classList.remove("valid");
        inputEl.classList.add("invalid");
    };
}

inputEl.addEventListener ("blur", onInputCheck)

