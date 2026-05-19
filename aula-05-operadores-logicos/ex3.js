const prompt = require("prompt-sync")();

console.log("--- Controle de Estoque ---");
console.log("");

let esgotado = prompt("O produto esta esgotado? (s/n): ") === "s";

console.log("");

// Se NÃO estiver esgotado
if (!esgotado) {
    console.log("Produto disponivel para venda");
} else {
    console.log("Por favor, reabasteca o estoque");
}