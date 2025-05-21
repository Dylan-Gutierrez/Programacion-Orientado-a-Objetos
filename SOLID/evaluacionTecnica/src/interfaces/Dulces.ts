/**Evaluación Técnica: Máquina Vendedora de Dulces en Programación Orientada a Objetos
## Requisitos Funcionales
1. La máquina debe contener diferentes tipos de dulces, cada uno con sus atributos.
2. Los usuarios pueden seleccionar un dulce para comprar.
3. La máquina debe verificar si hay suficiente stock y fondos (si aplica) para realizar la compra.
4. Después de una venta exitosa, el stock del dulce debe reducirse en uno.
5. Un usuario administrador puede ver las ventas totales y de cada producto.
6. La máquina puede aceptar pagos (simulando pago con moneda o billete).
## Aspectos a Evaluar
**Organización y modularidad del código:** Uso correcto de clases y objetos.
**Control de errores:** Manejar casos donde no hay stock suficiente o fondos insuficientes. */

export interface IDulces {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
}