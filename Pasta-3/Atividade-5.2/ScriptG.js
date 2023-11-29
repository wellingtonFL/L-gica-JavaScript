alert("Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.")


alert("Valores ímpares na faixa de 1 a 10 e seus fatoriais:")

let numero = 1

do {
    let fatorial = 1
    let i = 1

    while (i <= numero) {
        fatorial *= i
        i++;
    }

    if (numero % 2 !== 0) {
        alert(numero + "! = " + fatorial)
    }

    numero++
} while (numero <= 10)
