class Empleado {
    constructor(cod, nombre, tlf) {
        this.cod = cod
        this.nombre = nombre
        this.tlf = tlf
    }
    muestraEmpleado() {
        console.log(`Empleado: ${ this.cod } -- ${ this.nombre }`);
    }
}

const arrEmpleados = [
    new Empleado(1, 'Adolfo', 958160674),
    new Empleado(2, 'Begoña', 666666666)
]

