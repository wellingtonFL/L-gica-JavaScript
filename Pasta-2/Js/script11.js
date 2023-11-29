alert("11) Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. ")





 let NumeroCarros=parseInt(prompt("Informe o número de carros vendidos: "))
   

  let ValorVendas=parseInt(prompt ("Informe o valor total das vendas: "))
  

   let SalarioFixo=parseInt(prompt ("Informe o salário fixo: "))
   

    let ValorPorCarro=parseInt(prompt ("Informe o valor por carro vendido: "))
   

 let  SalarioFinal =SalarioFixo + (NumeroCarros * ValorPorCarro) + ((5 / 100) * ValorVendas)

   alert("O salário final do vendedor é: R$ "+ SalarioFinal)
