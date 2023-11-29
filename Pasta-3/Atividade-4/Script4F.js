

alert("Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.")


let A = parseInt(prompt("Escreva o valor de A: "))
let B = parseInt(prompt("Escreva o valor de B: "))
let C = parseInt(prompt("Escreva o valor de C: "))

if (A > B) {
  let temp = A
  A = B
  B = temp
}

if (B > C) {
  let temp = B
  B = C
  C = temp
}

if (A > B) {
  let temp = A
  A = B
  B = temp
}

alert("Os valores ordenados são: A = " + A + ", B = " + B + ", C = " + C)
