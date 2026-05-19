const prompt = require("prompt-sync")();

console.log("--- Analise de emprestimo ---");
console.log("") // Linha em branco

let salario = parseFloat(prompt("qual o seu salario mensal? R$ "));
let temFiador = prompt("voce possui um fiador? (s/n): ") === "s";
let nomeSujo = prompt("seu nome esta sujo no serasa? (s/n):") === "s";
console.log("") // linha em branco

// prioridade 1: não (!nomeSujo)
// prioridade 2 e 3: agrupamos o "ou" (||) e depois juntamos com o "e" (&&)
if (!nomeSujo && (salario > 2000 || temFiador)) {
    console.log("resultado: emprestimo APROVADO");
} else {
    console.log("resultado: emprestimo NEGADO");
}