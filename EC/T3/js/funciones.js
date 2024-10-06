function openEditWindow(titulo) {
    let ventana = window.open("", "_blank", "width=500,height=400");
    ventana.document.write("<h1>" + titulo + "</h1>");
    ventana.moveTo(screen.width - 500, 0);
    ventana.document.write("<br> <button onclick='window.close();'>Close</button>");
}

var ventana // La uso global a partir de aquí porque tuve problemas...
function openEditWindow2() {
    ventana = window.open("", "_blank");
    ventana.document.write("<button onclick='window.close();'>Cerrar ventana</button>");
    if (ventana) {
        window.document.write("<button onclick='ventana.close();'>Cerrar ventana secundaria</button>");
    }
}

function openEditWindow3() {
    for (let i = 1; i < 6; i++) {
        ventana = window.open("https://www.google.com/?hl=es&safe=active&ssui=on", "_blank", "width=350,height=350");
        ventana.document.write("Ventana " + i + "<br>")
        ventana.document.write("<button onclick='window.close();'>Cerrar ventana</button>");
    }
}

let cont = 5
function openEditWindow4(){
    if(cont > 0){
        document.getElementById("cuentaAtras").innerHTML = cont
        cont--
    }else{
        clearInterval(timerId) // Detiene el intervalo
        window.location.assign("https://www.pccomponentes.com/")
    }
}

function enviarMensajeAVentanaSecundaria(){
    
}