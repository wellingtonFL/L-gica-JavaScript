// Solicita o valor do depósito mensal e a taxa de juros mensal
const deposito = parseFloat(prompt("Informe o valor do depósito mensal: "))
const juros = parseFloat(prompt("Informe a taxa de juros mensal em porcentagem: "))

let totalD= deposito * 12
let totalJ= juros * 12
let totaljuros= (totalD*totalJ)/100
let somatoria= totaljuros+totalD
alert("o total de juros é " +somatoria)

