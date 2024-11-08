// EJERCICIO 1:
class Puzzle {
    constructor (dimensionX, dimensionY, tiempo, nMovimientos) {
        this.dimensionX = dimensionX
        this.dimensionY = dimensionY
        this.tiempo = tiempo
        this.nMovimientos = nMovimientos
    }

    toString () {
        return `Dimensiones: X-> ${this.dimensionX}, Y-> ${this.dimensionY} - Tiempo mínimo (segundos): ${this.tiempo} - Número de movimientos máximos: ${this.nMovimientos}`
    }

    getDimensionX () {
        return `${this.dimensionX}`
    }
    
    getDimensionY () {
        return `${this.dimensionY}`
    }

    getTiempo () {
        return `${this.tiempo}`
    }

    getNMovimientos () {
        return `${this.nMovimientos}`
    }

    dibujar () {
        
    }
}

// EJERCICIO 2
class TresEnRaya {
    constructor () {

    }
}

// EJERCICIO 3
class Buscaminas {
    constructor () {

    }
}