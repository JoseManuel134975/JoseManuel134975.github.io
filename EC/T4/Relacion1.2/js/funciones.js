function minMaxMiddle() {
    const array = []
    let num1 = parseInt(prompt("Introduce el primer número"))
    let num2 = parseInt(prompt("Introduce el segundo número"))
    let num3 = parseInt(prompt("Introduce el tercer número"))
    let num4 = parseInt(prompt("Introduce el cuarto número"))
    let num5 = parseInt(prompt("Introduce el quinto número"))

    array.push(num1, num2, num3, num4, num5)

    let min = Math.min(...array)
    let max = Math.max(...array)
    let middle = (num1 + num2 + num3 + num4 + num5) / 5
    return [min, max, middle]
}


function insideColor(){
    const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"] 

    let color = prompt("Introduce un color")
    color = color.toLowerCase()
    return array.includes(color)
}

function saveNums(num){
    const array = []

    for (let i = 0; i < 20; i++) {
        if(i < num){
            array.push(Math.floor(Math.random() * 100))
        }else{
            break
        }
    }
    return array
}

function interseccionUnionDiferencia(){
    const array1 = ["Hola", "Adios", "Amanecer", "Instituto", "Casa"]
    const array2 = ["Amanecer", "Anochecer", "Atardecer", "Noche", "Día"]
    const union = array1.concat(array2)
    const interseccion = array1.filter(word => array2.includes(word)) // Filter devuelve un array con las palabras que cumplen cierta condición
    const diferencia = array1.filter(word => !array2.includes(word)) // La function arrow determina la condición*

    return [union, interseccion, diferencia]
}

function minMaxMiddle2() {
    const array = []
    for(let i = 0; i < 20; i++){
        array.push(Math.floor(Math.random() * 100))
    }

    document.write("Números generados: " + array.join(" - "))

    let min = Math.min(...array)
    let max = Math.max(...array)
    let middle = (array[0] + array[1] + array[2] + array[3] + array[4]) / 5
    return [min, max, middle]
}

function getString(){
    let string = prompt("Introduce una cadena o palabra")
    string = string.toLowerCase()
    let texto = document.body.innerText // Adquiere el texto del body para poder compararlo
    texto = texto.toLowerCase()
    if(texto.includes(string)){ // Includes comprueba si una cadena contiene una subcadena
        document.getElementById("resultado").innerHTML = "La cadena o palabra se encuentra en el texto :)"
        return true
    }else{
        document.getElementById("resultado").innerHTML = "La cadena o palabra no está en el texto :("
        return false
    }
}

function arraySort(){
    const array = []
    for(let i = 0; i < 20; i++){
        array.push(Math.floor(Math.random() * 100))
    }

    document.write("Array sin ordenar: " + array.join(" - "))
    document.write("Array ordenada y elementos únicos: " + array.indexOf((item, index) => array.indexOf(item) === index).sort((a, b) => a - b))
}

function namesSort(){
    let nombres = prompt("Introduce una lista de nombres separados por comas")

    const nombresA = nombres.split(",")
    nombresA.sort()

    document.write(nombresA)
}

var newWindow

function stringInfo(){
    let cadena = prompt("Introduce una cadena")
    const cadenaA = cadena.split(" ")

    newWindow = window.open()
    newWindow.document.write("Numero de palabras: " + cadenaA.length)
    newWindow.document.write("<br> Primera palabra: " + cadenaA[0])
    newWindow.document.write("<br> Última palabra: " + cadenaA[cadenaA.length - 1])
    newWindow.document.write("<br> Palabras en orden inverso: " + cadenaA.reverse().join(" "))
    newWindow.document.write("<br> Palabras en orden a-z: " + cadenaA.sort().join(" "))
    newWindow.document.write("<br> Palabras en orden z-a: " + cadenaA.sort().reverse().join(" "))
}