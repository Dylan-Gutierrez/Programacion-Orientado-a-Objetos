"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MaquinaExprendedora_1 = require("./src/services/MaquinaExprendedora");
const DulcesMaquina_1 = require("./src/models/DulcesMaquina");
// --- Ejemplo de Uso ---
const ventaMaquina = new MaquinaExprendedora_1.MaquinaExprendedora();
// Añadir algunos dulces
ventaMaquina.agregarDulces(new DulcesMaquina_1.DulcesMaquina(1, "Barra de Chocolate", 1.50, 10));
ventaMaquina.agregarDulces(new DulcesMaquina_1.DulcesMaquina(2, "Gomitas de Frutas", 0.75, 15));
ventaMaquina.agregarDulces(new DulcesMaquina_1.DulcesMaquina(3, "Chicle de Menta", 0.50, 20));
ventaMaquina.agregarDulces(new DulcesMaquina_1.DulcesMaquina(4, "Galletas de Vainilla", 2.00, 5));
// Mostrar dulces disponibles
ventaMaquina.dulceDisponible();
// Simular compras
console.log("\n--- Simulando Compras ---");
console.log(ventaMaquina.compraDulce(1, 2.00));
console.log(ventaMaquina.compraDulce(3, 0.25));
console.log(ventaMaquina.compraDulce(2, 1.00));
console.log(ventaMaquina.compraDulce(1, 1.50));
console.log(ventaMaquina.compraDulce(5, 5.00));
console.log(ventaMaquina.compraDulce(4, 1.00));
console.log(ventaMaquina.compraDulce(4, 2.00));
console.log(ventaMaquina.compraDulce(4, 2.00));
console.log(ventaMaquina.compraDulce(4, 2.00));
console.log(ventaMaquina.compraDulce(4, 2.00));
console.log(ventaMaquina.compraDulce(4, 2.00));
console.log(ventaMaquina.compraDulce(4, 2.00));
ventaMaquina.dulceDisponible();
ventaMaquina.administracionVentas();
console.log("--- Restableciendo el Stock ---");
console.log(ventaMaquina.restockDulce(4, 10));
console.log(ventaMaquina.restockDulce(1, 5));
ventaMaquina.dulceDisponible();
ventaMaquina.administracionVentas();
