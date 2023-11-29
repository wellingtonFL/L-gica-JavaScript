

alert("Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.")

let Number1 = parseInt(prompt("Digite o primeiro número: "))
let Number2 = parseInt(prompt("Digite o segundo número: "))
let Number3 = parseInt(prompt("Digite o terceiro número: "))
let Number4 = parseInt(prompt("Digite o quarto número: "))

if (Number1 % 2 === 0) {
  console.log(Number1 + " Este número é divisível por 2")
} else {
  console.log(Number1 + " Este número é divisível por 3")
}

if (Number2 % 2 === 0) {
  console.log(Number2 + " Este número é divisível por 2")
} else {
  console.log(Number2 + " Este número é divisível por 3")
}

if (Number3 % 2 === 0) {
  console.log(Number3 + " Este número é divisível por 2")
} else {
  console.log(Number3 + " Este número é divisível por 3")
}

if (Number4 % 2 === 0) {
  console.log(Number4 + " Este número é divisível por 2")
} else {
  console.log(Number4 + " Este número é divisível por 3")
}
