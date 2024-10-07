var browser
var userScreen

function ejercicio1(){
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

function ejercicio2(){
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