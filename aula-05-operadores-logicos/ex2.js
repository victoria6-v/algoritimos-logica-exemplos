const prompt = require("prompt-sync")();

console.log("--- Bilheteria do Parque ---");
let idade = parseInt(prompt("informe a idade do visitante: "));

// No javaScript, o operador logico "ou" é representado por ||
if (idade < 5 || idade >= 65) {
    console.log("resultado: Entrada gratuita");
} else {
    console.log("resultado: paga ingresso normal");
}
