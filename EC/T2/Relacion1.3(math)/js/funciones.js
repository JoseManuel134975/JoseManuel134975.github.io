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

function mostrarImagen(){
    window.onload = function() {
        // Crear un elemento <img>
        var img = document.createElement('img');
        var img2 = document.createElement('img');
        var img3 = document.createElement('img');
        // Y las metemos dentro de un array para que Math.random() funcione
        const container = [img, img2, img3];
        let random = 0
        
        // Asignar la fuente de la imagen
        img.src = '../img/fall-4589724_1280.jpg'; // Cambia a la ruta de tu imagen
        img2.src = '../img/pumpkins-8338100_1280.jpg'; // Cambia a la ruta de tu imagen
        img3.src = '../img/sea-7914544_1280.jpg'; // Cambia a la ruta de tu imagen
        
        // Opcional: Añadir atributos adicionales como el 'alt' o estilos
        img.style.width = '300px'; // Cambiar el tamaño si es necesario
        img2.style.width = '300px'; 
        img3.style.width = '300px'; 
        
        // Agregar la imagen al contenedor y generamos el número aleatorio
        random = Math.floor(Math.random()*3)
        document.getElementById('img').appendChild(container[random]); // Mostramos
    }
}