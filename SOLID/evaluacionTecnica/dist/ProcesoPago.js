"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesoPago = void 0;
class ProcesoPago {
    procesoPago(monto, recibido) {
        if (recibido >= monto) {
            return recibido - monto;
        }
        return -1;
    }
}
exports.ProcesoPago = ProcesoPago;
