
alert("Elaborar um programa que efetue a leitura de um valor que esteja entre a faixa de 1 a 9. Após a leitura do valor fornecido pelo usuário, o programa deverá indicar uma de duas mensagens: O valor está na faixa permitida, caso o usuário forneça o valor nesta faixa, ou a mensagem O valor está fora da faixa permitida, caso o usuário forneça valores menores que 1 ou maiores que 9.")





   alert("Você será aprovado se digitar numeros entre 1 a 9 ")
  
   let A=parseInt(prompt("Vamos Brincar?: "))


if (A <= 0) {
  console.log("Você perdeu!");
} else if (A <= 9) {
  console.log("Você escolheu certo!");
} else {
  console.log("Você perdeu!");
}
