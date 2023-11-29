

alert("55) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop do-while.")

let contador = 0
let soma = 0

do {
    let numero = parseInt(prompt("Digite um número inteiro: "))
    
    if (!isNaN(numero)) { 
        soma += numero
        contador++
    } else {
        alert("Por favor, insira um número inteiro válido.")
    }
} while (contador < 5)

if (contador > 0) {
    let media = soma / contador
   alert("A média dos números inseridos é:"+ media)
} else {
    alert("Nenhum número válido foi inserido.")
}
