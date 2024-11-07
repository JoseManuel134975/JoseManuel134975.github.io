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
        const tablero = [[
            
        ]]

        for (let x = 0; x < this.dimensionX; x++) {
            console.log(`A`)
            for (let y = 0; y < this.dimensionY; y++) {
                console.log(`B`)
            }
        }
    }
}

const puzzle1 = new Puzzle(3, 3, 60, 10)
console.log(puzzle1.toString())
console.log(puzzle1.dibujar())