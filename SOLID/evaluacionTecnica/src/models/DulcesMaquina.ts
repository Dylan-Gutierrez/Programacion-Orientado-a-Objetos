
import { IDulces } from "../interfaces/Dulces";

export class DulcesMaquina implements IDulces {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public stock: number
    ) {}

    reducirStock(): boolean {
        if (this.stock > 0) {
            this.stock--;
            return true;
        }
        return false;
    }

    agregarStock(): void {
        this.stock++;
    }
}