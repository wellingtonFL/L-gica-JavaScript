alert("10) O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem dodistribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,calcular e escrever o custo final ao consumidor. ")

 let CustoDeFabrica=parseInt(prompt("Insira o Custo de Fabrica do carro: "))

  let Distribuidor=parseInt(prompt("Insira o Percentual do Distribuidor: "))

 let Impostos=parseInt(prompt("Insira o Percentual dos Impostos: "))

 let CarroNovo = CustoDeFabrica + (CustoDeFabrica * Distribuidor) + (CustoDeFabrica * Impostos)

alert("O Custo Final para o Consumidor é de: R$ "+ CarroNovo)