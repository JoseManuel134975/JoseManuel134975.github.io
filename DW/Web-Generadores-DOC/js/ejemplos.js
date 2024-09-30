/**
 * Mostrar un mensaje emergente cuando se haga clic en una imagen
 * @param {string} generador El nombre del generador
 */
function mostrarInfoGenerador(generador) {
    let mensaje = '';
    
    switch(generador) {
        case 'doxygen':
            mensaje = 'Doxygen es un generador popular para lenguajes como C++, C y Java.';
            break;
        case 'mkdocs':
            mensaje = 'MKDocs es rápido y fácil de usar, ideal para proyectos en Python.';
            break;
        case 'jsdoc':
            mensaje = 'JSDoc es el estándar para documentar proyectos en JavaScript.';
            break;
    }

    alert(mensaje);
}

// Asignar los eventos a las imágenes después de cargar la página
window.onload = function() {
    document.querySelector('img[alt="doxygen"]').onclick = function() {
        mostrarInfoGenerador('doxygen');
    };

    document.querySelector('img[alt="mkdocs"]').onclick = function() {
        mostrarInfoGenerador('mkdocs');
    };

    document.querySelector('img[alt="js"]').onclick = function() {
        mostrarInfoGenerador('jsdoc');
    };

    // Agregar un botón para cambiar el contenido de los artículos
    const boton = document.createElement('button');
    boton.textContent = 'Actualizar Artículos';
    boton.onclick = cambiarContenidoArticulos;
    document.querySelector('section').appendChild(boton);
}
