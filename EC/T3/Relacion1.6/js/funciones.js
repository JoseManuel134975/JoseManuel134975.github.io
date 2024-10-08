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

function openConfirmWindow() {
    let ventana = window.open("", "_blank", "width=500,height=400");
    ventana.document.write("<h1>Confirm</h1>");
    ventana.document.write("<br> <button onclick='window.close();'>Close</button>");
}

function openWindowAndCheckIfClosed() {
    let ventana = window.open("", "_blank", "width=500,height=400");
    ventana.document.write("<h1>Confirm</h1>");
    if(!ventana.closed){
        document.getElementById("checkWindow").innerHTML = "La ventana esta abierta";
    }else{
        document.getElementById("checkWindow").innerHTML = "La ventana se ha cerrado";
    }
}

function openWindowAndPutNewName() {
    let ventana = window.open("", "_blank", "width=500,height=400");
    ventana.document.write("<h1>Confirm</h1>");
    let newName = ventana.prompt("Introduce el nuevo nombre");
    ventana.name = newName
    document.getElementById("newName").innerHTML = "El nuevo nombre es: " + ventana.name
}

function openWindowWithSize() {
    let ventana = window.open("", "_blank", "width=300,height=100");
    ventana.document.write("<h1>Confirm</h1>");
    let ancho = ventana.prompt("Introduce el ancho");
    let alto = ventana.prompt("Introduce el alto");
    ventana.resizeTo(ancho, alto)
    document.getElementById("newSize").innerHTML = "El nuevo tamaño es: " + ventana.outerWidth + "x" + ventana.outerHeight
    ventana.moveTo(50, 50)
    let x = ventana.prompt("Introduce la coordenada x");
    let y = ventana.prompt("Introduce la coordenada y");
    ventana.moveBy(x, y)
}

function moveDisplacementBar() {
    window.scrollBy(0, 10);
    document.getElementById("displacementBar").innerHTML = "La barra de desplazamiento se ha desplazado " + window.scrollY + "px";
    let x = window.prompt("Introduce la coordenada x");
    let y = window.prompt("Introduce la coordenada y");
    window.scrollTo(x, y);
    document.getElementById("displacementBar").innerHTML = "La barra de desplazamiento se ha desplazado " + window.scrollY + "px" + " y se ha movido a las coordenadas (" + x + ", " + y + ")";
}

function goToMarker() {
    const item = document.getElementById("marcador");

    window.location.hash = "marcador";
    document.getElementById("marcador").innerHTML = "Hola, soy un marcador...";
}

function getHostname() {
    document.getElementById("hostname").innerHTML = window.location.hostname;
}

function getURL() {
    document.getElementById("url").innerHTML = window.location.href;
}

function goToURL() {
    let url = prompt("Introduce la URL a redirigir:");
    window.location.href = url;
}

function getProtocol() {
    document.getElementById("protocol").innerHTML = window.location.protocol;
}

function reloadPage() {
    window.location.reload();
}

function getLastUpdate() {
    document.getElementById("lastUpdate").innerHTML = document.lastModified;
}

function getCurrentURL() {
    document.getElementById("currentURL").innerHTML = document.referrer;
}

function getTitle() {
    document.getElementById("title").innerHTML = document.title;
}

function getURL() {
    document.getElementById("url").innerHTML = document.URL;
}

function getNumberOfAnchors() {
    document.getElementById("anchors").innerHTML = document.anchors.length;
}

function getNumberOfImages() {
    document.getElementById("images").innerHTML = document.images.length;
}

function getIDofFirstImage() {
    document.getElementById("firstImage").innerHTML = document.images[0].id;
}

function getNumberOfLinks() {
    document.getElementById("links").innerHTML = document.links.length;
}

function changeTitle() {
    let newTitle = prompt("Introduce el nuevo tiútulo:");
    document.title = newTitle;
}