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

// Comentar si quieres ver la primera parte************
function nota(n, t) {
    let nota_media = 0

    const estudiantes = [{
        n_estudiante: 7,
        trimestre: 1,
        nota_examenes: [6, 7, 8]
    },
    {
        n_estudiante: 8,
        trimestre: 2,
        nota_examenes: [3, 5, 6]
    }]

    estudiantes.forEach(estudiante => {
        if (estudiante.n_estudiante == n && estudiante.trimestre != t) {
            estudiante.nota_examenes.forEach(examen => {
                nota_media += examen
            });
            nota_media = nota_media / 3
        }
    });

    return nota_media
}

function edadMedia(){
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

function nombreRandom(){
    const nombres = ["Jose", "Antonio", "Pedro", "Juan"]

    return nombres[Math.floor(Math.random() * nombres.length)]
}

function paresImpares(){
    const array = []
    
    for(let i=0;i<100;i++){
        array.push(Math.floor(Math.random() * 1000))
    }

    console.log(array)

    const pares = array.filter(number => number % 2 == 0)
    const impares = array.filter(number => number % 2 != 0)
    const juntos = pares.concat(impares)
    
    console.log(juntos)
}

// Ejercicio 6:
function empresa(){
    const vendedor = []
    let sueldoFinal = 0

    let alta = prompt("Introduce el nombre del vendedor: ")
    let ventas = parseInt(prompt("Introduce las ventas: "))

    sueldoFinal = 200 + (ventas * 0.09) + ventas

    vendedor.push(alta, ventas, sueldoFinal)

    return vendedor[2]
}