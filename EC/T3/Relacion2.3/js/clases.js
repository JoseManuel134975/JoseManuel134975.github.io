// EJERCICIO 1:

// PARTE 1
const persona = {
    nombre: "Jose",
    edad: "19",
    comprobarEdad: function () {
        if (this.edad >= 18) {
            document.write(`La persona llamada ${this.nombre} tiene ${this.edad} años, es mayor de edad`)
        } else {
            document.write(`La persona llamada ${this.nombre} tiene ${this.edad} años, es menor de edad`)
        }
    }
}

// PARTE 2
class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    comprobarEdad () {
        if (this.edad >= 18) {
            document.write(`La persona llamada ${this.nombre} tiene ${this.edad} años, es mayor de edad`)
        } else {
            document.write(`La persona llamada ${this.nombre} tiene ${this.edad} años, es menor de edad`)
        }
    }
}

// PARTE 3
const personas = [new Persona("Maria", 25), new Persona("Pedro", 21), new Persona("Ana", 15)]

// PARTE 4
const edadPromedio = (arrayPersonas) => {
    let promedio = 0
    let total = 0

    arrayPersonas.forEach(persona => {
        total += persona.edad
    });

    return promedio = total / arrayPersonas.length
}

// EJERCICIO 2:
class telefono {
    constructor (numero) {
        this.numero = numero
        this.numeroLlamadas = 0
    }

    llamar () {
        this.numeroLlamadas++
    }
}

// EJERCICIO 3:

// PARTE 1
class punto {
    constructor (x, y) {
        this.x = x
        this.y = y

    }
}

// PARTE 2
class recta {
    constructor (punto1, punto2) {
        this.punto1 = punto1
        this.punto2 = punto2

    }
}

// EJERCICIO 4:

class vivienda {
    constructor (calle, numero, c_postal) {
        this.calle = calle
        this.numero = numero
        this.c_postal = c_postal

        console.log(`Nueva casa en calle: ${this.getCalle()}, nº: ${this.getNumero()}, CP: ${this.getC_postal()}`)
    }

    setCalle (calle) {
        this.calle = calle
    }

    setNumero (numero) {
        this.numero = numero
    }
    setC_postal (c_postal) {
        this.c_postal = c_postal
    }

    getCalle () {
        return `${this.calle}`
    }
    
    getNumero () {
        return `${this.numero}`
    }

    getC_postal () {
        return `${this.c_postal}`
    }
}

const casaA = new vivienda("Garcia Prieto", 58, "15706")
const casaB = new vivienda("Camino Caneiro", 29, "32004")
const casaC = new vivienda("San Clemente", "s/n", "15705")

console.log(`El codigo postal de la casaA es: ${casaA.getC_postal()}`)
console.log(`La calle de la casaC es: ${casaC.getCalle()}`)

// EJERCICIO 5:
class Alumno {
    constructor (id, nombre, notaMedia) {
        this.id = id
        this.nombre = nombre
        this.notaMedia = notaMedia
    }
}

class Colegio {
    constructor (nombre, numAulas, numAlumnos) {
        this.nombre = nombre
        this.numAulas = numAulas
        this.numAlumnos = numAlumnos
        this.datosAlumnos = []

        for (let i = 0; i < numAlumnos; i++) {
            const alumno = new Alumno(i, `alumno${i}`, 5.00)
            this.datosAlumnos.push(alumno)
        }
    }

    getNotaMedia (id) {
        const alum = this.datosAlumnos.find((alumno) => alumno.id === id)

        return `Nota media del alumno ${alum.nombre}: ${alum.notaMedia}`
    }

    setNotaMedia (id, nuevaNM) {
        const alum = this.datosAlumnos.find((alumno) => alumno.id === id)
        alum.notaMedia = nuevaNM

        return `Nueva nota media del alumno ${alum.nombre}: ${alum.notaMedia}`
    }

    getDatosAlumnos () {
        return this.datosAlumnos
    }
}

const colegio = new Colegio("IES Iliberis", 2, 5)
console.log(colegio.getNotaMedia(3))
console.log(colegio.setNotaMedia(3, 7))