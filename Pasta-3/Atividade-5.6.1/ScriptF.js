Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o
//número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a
//instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o
//próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.

let somatorio = 0;

for (let numero = 1; numero <= 500; numero++) {
    if (numero % 2 === 0) {
        somatorio += numero;
    }
}

console.log("O somatório dos valores pares na faixa de 1 até 500 é: " + somatorio);
