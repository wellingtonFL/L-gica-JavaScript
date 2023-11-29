alert("28) Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. ")





  let ValorA=parseInt(prompt("Digite o Primeiro Valor: "))
 
    let ValorB=parseInt(prompt("Digite o Segundo Valor: "))
  
     let ValorC=parseInt(prompt("Digite o Terceiro Valor: "))
 

     if (ValorA > ValorB && ValorA > ValorC) {
     let ValorM = ValorA
     } else {
      if (ValorB > ValorA && ValorB > ValorC) {
        let  ValorM = ValorB
      } else {
       let  ValorM = ValorC
      }
     }
     alert("O maior valor é: " + ValorM)
