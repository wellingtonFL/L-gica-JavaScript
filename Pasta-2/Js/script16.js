alert("16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se foremcompradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule eescreva o custo total da compra. ")





 let UmA=parseFloat(prompt("Digite o Valor da Primeira nota: "))

  let DoisA=parseFloat(prompt("Digite o Valor da Segunda nota: "))


let Media = ((UmA + DoisA) / 2)

if (Media < 6) {
    alert("Voce não foi aprovado! Sua media é "+ Media)
} else {
alert("Voce foi aprovado! Sua media é "+ Media)
}


