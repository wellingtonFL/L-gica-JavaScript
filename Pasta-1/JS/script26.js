alert("26) Escreva um programa que leia o código de um produto e a quantidade comprada,e exiba o valor total a ser pago. Considere que cada produto tem um preço diferente.")

alert("Para esse exemplo eu usei o código 13 e o produto custa R$ 7")

let produto=parseInt(prompt("Digite o código do seu produto"))
let quantidade=parseInt(prompt("Digite a quantidade comprada do seu produto"))

let total= quantidade * 7

alert("O total a ser pago é de R$ "+total)

