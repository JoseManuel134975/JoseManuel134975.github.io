function createArrayWithObject() {
    const clase = [{
        nombre: "Jose",
        edad: 19,
        nota_primer_trimestre: 6,
        nota_segundo_trimestre: 7,
        nota_tercer_trimestre: 8
    },
    {
        nombre: "Antonio",
        edad: 23,
        nota_primer_trimestre: 8,
        nota_segundo_trimestre: 8,
        nota_tercer_trimestre: 9
    }
    ]

    return clase[0]
}

function nota(n, t) {
    let calificacion = 0

    const estudiantes = [{
        n_estudiante: 7,
        trimestre: 1,
        nota: 6
    },
    {
        n_estudiante: 8,
        trimestre: 2,
        nota: 8
    }]

    estudiantes.forEach(estudiante => {
        if (estudiante.n_estudiante == n && estudiante.trimestre == t) {
            calificacion = estudiante.nota
        }
    });

    return calificacion
}

// Descomentar si quieres verlo en funcionamiento************
// function nota(n, t) {
//     let nota_media = 0

//     const estudiantes = [{
//         n_estudiante: 7,
//         trimestre: 1,
//         nota_examenes: [6, 7, 8]
//     },
//     {
//         n_estudiante: 8,
//         trimestre: 2,
//         nota_examenes: [3, 5, 6]
//     }]

//     estudiantes.forEach(estudiante => {
//         if (estudiante.n_estudiante == n && estudiante.trimestre != t) {
//             estudiante.nota_examenes.forEach(examen => {
//                 nota_media += examen
//             });
//             nota_media = nota_media / 3
//         }
//     });

//     return nota_media
// }

function edadMedia() {
    const clase = [{
        nombre: "Jose",
        edad: 19,
        nota_primer_trimestre: 6,
        nota_segundo_trimestre: 7,
        nota_tercer_trimestre: 8
    },
    {
        nombre: "Antonio",
        edad: 23,
        nota_primer_trimestre: 8,
        nota_segundo_trimestre: 8,
        nota_tercer_trimestre: 9
    }
    ]

    return (clase[0].edad + clase[1].edad) / 2
}

function nombreRandom() {
    const nombres = ["Jose", "Antonio", "Pedro", "Juan"]

    return nombres[Math.floor(Math.random() * nombres.length)]
}

function paresImpares() {
    const array = []

    for (let i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 1000))
    }

    console.log(array)

    const pares = array.filter(number => number % 2 == 0)
    const impares = array.filter(number => number % 2 != 0)
    const juntos = pares.concat(impares)

    console.log(juntos)
}

// Ejercicio 6:
function empresa() {
    //const vendedor = []
    var empresa = [] // Array de objetos

    var sueldoFinal = 0
    let op = 1

    while (op > 0) {
        op = parseInt(prompt("Introduce una acción:\n 1. Alta de vendedores\n 2. Asignar ventas \n 0. Salir (mostrar sueldo final)"))

        switch (op) {
            case 1:
                let alta = prompt("Introduce el nombre del vendedor: ")
                var vendedor = {
                    nombre: alta,
                    ventas: 0,
                    sueldo: 0
                }
                empresa.push(vendedor)
                console.log(vendedor)
                break
            case 2:
                let eligeVend = parseInt(prompt("Elige el vendedor (EJ: 1): " + empresa.map((vend, index) => `${index}- ${vend.nombre}`).join(" ")));
                let ventas = parseInt(prompt("Introduce las ventas: "))
                sueldoFinal = 200 + (ventas * 0.09) + ventas
                empresa[eligeVend].ventas = ventas
                console.log(`Ventas asignadas a ${empresa[eligeVend].nombre}: ${empresa[eligeVend].ventas}`)
                break
            default:
                if (empresa.length === 0) {
                    alert(`No hay vendedores dados de alta. Recarga la página...`)
                    break
                }
                let eligeVendMostrar = parseInt(prompt("Elige el vendedor (EJ: 1): " + empresa.map((vend, index) => `${index}- ${vend.nombre}`).join(" ")))
                empresa[eligeVendMostrar].sueldo = sueldoFinal
                console.log("Sueldo final: " + empresa[eligeVendMostrar].sueldo)
                break
        }
    }
}

const arrayCero = (array) => {
    array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    
    return array
}

const addOne = (array) => {
    const arraySalida = []

    array.forEach(element => {
        arraySalida.push(element + 1)
    })

    return arraySalida
}

const showSeparated = (array) => {
    console.log(array.join(" "))
}

const aerolinea = () => {
    const vuelo = {
        capacidad: 10,
        tipo_asiento: ["First", "Turista"],
        tarjeta_embarque: []
    }


    let op = ""
    op = prompt("¿Quieres introducir un pasajero? (S/N)")

    while (vuelo.capacidad > 0 && op.toLowerCase() !== "n") {
        const pasajero = {
            nombre: "",
            n_asiento: 0,
            tipo_asiento: ""
        }

        let tipoAsiento = prompt("Introduce el tipo de asiento (First o Turista)")
        pasajero.tipo_asiento = tipoAsiento

        if (tipoAsiento.toLowerCase() === vuelo.tipo_asiento[0].toLowerCase()) {
            do {
                alert("El asiento debe estar entre 1 y 5")
                asiento = parseInt(prompt("Introduce el nº de asiento (First: 1-5, Turista: Resto)"))    
            } while (asiento < 1 || asiento > 5)
        } else {
            do {
                alert("El asiento debe ser mayor a 5")
                asiento = parseInt(prompt("Introduce el nº de asiento (First: 1-5, Turista: Resto)"))
            } while(asiento >= 0 && asiento <= 5)
        }

        pasajero.n_asiento = asiento

        let nombre = prompt("Introduce el nombre del pasajero")
        pasajero.nombre = nombre

        vuelo.capacidad--
        vuelo.tarjeta_embarque.push(pasajero)

        op = prompt("¿Quieres introducir otro pasajero? (S/N)")
    }

    return vuelo.tarjeta_embarque
}
