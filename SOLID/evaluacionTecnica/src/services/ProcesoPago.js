"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcesoPago = void 0;
var ProcesoPago = /** @class */ (function () {
    function ProcesoPago() {
    }
    ProcesoPago.prototype.procesoPago = function (monto, recibido) {
        if (recibido >= monto) {
            return recibido - monto;
        }
        return -1;
    };
    return ProcesoPago;
}());
exports.ProcesoPago = ProcesoPago;
