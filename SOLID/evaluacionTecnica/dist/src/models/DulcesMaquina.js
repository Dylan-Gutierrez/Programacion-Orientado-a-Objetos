"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DulcesMaquina = void 0;
class DulcesMaquina {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    reducirStock() {
        if (this.stock > 0) {
            this.stock--;
            return true;
        }
        return false;
    }
    agregarStock() {
        this.stock++;
    }
}
exports.DulcesMaquina = DulcesMaquina;
