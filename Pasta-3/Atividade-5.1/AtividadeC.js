

alert("c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.")

let numero = 1;
let soma = 0;

while (numero <= 500) {
    if (numero % 2 === 0) {  
        soma += numero  
    }
    numero++
}

console.log("O somatório dos valores pares de 1 a 500 é: " + soma)
