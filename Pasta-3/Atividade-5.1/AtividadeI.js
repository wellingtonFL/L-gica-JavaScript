

alert("Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.") 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador=parseInt(prompt("Digite 10 valores numéricos:"))

let total = 0

function lerValor() {
  rl.question(`Digite o valor ${contador + 1}: `, (valor) => {
    valor = parseFloat(valor)

    if (!isNaN(valor)) {
      total += valor
      contador++

      if (contador < 10) {
        lerValor()
      } else {
      
        const media = total / 10;

     
        console.log(`Total do somatório: ${total}`)
        console.log(`Média aritmética: ${media}`)
        rl.close()
      }
    } else {
      console.log("Por favor, digite um valor numérico válido.")
      lerValor()
    }
  });
}

lerValor()
