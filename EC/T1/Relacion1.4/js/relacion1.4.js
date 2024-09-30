// Confirmación para github
function sum(...nums) { // Argumentos ilimitados que se guardan en una array
    let total = 0

    // Recorremos el array para sumar los elementos
    for (let num = 0; num < nums.length; num++) {
        total = total + nums[num]
    }

    return total
}

function addOnlyNums(...numsOrStrings) {
    let total = 0

    for (let num = 0; num < numsOrStrings.length; num++) {
        if (typeof numsOrStrings[num] === "number") { // Comprobamos que el valor sea un número
            total = total + numsOrStrings[num]
        }
    }

    return total
}

function countTheArgs(...args) {
    return args.length // Al ser un array de argumentos podemos usar el método length
}

function combineTwoArrays(array1, array2) {
    const combinedArray = [...array1, ...array2]

    return combinedArray
}

function sumEveryOther(...args) {
    let sum = 0;

    for (let i = 0; i < args.length; i += 2) {
        sum += args[i];
    }

    return sum;
}

function divisible(num) {
    return num % 3 === 0;
}

function divisibleEntre(num1, num2) {
    return num1 % num2 === 0;
}

function rango(valor, rangoInf, rangoSup) {
    return valor >= rangoInf && valor <= rangoSup // Al usar una condición directamente nos retorna true o false
}

function tieneTresDigitos(num) {
    return num >= 100 && num <= 999
}

function areaRectangulo(base, altura) {
    return base * altura
}

function imc(peso, altura) {
    return peso / (altura * altura)
}

function precioFinal(precio, descuento) {
    return precio * (1 - descuento)
}

function factorial(num) {
    if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

function divisible(dividendo, divisor) {
    // Comprobamos que el divisor no sea 0 para evitar división por cero
    if (divisor === 0) {
        throw new Error("El divisor no puede ser cero.");
    }
    return dividendo % divisor === 0;
}
