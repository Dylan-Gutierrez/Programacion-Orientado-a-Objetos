"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaquinaExprendedora = void 0;
var ProcesoPago_1 = require("./ProcesoPago");
var MaquinaExprendedora = /** @class */ (function () {
    function MaquinaExprendedora() {
        this.dulces = new Map();
        this.totalVentas = 0;
        this.productosVentas = new Map();
        this.procesoPago = new ProcesoPago_1.ProcesoPago();
    }
    MaquinaExprendedora.prototype.agregarDulces = function (dulces) {
        if (this.dulces.has(dulces.id)) {
            console.warn("Advertencia: El dulce con ID ".concat(dulces.id, " ya existe y ser\u00E1 actualizado."));
        }
        this.dulces.set(dulces.id, dulces);
        if (!this.productosVentas.has(dulces.id)) {
            this.productosVentas.set(dulces.id, { productoNombre: dulces.nombre, cantidad: 0, total: 0 });
        }
    };
    MaquinaExprendedora.prototype.dulceDisponible = function () {
        console.log("--- Dulces Disponibles ---");
        if (this.dulces.size === 0) {
            console.log("No hay dulces disponibles en este momento.");
            return;
        }
        this.dulces.forEach(function (dulces) {
            console.log("ID: ".concat(dulces.id, " | Nombre: ").concat(dulces.nombre, " | Precio: $").concat(dulces.precio.toFixed(2), " | Stock: ").concat(dulces.stock));
        });
        console.log("--------------------------");
    };
    MaquinaExprendedora.prototype.compraDulce = function (dulceid, aumento) {
        var dulce = this.dulces.get(dulceid);
        if (!dulce) {
            return "Error: Dulce no encontrado. Por favor, ingrese un ID válido.";
        }
        if (dulce.stock <= 0) {
            return "Lo siento, \"".concat(dulce.nombre, "\" est\u00E1 agotado.");
        }
        if (aumento < dulce.precio) {
            return "Fondos insuficientes. Necesitas $".concat(dulce.precio.toFixed(2), " para comprar \"").concat(dulce.nombre, "\". Pagaste $").concat(aumento.toFixed(2), ".");
        }
        var cambio = this.procesoPago.procesoPago(dulce.precio, aumento);
        if (cambio === -1) {
            return "Error en el procesamiento del pago. Inténtelo de nuevo.";
        }
        dulce.reducirStock();
        this.totalVentas += dulce.precio;
        var informacionProducto = this.productosVentas.get(dulce.id);
        if (informacionProducto) {
            informacionProducto.cantidad++;
            informacionProducto.total += dulce.precio;
        }
        else {
            this.productosVentas.set(dulce.id, { productoNombre: dulce.nombre, cantidad: 1, total: dulce.precio });
        }
        return "\u00A1Compra exitosa! Disfruta de tu \"".concat(dulce.nombre, "\". Tu cambio es: $").concat(cambio.toFixed(2), ".");
    };
    MaquinaExprendedora.prototype.administracionVentas = function () {
        console.log("\n--- Reporte de Ventas (Administrador) ---");
        console.log("Ventas Totales de la M\u00E1quina: $".concat(this.totalVentas.toFixed(2)));
        console.log("\n--- Ventas por Producto ---");
        if (this.productosVentas.size === 0) {
            console.log("No se han realizado ventas de productos aún.");
        }
        else {
            this.productosVentas.forEach(function (info) {
                console.log("Producto: ".concat(info.productoNombre, " | Cantidad Vendida: ").concat(info.cantidad, " | Ingresos Generados: $").concat(info.total.toFixed(2)));
            });
        }
        console.log("------------------------------------------");
    };
    MaquinaExprendedora.prototype.restockDulce = function (dulceId, cantidad2) {
        var dulce = this.dulces.get(dulceId);
        if (!dulce) {
            return "Error: Dulce no encontrado para reabastecer.";
        }
        if (cantidad2 <= 0) {
            return "Error: La cantidad para reabastecer debe ser mayor a cero.";
        }
        dulce.stock += cantidad2;
        return "Stock de \"".concat(dulce.nombre, "\" actualizado. Nuevo stock: ").concat(dulce.stock, ".");
    };
    return MaquinaExprendedora;
}());
exports.MaquinaExprendedora = MaquinaExprendedora;
