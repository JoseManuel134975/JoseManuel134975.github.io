function muestraArray(){
    const array = ["Peras", "Manzanas", "Kiwis", "Platanos", "Mandarinas"]

    // Eliminar manzanas
    array.splice(1, 1)
    console.log(array)

    // Añade detras de los platanos esto: Naranjas y Sandias 
    array.splice(3, 0, "Naranjas", "Sandias") // !Es importante especificar el 0 si no queremos eliminar nada
    console.log(array)

    // Quita Kiwis y pon Cerezas y Nisperos
    array.splice(1, 1, "Cerezas", "Nisperos")

    // Muestra
    console.log(array)
}

// Función común
// function doble(array){
//     for(let i=0;i<array.length;i++){
//         array[i] = array[i] * 2
//     }

//     return array
// }

// Arrow function
const doble = (array) => {
    const arraySalida = []

    array.forEach(element => {
        arraySalida.push(element * 2)
    });

    return arraySalida
}

// Función común
// function incrementa(array){
//     for(let i=0;i<array.length;i++){
//         array[i] = array[i] + 1
//     }

//     return array
// }

// Arrow function
const incrementa = (array) => {
    const arraySalida = []

    array.forEach(element => {
        arraySalida.push(element + 1)
    })

    return arraySalida
}

const modificaArray = (array, fEjecuta) => {
    const arraySalida = []

    array.forEach(element => {
        arraySalida.push(fEjecuta(element))
    })

    return arraySalida
}

const filtraArray = (arrayValores, fVerifica) => {
    const arraySalida = []

    arrayValores.forEach(element => {
        if(fVerifica(element)){
            arraySalida.push(element)
        }
    })

    return arraySalida
}

