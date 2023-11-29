
alert("Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.")


let soma = 0
let contador = 0

do {
    alert("Digite um valor (ou um valor negativo para sair): ")
    let valor = parseFloat(prompt())

    if (valor >= 0) {
        soma += valor
        contador++
    }
} while (valor >= 0)

let media;

if (contador > 0) {
    media = soma / contador
} else {
    media = 0
}

alert("Soma dos valores digitados: " + soma)
alert("Média dos valores digitados: " + media)
