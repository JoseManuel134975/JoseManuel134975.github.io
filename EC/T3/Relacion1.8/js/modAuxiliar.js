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

const filterNumbersGreaterThan = (numbers, filter) => {
    const numerosFiltradosA = []

    numbers.forEach(element => {
        if (element < filter) {
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

const toHackerSpeak = (text) => {
    let textoConvertido = ""

    for (let i = 0; i < text.length; i++) {
        switch (text[i].toLowerCase()) {
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
                textoConvertido += text[i]
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

const getFileExtension = (file) => {
    let extension = ""

    for (let i = 0; i < file.length; i++) {
        if (file[i] === '.') {
            extension = file.substring(i + 1, file.length)
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

const flatArray = (arr) => {
    return arr.flat()
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

const removeDuplicates = (arr) => {
    const sinDuplicados = new Set()

    arr.forEach(element => {
        sinDuplicados.add(element)
    })


    return sinDuplicados
}

/** * @name countLetter * 
 * @description Devuelve la cantidad de veces que una letra aparece en un string * *
 * @param {string} letter - Letra a contar * 
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter} * 
 * @returns {Number} - Número de veces que aparece {letter} en {text} * * 
 * @example * countLetter("a", "javascript") // returns 2 */

const countLetter = (letter, text) => {
    let nVeces = 0
    letter.toLowerCase()
    text.toLowerCase()

    for (let i = 0; i < text.length; i++) {
        if (text[i] === letter) {
            nVeces++
        }
    }

    return nVeces
}

/** * @name removeWords * 
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas * * 
 * @param {string} str - Texto a recortar * 
 * @param {string[]} words - Palabras a remover * 
 * @returns {string} - Texto resultante con las palabras removidas * * 
 * @example * removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test" */

const removeWords = (str, words) => {
    const textoConvertido = str.split(" ")
    let textoResultante = ""

    words.forEach(elementInclude => {
        if (textoConvertido.includes(elementInclude)) {
            textoConvertido.forEach((element, index) => {
                if (element === elementInclude) {
                    textoConvertido.splice(index, 1)
                }
            })
        }
    })
    textoResultante = textoConvertido.join(" ")

    return textoResultante
}