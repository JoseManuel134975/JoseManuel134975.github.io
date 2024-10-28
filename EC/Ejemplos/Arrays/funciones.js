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

