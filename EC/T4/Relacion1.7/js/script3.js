const form = document.forms['form']
const submit = form.elements
// console.log(submit);

for(const element of submit) {
    console.log(element.type);
}

// Ejercicio 4
submit.addEventListener("click", (event) => {
    event.preventDefault()
    
})
