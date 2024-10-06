function invierteCadena(cad_arg){
    return cad_arg.split("").reverse().join(""); // Visual Studio no detecta los métodos de String porque en JavaScript no se pasan los parámetros con su tipo correspondiente (creo)
}

// split para convertir el string en un array de palabras y manejarlas mejor
// reverse para invertir el orden de las palabras
// join para unirlo todo
function inviertePalabras(cad_arg){
    return cad_arg.split(" ").reverse().join(" "); 
}

// sort para ordenar las palabras de mayor a menor 
// se resta la longitud de la palabra 
function encuentraPalabraMasLarga(cad_arg){
    return cad_arg.split(" ").sort((a, b) => b.length - a.length)[0];
}

// filter para filtrar las palabras que cumplan una condición
function filtraPalabrasMasLargas(cad_arg, i){
    return cad_arg.split(" ").filter(palabra => palabra.length > i).join(" ");
}

function cadenaBienFormada(cad_arg){
    return cad_arg.substr(0, 1).toUpperCase() + cad_arg.substr(1).toLowerCase();
}

function stringInfo(cad_arg){

    if (cad_arg === cad_arg.toLowerCase()) {
        return "Cadena minúscula";
    } else if(cad_arg === cad_arg.toUpperCase()) {
        return "Cadena mayúscula";
    }else{
        return "Cadena mezclada";
    }
}

function insideSubstring(cad_arg, sub_arg){
    return cad_arg.includes(sub_arg); // Includes comprueba si una cadena contiene una subcadena
}

function changeString(cad_arg){
    // Con match buscamos las vocales y consonantes pero nos devuelve una array*
    const consonantes = cad_arg.match(/[^aeiouAEIOU\s]/g) // Con el g nos aseguramos de que se buscan todas las vocales y con s que se excluyen los espacios
    const vocales = cad_arg.match(/[aeiouAEIOU]/g)

    return consonantes.join('') + vocales.join('') // Con join uno las arrays en una cadena (sin espacios)
}

function deleteCharRepeated(cad_arg){
    // Con filter quitamos los caracteres repetidos
    // En estos casos he usado function arrow para que sea más legible y rápido****************
    // Se le pasa a filter los parámetros de manera que:
    // indexOf(c) nos devuelve el primer indice del caracter que haya en esa posicion
    // Y se comprueba si es igual a la posicion actual (index)
    // Resumidamente, como un bucle for
    return cad_arg.split("").filter((c, index) => cad_arg.indexOf(c) === index).join("");
}

function checkSecondString(cad_arg, cad_arg2){
    let position = 0
    let conversion = convertirMinusculas(cad_arg, cad_arg2)
    conversion = borrarEspacios(conversion[0], conversion[1])

    if(insideSubstring(conversion[0], conversion[1])){
        position = conversion[0].indexOf(conversion[1]) // indexOf nos devuelve el primer indice de la subcadena

        return position
    }else{
        return "No existe la subcadena"
    }
}

function convertirMinusculas(...args){ // Función auxiliar (ej6)

    for(let i = 0; i < args.length; i++){
        args[i] = args[i].toLowerCase()
    }

    return args
}

function borrarEspacios(...args){ // Función auxiliar (ej6)

    for(let i = 0; i < args.length; i++){
        args[i] = args[i].replace(/\s/g, "")
    }

    return args
}

function palindromo(cad_arg){
    cad_arg = cad_arg.toLowerCase().replace(/\s/g, "")

    return cad_arg === cad_arg.split("").reverse().join("")
}

function contarPalabras(cad_arg){
    return cad_arg.trim().replace(/\s+/g, " ").split(" ").length // split no nos sirve para los espacios cuando estos son más de 1*
    // Al decirle a split un espacio nos devuelve un array de palabras separadas
    // Sin embargo, si le decimos que no haya espacios, nos devuelve un array de caracteres (cada uno en su posición)
    // Por eso el orden de las funciones aquí es importante
    // Primero se quitan los espacios, y luego se separan las palabras :)
}

function validateCreditCard(card){
    card = card.split("").map(Number) // Con map convertimos el string en un array de enteros
    const uniqueDigits = new Set(card) // Set nos sirve para eliminar los elementos repetidos
    const sum = card.reduce((acc, digit) => acc + digit, 0); // reduce nos sirve para sumar los elementos
    
    if(card.length === 16 && uniqueDigits.size >= 2 && sum > 16 && card[15] % 2 === 0){
        return true
    }else{
        return false
    }
}

function validateCreditCard2(card){
    card = card.replace(/-/g, ""); // Con replace reemplazamos los guiones por vacíos
    card = card.split("").map(Number) // Con map convertimos el string en un array de enteros
    const uniqueDigits = new Set(card) // Set nos sirve para eliminar los elementos repetidos
    const sum = card.reduce((acc, digit) => acc + digit, 0); // reduce nos sirve para sumar los elementos

    console.log(card)
    if(card.length === 16 && uniqueDigits.size >= 2 && sum > 16 && card[15] % 2 === 0){
        return true
    }else{
        return false
    }
}