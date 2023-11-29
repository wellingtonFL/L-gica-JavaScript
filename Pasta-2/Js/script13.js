alert("13) Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da médiafinal é: ")




 let NotaA=parseFloat(prompt( "Digite sua primeira nota: "))

  let NotaB=parseFloat(prompt("Digite sua segunda nota: "))

let NotaC=parseFloat(prompt("Digite sua terceira nota: "))


 let MediaFinal = ((NotaA * 2) + (NotaB * 3) + (NotaC * 5)) / 10

alert("Sua media final é de: "+ MediaFinal)
