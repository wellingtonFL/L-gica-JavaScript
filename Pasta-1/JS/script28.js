alert("28) Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC.")

let altura=parseFloat(prompt("Digite sua altura"))
let peso=parseFloat(prompt("Digite seu peso"))

let imc= peso/(altura^2)

alert("Seu IMC é de "+imc.toFixed(2))