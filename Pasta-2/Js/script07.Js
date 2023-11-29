
alert("7) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idadedessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. ")

let anos=parseInt(prompt("Digite sua idade em anos"))
let meses=parseInt(prompt("Digite sua idade em mêses"))
let dias=parseInt(prompt("Digite sua idade em dias"))

let idade= (anos * 365)+ (meses * 30)+dias

alert("Sua idade em dias é de "+idade)