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