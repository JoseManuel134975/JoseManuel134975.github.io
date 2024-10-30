// EJERCICIO 1
const sum = (num1, num2) => {
    return num1 + num2
}

let stringLength = (str) => {
    console.log(`the length of "${str}" is:`, str.length)
}

stringLength = (str) => {
    let length = str.length 
    console.log(`the length of "${str}" is:`, length) 
    return str.length
}

const showAlert = (name) => {
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
}

// EJERCICIO 2
const saludar = (name, age) => {
    return `Hello, I am ${name}, and I am ${age} years old`
}

// EJERCICIO 3
const sumaArray = (arrayIntegers) => {
    const valoresSumados = arrayIntegers.reduce((suma, numero) => suma + numero)

    return valoresSumados
}

// EJERCICIO 4
const fire = () => `bulls-`

// EJERCICIO 5
