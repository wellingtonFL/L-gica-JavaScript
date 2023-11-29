
let somaIdades = 0;
let contadorPessoas = 0;


while (contadorPessoas < 5) {
  let nome = prompt("Digite o nome da pessoa: ");
  let idade = parseInt(prompt("Digite a idade da pessoa: "));
  
  if (!isNaN(idade)) {
    somaIdades += idade;
    contadorPessoas++;
  } else {
    alert("Idade inválida. Por favor, insira um número inteiro.");
  }
}

if (contadorPessoas > 0) {
  let mediaIdades = somaIdades / contadorPessoas;
  alert(`A média das idades das 5 pessoas é: ${mediaIdades.toFixed(2)}`);
} else {
  alert("Nenhuma idade válida foi inserida.");
}
