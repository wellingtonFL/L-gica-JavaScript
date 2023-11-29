alert("54) Faça um programa que leia 5 números inteiros usando o loop do-while e exiba a média aritmética dos valores lidos.")

let contador = 0
let soma = 0

do {
    let numero = parseInt(prompt("Digite um número inteiro: "))
    
    if (!isNaN(numero)) { 
        soma += numero
        contador++
    } else {
        alert("Por favor, insira um número inteiro válido.");
    }
} while (contador < 5)

if (contador > 0) {
    let media = soma / contador;
   alert("A média dos números inseridos é:"+media)
} else {
    alert("Nenhum número válido foi inserido.")
}
