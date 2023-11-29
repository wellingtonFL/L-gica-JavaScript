

alert("presentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)")

let soma = 0

for (let numero = 1; numero <= 100; numero++) {
    soma += numero
}

alert("A soma dos cem primeiros números inteiros é: " + soma)
