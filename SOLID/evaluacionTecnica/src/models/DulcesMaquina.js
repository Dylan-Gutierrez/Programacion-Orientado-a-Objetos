"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DulcesMaquina = void 0;
var DulcesMaquina = /** @class */ (function () {
    function DulcesMaquina(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    DulcesMaquina.prototype.reducirStock = function () {
        if (this.stock > 0) {
            this.stock--;
            return true;
        }
        return false;
    };
    DulcesMaquina.prototype.agregarStock = function () {
        this.stock++;
    };
    return DulcesMaquina;
}());
exports.DulcesMaquina = DulcesMaquina;
