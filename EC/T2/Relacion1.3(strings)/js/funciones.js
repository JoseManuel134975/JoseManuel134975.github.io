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