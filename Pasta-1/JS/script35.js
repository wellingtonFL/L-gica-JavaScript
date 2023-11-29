 alert("35) Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem Aprovado, caso contrário, exiba a mensagem Reprovado.")

 let nota1=parseInt(prompt("Digite a primeira nota do seu aluno"))
 let nota2=parseInt(prompt("Digite a segunda nota do aluno"))
 let nota3=parseInt(prompt("Digite a terceira nota do  aluno"))

 let media= (nota1+nota2+nota3)/3

 if (media >=7) {
    alert("Seu aluno foi aprovado pois teve média semelhante a 7,sua média foi " + media)
    
 } else {
    alert("Seu aluno foi reprovado pois teve média abaixo de 7,sua média foi " +  media.toFixed(2))
 }