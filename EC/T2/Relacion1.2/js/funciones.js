// Ejercicio 1
let cont = 60 // No hacen falta variables globales porque JavaScript las detecta ignorando el orden del código :)
function contadorAtras() {
    if(cont > 0){
        document.write(cont + "<br>")
        cont--
    }else{
        clearInterval(timerId) // Detiene el intervalo
        document.write("Se acabo el tiempo")
    }

}


// Ejercicio 2
function reloj() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    document.getElementById("reloj").innerHTML = hour + ":" + minute + ":" + second // Imprime el reloj sin mostrarlo repetidamente
    
    return second // Necesario para el ejercicio 3*********
}

// Ejercicio 3
function relojGoogle() {
    if(reloj() === 0){
        window.location.assign("https://www.google.com/") // Cambia la URL
    }
}