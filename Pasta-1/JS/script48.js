alert("48)Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop while.")


function exibirDigitosSeparadamente(numero) {
    let numeroOriginal = numero
    
    while (numero > 0) {
      let digito = numero % 10 
      console.log(digito);
      numero = Math.floor(numero / 10)
    }
    
alert(`Dígitos do número ${numeroOriginal} exibidos separadamente.`)
  }
  

  function main() {
    let numero = parseInt(prompt("Digite um número inteiro: "))
    
    if (!isNaN(numero)) {
      exibirDigitosSeparadamente(numero)
    } else {
    alert("Entrada inválida. Por favor, insira um número inteiro válido.")
    }
  }
  
  
  main();
  