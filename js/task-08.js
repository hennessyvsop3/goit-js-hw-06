const btnEl = document.querySelector("form");



btnEl.addEventListener("submit", checkFunction);

function checkFunction(event) {
        
    event.preventDefault();
    const {email, password} = event.target.elements
    if (email.value === "" || password.value === "") {
        
        alert('Check empty fields');
    }
    const obj = Array.from(event.target.elements).reduce((acc, element) =>
    {
        if (element.name) {
            acc[element.name] = element.value;
         }
        
        return acc;
    }, {})
    console.log(obj);
    
}
    

    