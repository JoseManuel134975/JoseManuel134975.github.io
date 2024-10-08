var browser
var userScreen

function ejercicio1() {
    browser = navigator.userAgent
    document.getElementById("userAgent").textContent = browser

    browser = navigator.cookieEnabled
    document.getElementById("cookieEnabled").textContent = browser

    browser = navigator.language
    document.getElementById("language").textContent = browser

    browser = navigator.onLine
    document.getElementById("onLine").textContent = browser

    browser = navigator.platform
    document.getElementById("platform").textContent = browser

    browser = navigator.product
    document.getElementById("product").textContent = browser
}

function ejercicio2() {
    userScreen = screen.width
    document.getElementById("width").textContent = userScreen

    userScreen = screen.height
    document.getElementById("height").textContent = userScreen

    userScreen = screen.colorDepth
    document.getElementById("colorDepth").textContent = userScreen

    userScreen = screen.pixelDepth
    document.getElementById("pixelDepth").textContent = userScreen

    userScreen = screen.availWidth
    document.getElementById("availWidth").textContent = userScreen

    userScreen = screen.availHeight
    document.getElementById("availHeight").textContent = userScreen

    userScreen = screen.availTop
    document.getElementById("availTop").textContent = userScreen

    userScreen = screen.availLeft
    document.getElementById("availLeft").textContent = userScreen
}

var ventanaGeneral
var ventana

function windowConfirm(id) { // Le pasamos el id del elemento (con this.id desde HTML)
    const item = document.getElementById(id); // Obtenemos el elemento dentro del objeto para poder acceder a su id y mostrarlo

    // Asignar el evento onclick al elemento clicado
    // Abrir una nueva ventanaGeneral y mostrar el id del elemento clicado
    ventanaGeneral = window.open("", "_blank");
    ventanaGeneral.document.write("<h1>Has pulsado la opción número " + item.id + "</h1>");
}

function checkWindow(){
    ventana = window.open("", "_blank");

    if (ventana.closed) {
        window.document.getElementById("checkWindow").innerHTML = "La ventanaGeneral ha cerrado"
    }else{
        window.document.getElementById("checkWindow").innerHTML = "La ventanaGeneral no ha cerrado"
    }
}