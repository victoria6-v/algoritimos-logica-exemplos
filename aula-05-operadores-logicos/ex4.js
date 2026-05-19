const prompt = require("prompt-sync")();

console.log("--- Analise de Curriculo ---");
console.log("");

let idade = parseInt(prompt("Digite a idade do candidato: "));
let sabeJS = prompt("Sabe JavaScript? (s/n): ") === "s";
let sabePython = prompt("Sabe Python? (s/n): ") === "s";

console.log("");

// Curriculo aceito se:
// idade >= 18 E (JavaScript OU Python)
if (idade >= 18 && (sabeJS || sabePython)) {
    console.log("Curriculo ACEITO");
} else {
    console.log("Curriculo RECUSADO");
}