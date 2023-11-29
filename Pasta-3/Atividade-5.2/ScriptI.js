


alert("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.")


let primeiro = true
let maior, menor

do {
    alert("Digite um valor positivo (ou um valor negativo para sair): ")
    let valor = parseFloat(prompt())

    if (valor >= 0) {
        if (primeiro) {
            maior = valor
            menor = valor
            primeiro = false
        } else {
            if (valor > maior) {
                maior = valor
            }
            if (valor < menor) {
                menor = valor
            }
        }
    }
} while (valor >= 0);

if (primeiro) {
    alert("Nenhum valor positivo foi informado.")
} else {
    alert("Maior valor informado: " + maior)
    alert("Menor valor informado: " + menor)
}
