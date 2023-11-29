
alert("Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70")

let valor = 1
let somaPares = 0
let contadorPares = 0

while (valor <= 70) {
    if (valor % 2 === 0) {
     
        somaPares += valor
        contadorPares++
    }

    valor++
}

let mediaPares;
if (contadorPares > 0) {
    mediaPares = somaPares / contadorPares
} else {
    mediaPares = 0
}

alert("Soma dos valores pares: " + somaPares)

alert("Média aritmética dos valores pares: " + mediaPares)
