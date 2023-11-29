

alert("29) Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação.")

let nome=window.prompt("Digite o nome do aluno")
let nota=parseInt(prompt("Digite a nota do seu aluno"))


if (nota>=7) {
alert("O aluno "+ nome +" foi aprovado pois teve nota igual a 7 ou superior")    
} else {
alert("O aluno "+ nome + " foi reprovado pois ele teve nota abaixo da média")
}
