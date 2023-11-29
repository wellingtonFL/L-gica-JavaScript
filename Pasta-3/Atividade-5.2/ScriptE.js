
alert("Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.")



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

let media

if (contador > 0) {
    media = soma / contador
} else {
    media = 0
}

alert("Soma dos valores digitados: " + soma)
alert("Média dos valores digitados: " + media)
