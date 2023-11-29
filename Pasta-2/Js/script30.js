alert("30) Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordemcrescente. ")





 let ValorA=parseInt(prompt("Digite o Primeiro Valor: "))
 
  let ValorB=parseInt(prompt("Digite o Segundo Valor: "))
 
 let  ValorC=parseInt(prompt("Digite o Terceiro Valor: "))
 
if ( ValorA > ValorC) {
    let ValorI = ValorA
   let ValorA = ValorC
    let ValorC = ValorI
}

if (ValorB > ValorC) {
    let ValorI = ValorC
   let  ValorC = ValorB
    let ValorB = ValorI
} else {
    let ValorI = ValorA
    let ValorA = ValorB
  let  ValorB = ValorI
}

alert("Os Valores em Ordem Crescente são: "+ ValorA+ ", "+ValorB+ " e "+ValorC)
