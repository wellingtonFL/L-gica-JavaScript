alert("29) Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.")




   let ValorA=parseInt(prompt("Digite o Primeiro Valor: "))
  
     let ValorB=parseInt(prompt("Digite o Segundo Valor: "))
   
     let ValorC=parseInt(prompt("Digite o Terceiro Valor: "))
    

     if (ValorA > ValorC  && ValorB > ValorC){
      let Soma = ValorA + ValorB
     } else {
     let  Soma = Valor + ValorC
     }
   alert("A Soma dos dois maiores numeros é de: "+ Soma)