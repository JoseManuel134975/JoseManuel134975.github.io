function invierteCadena(cad_arg){
    return cad_arg.split("").reverse().join(""); // Visual Studio no detecta los métodos de String porque en JavaScript no se pasan los parámetros con su tipo correspondiente (creo)
}

// split para separar con delimitadores las palabras
// reverse para invertir el orden de las palabras
// join para unir las palabras (por si acaso)
function inviertePalabras(cad_arg){
    return cad_arg.split(" ").reverse().join(" "); 
}

// sort para ordenar las palabras de mayor a menor
// Si b es mayor que a se ordena de forma descendente (y viceversa)
// [0] se devuelve el primer elemento porque lo ordena de mayor a menor 
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
    const consonantes = cad_arg.match(/[^aeiouAEIOU]/g)
    const vocales = cad_arg.match(/[aeiouAEIOU]/g)

    return consonantes.join('') + vocales.join('') // Con join uno las arrays en una cadena (sin espacios)
}