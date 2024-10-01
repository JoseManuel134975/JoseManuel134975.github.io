
function contadorAtras() {
    document.write(contador + "<br>"); // Muestra el valor del contador
    if (contador > 0) {
        contador--; // Decrementa el contador
    } else {
        clearInterval(intervalo); // Detiene el intervalo cuando llega a 0
        document.write("Fin de la cuenta atrás");
    }
}

let intervalo = setInterval(contadorAtras, 1000); // Pasa la referencia de la función, sin comillas
