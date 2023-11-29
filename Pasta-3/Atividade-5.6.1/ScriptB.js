

alert("Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.")


let numero = parseInt(prompt("Digite um número para a tabuada de multiplicação: "))

alert("Tabuada de multiplicação para o número " + numero + ":")

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
