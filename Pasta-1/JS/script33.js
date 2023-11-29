alert("33) Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: Bom dia, aluno, Vespertino: Boa tarde, aluno.")

let aluno= window.prompt("Escreva seu nome ")
let horario= window.prompt("Escreva seu turno M= Matutino , V= Vespertino")

if (horario  === "M" || horario  === "m") {
    alert("Bom dia,aluno " + aluno)
    

} else if (horario === "V"||horario  === "v") {
    alert("Boa tarde,aluno " + aluno)
} else{
    alert("Turno não reconhecido.")
}