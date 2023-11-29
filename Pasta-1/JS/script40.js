alert("40) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop while.")

let numero= parseInt(prompt("Digite um número"))

let contador =1
while (contador <=10) {
    resultado = numero * contador
    alert(numero+"X"+contador+"="+resultado)
    contador+=1

}