const form = document.forms['form']
const submit = form.elements['submit']

// Ejercicio 1
submit.addEventListener("click", (event) => {
    event.preventDefault()
    
    const pass = form.elements['pass']
    const email = form.elements['email']
    const card = form.elements['card']
    console.log(`¿Tiene una mayúscula?: ${validaMayuscula(pass.value)}`)
    console.log(`¿Tiene al menos 8 caracteres?: ${validaLongitud(pass.value)}`)
    console.log(`¿Tiene al menos un dígito?: ${validaNumero(pass.value)}`)
    console.log(`¿Tiene uno de estos caracteres (!@#$%^&)?: ${validaCaracteresEspeciales(pass.value)}`)
    console.log(`¿El correo tiene el formato correcto?: ${validaCaracteresEspeciales(email.value)}`)
    console.log(`¿El correo tiene el formato correcto?: ${validaTarjetaCredito(card.value)}`)
})


// Funciones

/**
 * 
 * @param {string} value 
 * @returns boolean
 */

const validaMayuscula = (value) => {
    const expR = new RegExp(/[A-Z]/)
    return expR.test(value)
}

const validaCaracteresEspeciales = (value) => {
    const expR = new RegExp(/[!@#$%^&]/)
    return expR.test(value)
}

const validaCorreo = (value) => {
    const expR = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    return expR.test(value)
}

const validaTarjetaCredito = (value) => {
    value = value.replace(/\D/g, '')
    const expR = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/)
    return expR.test(value)
}

const validaLongitud = (value) => {
    const expR = new RegExp(/^.{8,}$/)
    return expR.test(value)
}

const validaNumero = (value) => {
    const expR = new RegExp(/\d/)
    return expR.test(value)
}



// Ejercicio 2

const name = form.elements["name"];
const surname = form.elements["surname"];
const dni = form.elements["dni"];
const phone = form.elements["phone"];
const email = form.elements["email"];
const user = form.elements["user"];

// Funciones

/**
 * 
 * @param {string} value 
 */

const validarNombre = (value) => {
    const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    const parragraph = document.getElementById('name')
    parragraph.textContent = regexName.test(value)
}

const validarApellidos = (value) => {
    const regexSurname = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    const parragraph = document.getElementById('surname')
    parragraph.textContent = regexSurname.test(value)
}

const validarDNI = (value) => {
    const regexDNI = /^\d{8}[A-Za-z]$/;              // 8 dígitos y una letra
    const parragraph = document.getElementById('dni')
    parragraph.textContent = regexDNI.test(value)
}

const validarTelefono = (value) => {
    const regexPhone = /^\d{9}$/;                 // 9 dígitos
    const parragraph = document.getElementById('phone')
    parragraph.textContent = regexPhone.test(value)
}

const validarEmail = (value) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato estándar de email
    const parragraph = document.getElementById('email')
    parragraph.textContent = regexEmail.test(value)
}

const validarUsuario = (value) => {
    const regexUser = /^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    const parragraph = document.getElementById('user')
    parragraph.textContent = regexUser.test(value)
}

name.addEventListener("blur", () => validarNombre(name.value))
surname.addEventListener("blur", () => validarApellidos(surname.value))
dni.addEventListener("blur", () => validarDNI(dni.value))
phone.addEventListener("blur", () => validarTelefono(phone.value))
email.addEventListener("blur", () => validarEmail(email.value))
user.addEventListener("blur", () => validarUsuario(user.value))
