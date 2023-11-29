
alert("50) Crie um programa que leia o nome e a idade de várias pessoas usando o loop while até que o nome fim seja informado. Ao final, exiba a média das idades.")

let somaIdades = 0;
let contadorPessoas = 0;


while (true) {
    let nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");
    
   
    if (nome.toLowerCase() === 'fim') {
        break; 
    }
    
    let idade = parseInt(prompt("Digite a idade da pessoa:"));
    
 
    somaIdades += idade;
    contadorPessoas++;
}


if (contadorPessoas > 0) {
    let mediaIdades = somaIdades / contadorPessoas;
    alert(`A média das idades das ${contadorPessoas} pessoas é: ${mediaIdades.toFixed(2)}`);
} else {
    alert("Nenhuma idade foi inserida.");
}
