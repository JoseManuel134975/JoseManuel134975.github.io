function randomCeroUno() {
    return Math.round(Math.random());

}

function randomCienDoscientos() {
    return Math.floor(Math.random() * (200 - 100 + 1)) + 100
    
}

function randomUser(num1, num2) {
    return Math.floor(Math.random() * (num2 - num1)) + num1
}

function anguloCalculos(ang){
    let seno = Math.sin(ang)
    let coseno = Math.cos(ang)
    let tangente = Math.tan(ang)

    return "El seno es: " + seno + "<br>" + "El coseno es: " + coseno + "<br>" + "La tangente es: " + tangente
}

function hipotenusa(cateto1, cateto2){
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2))
}