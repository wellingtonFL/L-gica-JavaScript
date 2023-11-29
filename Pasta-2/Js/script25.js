alert("25) Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular eescrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maiorou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. ")









    let NumeroConta=parseInt(prompt("Insira aqui o Numero de sua Conta: "))
   
    let Saldo=parseFloat(prompt("Digite aqui o seu Saldo: "))
  
     let Debito=parseFloat(prompt("Digite aqui o Valor Debitado de sua Conta: "))
   
    let Credito=parseFloat(prompt("Digite aqui o Valor Creditado de sua Conta: "))
 

   let SaldoAtual = Saldo - Debito + Credito
  

   if (SaldoAtual >= 0) {
      alert("Saldo Positivo! Seu Saldo Atual é de: R$"+SaldoAtual)
   } else {
      alert("Saldo Negativo! Seu Saldo Atual é de: R$"+ SaldoAtual)
   }

