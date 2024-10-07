var browser

function ejercicio1(){
    browser = navigator.userAgent
    document.getElementById("userAgent").textContent = browser

    browser = navigator.cookieEnabled
    document.getElementById("cookieEnabled").textContent = browser

    browser = navigator.geolocation

}