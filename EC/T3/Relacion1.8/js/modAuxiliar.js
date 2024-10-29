/**
* @name filterNumbersGreaterThan
* @description Filtra los números de un array que sean mayor a cierto número
x dejando solo los que sean menores a este
*
* @param {number[]} numbers - Array de números a filtrar
* @param {number} filter - Número a partir del cuál filtrar los demás número
s
* @returns {Number[]} - Array de números filtrados menores a {filter}
*
* @example
* filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/

const filterNumbersGreaterThan = (arrayNumeros, numero) => {
    const numerosFiltradosA = []

    arrayNumeros.forEach(element => {
        if (element < numero) {
            numerosFiltradosA.push(element)
        }
    });

    return numerosFiltradosA
}

/**
* @name toHackerSpeak
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
transformar las "a" en 4, las "e" en 3, las "i"
* en 1, las "o" en 0 y las "s" en 5
*
* @param {string} text
* @returns {String} - El texto convertido a "Hacker Speak"
*
* @example
* toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/

const toHackerSpeak = (texto) => {
    let textoConvertido = ""

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i].toLowerCase()) {
            case 'a':
                textoConvertido += '4'
                break
            case 'e':
                textoConvertido += '3'
                break
            case 'i':
                textoConvertido += '1'
                break
            case 'o':
                textoConvertido += '0'
                break
            case 's':
                textoConvertido += '5'
                break
            default:
                textoConvertido += texto[i]
        }
    }

    return textoConvertido
}

/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/

const getFileExtension = (archivo) => {
    let extension = ""

    for (let i = 0; i < archivo.length; i++) {
        if (archivo[i] === '.') {
            extension = archivo.substring(i + 1, archivo.length)
            break
        }
    }

    return extension
}

/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
*/

const flatArray = (array2D) => {
    return array2D.flat()
}

/**
* @name removeDuplicates
* @description Remueve duplicados de un array
*
* @param {[]} arr - Array con duplicados a remover
* @returns {[]} - El array resultante sin duplicados
*
* @example
* removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
*/

const removeDuplicates = (array) => {
    const sinDuplicados = new Set()

    array.forEach(element => {
        sinDuplicados.add(element)
    })


    return sinDuplicados
}