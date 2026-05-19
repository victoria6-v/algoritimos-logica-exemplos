// instalação do modulo para rodar
// npm install prompt-sync

// chamada do modulo para rodar este programa 
const prompt = require("prompt-sync")()

// coletando a nota e a frequencia (digitado pelo usuario)
let nota = parseFloat(prompt("informe a nota: (0 a 10): "))
let frequencia = parseFloat(prompt("informe a frequencia: (0 a 100%): "))
console.log(" ")

// condicional para verificar se aprovado ou não
if (nota >= 7 && frequencia >= 75) {
    console.log("aluno aprovado!")
} else {
    console.log("aluno reprovado!")
}