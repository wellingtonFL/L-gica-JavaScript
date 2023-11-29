

alert("Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.")



let numero = 1; // Inicializa o número como 1

do {
    // Verifica se o número é divisível por 4
    if (numero % 4 === 0) {
        alert(numero + " é divisível por 4.");
    }
    
    numero++; // Avança para o próximo número
} while (numero <= 200);
