


alert("46) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop while.")
    let numero = parseInt(prompt("Digite um número inteiro: "));
    let soma = 0;
    
    if (!isNaN(numero)) {
      let i = 2; // Inicia com o primeiro número par, que é 2
      while (i <= numero) {
        soma += i;
        i += 2; // Avança para o próximo número par
      }
      alert(`A soma dos números pares até ${numero} é: ${soma}`);
    } else {
      alert("Entrada inválida. Por favor, insira um número inteiro válido.");
    }
  
  

  
  