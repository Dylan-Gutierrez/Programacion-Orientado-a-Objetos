"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaquinaExprendedora = void 0;
const ProcesoPago_1 = require("./ProcesoPago");
class MaquinaExprendedora {
    constructor() {
        this.dulces = new Map();
        this.totalVentas = 0;
        this.productosVentas = new Map();
        this.procesoPago = new ProcesoPago_1.ProcesoPago();
    }
    agregarDulces(dulces) {
        if (this.dulces.has(dulces.id)) {
            console.warn(`Advertencia: El dulce con ID ${dulces.id} ya existe y será actualizado.`);
        }
        this.dulces.set(dulces.id, dulces);
        if (!this.productosVentas.has(dulces.id)) {
            this.productosVentas.set(dulces.id, { productoNombre: dulces.nombre, cantidad: 0, total: 0 });
        }
    }
    dulceDisponible() {
        console.log("--- Dulces Disponibles ---");
        if (this.dulces.size === 0) {
            console.log("No hay dulces disponibles en este momento.");
            return;
        }
        this.dulces.forEach(dulces => {
            console.log(`ID: ${dulces.id} | Nombre: ${dulces.nombre} | Precio: $${dulces.precio.toFixed(2)} | Stock: ${dulces.stock}`);
        });
        console.log("--------------------------");
    }
    compraDulce(dulceid, aumento) {
        const dulce = this.dulces.get(dulceid);
        if (!dulce) {
            return "Error: Dulce no encontrado. Por favor, ingrese un ID válido.";
        }
        if (dulce.stock <= 0) {
            return `Lo siento, "${dulce.nombre}" está agotado.`;
        }
        if (aumento < dulce.precio) {
            return `Fondos insuficientes. Necesitas $${dulce.precio.toFixed(2)} para comprar "${dulce.nombre}". Pagaste $${aumento.toFixed(2)}.`;
        }
        const cambio = this.procesoPago.procesoPago(dulce.precio, aumento);
        if (cambio === -1) {
            return "Error en el procesamiento del pago. Inténtelo de nuevo.";
        }
        dulce.reducirStock();
        this.totalVentas += dulce.precio;
        const informacionProducto = this.productosVentas.get(dulce.id);
        if (informacionProducto) {
            informacionProducto.cantidad++;
            informacionProducto.total += dulce.precio;
        }
        else {
            this.productosVentas.set(dulce.id, { productoNombre: dulce.nombre, cantidad: 1, total: dulce.precio });
        }
        return `¡Compra exitosa! Disfruta de tu "${dulce.nombre}". Tu cambio es: $${cambio.toFixed(2)}.`;
    }
    administracionVentas() {
        console.log("\n--- Reporte de Ventas (Administrador) ---");
        console.log(`Ventas Totales de la Máquina: $${this.totalVentas.toFixed(2)}`);
        console.log("\n--- Ventas por Producto ---");
        if (this.productosVentas.size === 0) {
            console.log("No se han realizado ventas de productos aún.");
        }
        else {
            this.productosVentas.forEach(info => {
                console.log(`Producto: ${info.productoNombre} | Cantidad Vendida: ${info.cantidad} | Ingresos Generados: $${info.total.toFixed(2)}`);
            });
        }
        console.log("------------------------------------------");
    }
    restockDulce(dulceId, cantidad2) {
        const dulce = this.dulces.get(dulceId);
        if (!dulce) {
            return "Error: Dulce no encontrado para reabastecer.";
        }
        if (cantidad2 <= 0) {
            return "Error: La cantidad para reabastecer debe ser mayor a cero.";
        }
        dulce.stock += cantidad2;
        return `Stock de "${dulce.nombre}" actualizado. Nuevo stock: ${dulce.stock}.`;
    }
}
exports.MaquinaExprendedora = MaquinaExprendedora;
