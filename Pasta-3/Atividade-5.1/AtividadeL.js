

alert("Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário")



let maior = -9999; // Inicializa o maior valor com um número pequeno
let menor = 9999; // Inicializa o menor valor com um número grande

console.log("Digite um valor inteiro positivo (ou um valor negativo para sair): ")
let valor = parseInt(prompt())

while (valor >= 0) {
    // Verifica se o valor é positivo

    // Atualiza o maior valor, se necessário
    if (valor > maior) {
        maior = valor
    }

    // Atualiza o menor valor, se necessário
    if (valor < menor) {
        menor = valor
    }

    console.log("Digite um valor inteiro positivo (ou um valor negativo para sair): ")
    valor = parseInt(prompt())
}

// Exibe o maior e o menor valores
alert("Maior valor informado: " + maior)
alert("Menor valor informado: " + menor)
