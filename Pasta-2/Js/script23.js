alert("23) Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contémerros, identifique os erros no algoritmo apresentado abaixo:Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calculee mostre seu peso ideal, utilizando as seguintes fórmulas: ")






 let Nome=window.prompt("Digite aqui seu nome: ")
 
let Sexo=window.prompt("Digite aqui seu sexo: ")

let Altura=parseFloat(prompt("Digite aqui sua altura (Exemplo: 1.70): "))

if (Sexo = "Feminino") {
   let PesoIdeal = (62.1 * Altura) - 44.7
} else {
   PesoIdeal <- (72.7 * Altura) - 58
}
alert(Nome, " seu Peso Ideal é de "+ PesoIdeal)


