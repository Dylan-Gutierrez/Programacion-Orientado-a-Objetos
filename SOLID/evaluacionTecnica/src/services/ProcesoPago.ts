
export class ProcesoPago {

    procesoPago(monto: number, recibido: number): number {
        if (recibido >= monto) {
            return recibido - monto;
        }
        return -1; 
    }
}