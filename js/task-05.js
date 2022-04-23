const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
}

const onOutputChange = event => refs.input.value !== '' ? refs.output.textContent = event.currentTarget.value : refs.output.textContent = "Anonymous";

refs.input.addEventListener("input", onOutputChange);

