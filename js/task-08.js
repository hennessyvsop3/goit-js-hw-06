const btnEl = document.querySelector("form");
const inputEmail = document.querySelector('input[type="email"]');
const inputPass = document.querySelector('input[type="password"]');
console.dir(btnEl);


btnEl.addEventListener('submit', event => {
    event.preventDefault();
    if (inputEmail.value === "" || inputPass.value === "") {
        
        alert('Check empty fields');
    }
    const obj = Array.from(btnEl.elements).reduce((acc, element) =>
    {
        if (element.name) {
            acc[element.name] = element.value;
         }
        
        return acc;
    }, {})
    console.log(obj);
})
