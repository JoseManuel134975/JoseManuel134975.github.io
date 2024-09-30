/**
 * Función para alternar la visibilidad de las listas de ventajas o desventajas
 * @param {string} seccion La sección a alternar
 */
function alternarVisibilidad(seccion) {
    const elemento = document.querySelector(seccion);
    if (elemento.style.display === 'none') {
        elemento.style.display = 'block';
    } else {
        elemento.style.display = 'none';
    }
}

/**
 * Función para resaltar una sección
 * @param {string} tipo El tipo de sección ('ventajas' o 'desventajas')
 */
function resaltarSeccion(tipo) {
    const ventajas = document.querySelector('ol');
    const desventajas = document.querySelector('ul');

    if (tipo === 'ventajas') {
        ventajas.style.backgroundColor = '#d4edda'; // Verde claro
        desventajas.style.backgroundColor = ''; // Reiniciar color
    } else if (tipo === 'desventajas') {
        desventajas.style.backgroundColor = '#f8d7da'; // Rojo claro
        ventajas.style.backgroundColor = ''; // Reiniciar color
    }
}

/**
 * Función para agregar botones para alternar visibilidad de ventajas y desventajas
 * @function
 */
function agregarBotones() {
    const section = document.querySelector('section');

    // Botón para alternar visibilidad de ventajas
    const btnVentajas = document.createElement('button');
    btnVentajas.textContent = 'Mostrar/Ocultar Ventajas';
    btnVentajas.onclick = function() {
        alternarVisibilidad('ol');
    };

    // Botón para alternar visibilidad de desventajas
    const btnDesventajas = document.createElement('button');
    btnDesventajas.textContent = 'Mostrar/Ocultar Desventajas';
    btnDesventajas.onclick = function() {
        alternarVisibilidad('ul');
    };

    // Botón para resaltar ventajas
    const btnResaltarVentajas = document.createElement('button');
    btnResaltarVentajas.textContent = 'Resaltar Ventajas';
    btnResaltarVentajas.onclick = function() {
        resaltarSeccion('ventajas');
    };

    // Botón para resaltar desventajas
    const btnResaltarDesventajas = document.createElement('button');
    btnResaltarDesventajas.textContent = 'Resaltar Desventajas';
    btnResaltarDesventajas.onclick = function() {
        resaltarSeccion('desventajas');
    };

    // Agregar botones a la sección
    section.appendChild(btnVentajas);
    section.appendChild(btnDesventajas);
    section.appendChild(btnResaltarVentajas);
    section.appendChild(btnResaltarDesventajas);
}

// Ejecutar cuando la página esté completamente cargada
window.onload = function() {
    agregarBotones();
};
