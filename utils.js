const mostrarMensaje = (mensaje) => alert(mensaje);

const cuotasArray = [{
        3: 1.101
    },
    {
        6: 2.078
    },
    {
        10: 2.669
    },
    {
        12: 4.506
    },
    {
        18: 7.379
    },
    {
        24: 10.778
    },
];

class Financiacion {
    constructor(monto, cuotas) {
        this.monto = monto;
        this.cuotas = cuotas;
        this.porcentajes = cuotasArray.find(cuota => cuota[cuotas]);
    }

    calcularCuota() {
        if (!this.porcentajes) {
            mostrarMensaje("Cantidad de cuotas no válida");
            return;
        }

        const porcentaje = this.porcentajes[this.cuotas];
        const montoCuota = this.monto * porcentaje / this.cuotas;
        mostrarMensaje(`El monto a pagar por cuota es de $${montoCuota.toFixed(2)}.`);
    }
}

let continuar = true;
do {
    const monto = prompt("Ingrese el monto del producto:")
    if (monto === null) {
        continuar;
    } else if (isNaN(monto) || monto <= 0) {
        mostrarMensaje("El monto ingresado no es válido");
    } else if (monto > 0) {
        const cuotas = Number(prompt("Ingrese la cantidad de cuotas en un rango de 3, 6, 10, 12, 18 y 24 cuotas:"));
        const financiacion = new Financiacion(monto, cuotas);
        financiacion.calcularCuota();
    } 
    continuar = confirm("¿Desea realizar otro cálculo?");
    
} while (continuar);