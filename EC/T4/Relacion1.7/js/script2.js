const form = document.forms['form']
const submit = form.elements['submit']

// Ejercicio 3
submit.addEventListener("click", (event) => {
    event.preventDefault()
    
    const username = form.elements['username']
    validaFormulario(username.value)
})

// Función
const validaFormulario = (value) => {
    const expRMinusc = new RegExp(/[a-z]/)
    const expRMayusc = new RegExp(/[A-Z]/)
    const expRMinimum = new RegExp(/^.{6,}$/)

    if(expRMinusc.test(value) && expRMayusc.test(value) && expRMinimum.test(value)) {
        alert('Todo correcto.')

    }else if(expRMinusc.test(value) && expRMayusc.test(value)) {
        alert('Mínimo 6 caracteres...')

    }else if(expRMinusc.test(value) && expRMinimum.test(value)) {
        alert('Mínimo 1 letra mayúscula...')

    }else if(expRMinimum.test(value) && expRMayusc.test(value)) {
        alert('Mínimo 1 letra minúscula...')

    }else {
        alert('Repite anda...')
    }
}