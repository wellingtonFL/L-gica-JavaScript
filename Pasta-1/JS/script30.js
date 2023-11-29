
alert("30) Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.")

let maca=parseFloat(prompt("Digite a quantidade de maçãs compradas"))


if (maca>=12) {
    let total1= maca * 0.40
    alert("Você comprou um total de "+maca+"logo você pagara " + total1.toFixed(2))
    
} else {
    let total2= maca * 0.50
    alert("Você comprou um total de " + maca + "logo você pagara " + total2.toFixed(2))
    
}