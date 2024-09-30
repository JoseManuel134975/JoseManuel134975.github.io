// Mostrar alerta de bienvenida al cargar la página
window.onload = function() {
    alert("Bienvenido a WebDoc, la herramienta de documentación para desarrolladores.");
}

/**
 * Función para cambiar el contenido del título principal
 * @function
 */
function cambiarContenido() {
    const titulo = document.querySelector('h1');
    titulo.textContent = "Generadores de Documentación Automática";
}

/**
 * Función para mostrar alerta de bienvenida
 * @function
 */
function mostrarAlerta() {
    alert("Creado por José Manuel - 2024-25");
}
