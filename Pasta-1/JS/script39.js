alert("39) Faça um programa que leia 5 números inteiros usando o loop while e exiba a média aritmética dos valores lidos.")


let soma = 0
let contador = 0

while (contador < 5) {
    let numero= parseInt(prompt("Digite um número inteiro: "))
    soma +=numero
    contador +=1


}
let media = soma/5
alert("A média dos números lidos é:"+media)

