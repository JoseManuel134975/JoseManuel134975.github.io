/**
 * Función para cambiar el estilo de negrita de los elementos <li>
 * @param {HTMLElement} item El elemento <li>
 * @returns {void}
 */

// Selecciona todos los elementos <li> dentro del <ol>
const items = document.querySelectorAll('ol li, ul li');

// Itera sobre cada <li>
items.forEach(item => {
    // Divide el contenido del <li> en dos partes, antes y después de los ":"
    const parts = item.innerHTML.split(':');

    // Si el símbolo ":" está presente en el <li>
    if (parts.length > 1) {
        // La primera parte (antes de ":") la envuelve en <span class="negrita">
        const boldPart = '<span class="negrita">' + parts[0] + ':</span>';

        // Une la parte en negrita con el resto del contenido
        const restOfText = parts.slice(1).join(':'); // El resto del texto después de ":"
        item.innerHTML = boldPart + restOfText;
    }
});
