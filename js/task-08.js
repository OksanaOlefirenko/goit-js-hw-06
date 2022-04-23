const formEl = document.querySelector(".login-form");

const onFormSubmit = event => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }
    
    const formData = {
        Email: email.value,
        Password: password.value
    }

    console.log(formData);


    // const formData = new FormData(event.currentTarget);

    // formData.forEach((value, name) => {
    //     console.log (name, value)
    // })

    event.currentTarget.reset();
}

formEl.addEventListener("submit", onFormSubmit);


// console.log(formEl.elements.email)
// console.log(formEl.elements.password)


