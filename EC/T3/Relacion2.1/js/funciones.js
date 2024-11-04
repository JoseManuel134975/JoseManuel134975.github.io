const largestNumber = (array) => {
    let largestNum = 0

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i-1]) {
            largestNum = array[i-1]
        } else {
            largestNum = array[i]
        }
    }

    return largestNum
}

const longestString = (array) => {
    const longestStr = array.reduce((acc, currValue) => {
        if (currValue.length > acc.length) {
            return currValue
        } else {
            return acc
        }
    })

    return longestStr
}

const evenNumbers = (array) => {
    const evenNums = []

    array.forEach(element => {
        if (element % 2 === 0) {
            evenNums.push(element)
        }
    });

    return evenNums
}

const oddNumbers = (array) => {
    const oddNums = []

    array.forEach(element => {
        if (element % 2 !== 0) {
            oddNums.push(element)
        }
    });

    return oddNums
}

const containIs = (array) => {
    let wordsWithIs = []

    array.forEach(element => {
        if (element.toLowerCase().includes('is')) {
            wordsWithIs.push(element)
        }
    })

    return wordsWithIs
}

const divisibleByThree = (array) => {
    let check = array.reduce((acc, currValue) => {
        acc = true

        if (currValue % 3 !== 0) {
            acc = false
        }
        
        return acc
    })

    return check
}

const zipArrays = (array1, array2) => concactA = array1.concat(array2)

const sortJoinedArray = (array) => array.sort((a, b) => a - b)

const deleteFirstWord = (array) => {
    array.splice(0, 1)

    return array
}

const newWordAtTheStart = (array) => {
    array.splice(0, 0, "Jamas")

    return array
}

const replaceSomeElements = (array) => {
    array.splice(2, 1, "Nunca")

    return array
}

const findInArray = (namesArray) => {
    const startWithJ = []
    const initials = []

    namesArray.forEach(element => {
        if (element.charAt(0) === 'J') {
            startWithJ.push(element)
        }
    })

    // console.log(startWithJ)
    namesArray.forEach(element => {
        initials.push(element.charAt(0))
    })

    initials.sort()
    const concat = startWithJ.concat(initials)

    return concat
}

const treasureHunt = () => {
    let treasure = 52
    let fila = 0
    let columna = 0

    const map = [
        [34, 21, 32, 41, 25],
        [14, 42, 43, 14, 31],
        [54, 45, 52, 42, 23],
        [33, 15, 51, 31, 35],
        [21, 52, 33, 13, 23]
    ]

    while (true) {
        let valor = map[fila][columna]
        console.log(`Fila: ${fila} - Columna: ${columna} - Valor: ${valor}`)

        if (valor === treasure) {
            console.log(`¡Has encontrado el tesoro!`)
            break
        } else {
            map[fila].splice(columna, 1)
            console.log(map)
        }

        // if (fila < 0 || fila >= 5 || columna < 0 || columna >= map[fila].length) {
        //     fila++
        // }

        fila = Math.floor(valor / 10) - 1;
        columna = (valor % 10) - 1;

        fila = (fila + map.length) % map.length;
        columna = (columna + map[0].length) % map[0].length;
    }
}

const treasureHuntV2 = (filas, columnas) => {
    let treasure = 52
    let fila = 0
    let columna = 0

    const map = []

    for (let i = 0; i < filas; i++) {
        let fila = []
        for (let j = 0; j < columnas; j++) {
            fila.push(Math.floor(Math.random() * 51) + 11)
        }
        map.push(fila)
    }

    map[4][1] = 52
    
    while (true) {
        let valor = map[fila][columna]
        console.log(`Fila: ${fila} - Columna: ${columna} - Valor: ${valor}`)

        if (valor === treasure) {
            console.log(`¡Has encontrado el tesoro!`)
            break
        } else {
            map[fila].splice(columna, 1)
            console.log(map)
        }

        // if (fila < 0 || fila >= 5 || columna < 0 || columna >= map[fila].length) {
        //     fila++
        // }

        nuevafila = Math.floor(valor / 10) - 1;
        nuevacolumna = (valor % 10) - 1;

        fila = (nuevafila + map.length) % map.length;
        columna = (nuevacolumna + map[0].length) % map[0].length;
    }
}