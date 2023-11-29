
alert("Calculo de IMC")

let altura= parseInt(prompt("Digite sua altura "))
let peso= parseInt(prompt("Digite seu peso "))
let imc = peso/ (altura*altura)

alert("O seu IMC é "+imc.toFixed(2))