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