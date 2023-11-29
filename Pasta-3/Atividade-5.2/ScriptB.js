
alert("Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500")

let somatorio = 0; // Inicializa o somatório como 0
let numero = 1; // Inicializa o número como 1

while (numero <= 500) {
    // Verifica se o número é par
    if (numero % 2 === 0) {
        somatorio += numero; // Adiciona o número par ao somatório
    }
    
    numero++; // Avança para o próximo número
}

alert("O somatório dos valores pares de 1 a 500 é: " + somatorio)
