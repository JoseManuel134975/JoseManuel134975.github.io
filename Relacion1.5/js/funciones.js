/**
 * Devuelve un array con los argumentos que no se repiten
 * @param {any} args
 * @returns {uniqueArgs}
 */
function onlyUniques(...args){
    const uniqueArgs = []

    for(let i=0;i<args.length;i++){
        if(!uniqueArgs.includes(args[i])){
            uniqueArgs.push(args[i])
        }
    }

    return uniqueArgs
}

/**
 * Devuelve la suma de los cuadrados de los argumentos
 * @param {any} args
 * @returns {sum}
 */
function squareAndSum(...args){
    let sum = 0

    for(let i=0;i<args.length;i++){
        sum += args[i]**2
    }

    return sum
}

