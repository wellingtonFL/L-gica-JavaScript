
alert("Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.")



     let numero=parseInt(prompt("Digite um número inteiro: "))
   
  if (numero < 0) {
     let modulo = numero * -1
  } else {
    let  modulo = numero
  }

    escreva("O valor positivo é: "+ modulo)