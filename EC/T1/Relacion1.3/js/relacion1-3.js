function ageCalculator(cYear, bYear) {
    const age1 = cYear - bYear // Calcula la edad actual
    const age2 = age1 - 1 // Calcula la edad de los años anteriores

    return age1 + " or " + age2
}

function supplyCalculator(cAge, mAge, amountPerDay) {
    // Calcula cuántos años te quedan por vivir
    const yLeft = mAge - cAge

    // Calcula cuántos días quedan en esos años (asumiendo 365 días por año)
    const dLeft = yLeft * 365

    // Calcula el suministro total que necesitarías
    const tNeeded = dLeft * amountPerDay

    return tNeeded
}

function circumference(radius) {
    return 2 * radius * Math.PI
}

function area(radius) {
    return radius * radius * Math.PI
}

function convertTemperature(celsius, fahrenheit) {
    cToF = (celsius * 9 / 5) + 32 // Convierte de Celsius a Fahrenheit
    fToC = (fahrenheit - 32) * 5 / 9 // Convierte de Fahrenheit a Celsius

    return celsius + "ºC is " + cToF + "ºF" + "<br> " + fahrenheit + "ºF is " + fToC + "ºC"
}