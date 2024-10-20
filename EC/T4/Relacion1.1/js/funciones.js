function maximo(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

function lanzamiento() {
    return Math.floor(Math.random() * 6 + 1);
}

function lanzamientoMejorado() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    let rand = 0;

    for (let tirada = 0; tirada < 6000; tirada++) {
        rand = Math.floor(Math.random() * 6 + 1);

        // Se comprueba si la tirada es 1, 2, 3, 4, 5 o 6
        switch (rand) {
            case 1: num1++; break; // y se aumenta cada contador dependiendo de la tirada
            case 2: num2++; break;
            case 3: num3++; break;
            case 4: num4++; break;
            case 5: num5++; break;
            case 6: num6++; break;
        }
    }
    for (let i = 0; i < 6; i++) {
        document.write("El numero " + (i + 1) + " ha salido " + eval("num" + (i + 1)) + " veces. <br>");
    }
}

function calcularVolumenEsfera(radio) {
    const pi = Math.PI;
    const volumen = (4 / 3) * pi * Math.pow(radio, 3);
    return volumen;
}

function calcularAreaCirculo(radio) {
    const pi = Math.PI;
    const area = pi * Math.pow(radio, 2);
    return area;
}

function calcularPotencias(base, exponente) {
    console.log(`Llamada: calcularPotencias(${base}, ${exponente})`); // Solo es para depuración***

    // Caso base para parar la recursividad
    if (exponente === 0) {
        return 1;
    }

    // Caso recursivo para llamarse a sí misma
    return base * calcularPotencias(base, exponente - 1);
}

function calcularFactorial(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    return factorial;
}