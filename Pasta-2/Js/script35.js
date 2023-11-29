alert("Um posto está vendendo combustíveis com a seguinte tabela de descontos: Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. ")
    

   
   if (combustivel === "A" && litrosVendidos > 0) {
     if (litrosVendidos <= 20) {
       valorASerPago = (litrosVendidos * 2.90) - ((3 / 100) * (litrosVendidos * 2.90))
       alert("O Valor a ser Pago é de: R$" + valorASerPago.toFixed(2))
     } else {
       if (litrosVendidos > 20) {
         valorASerPago = (litrosVendidos * 2.90) - ((5 / 100) * (litrosVendidos * 2.90));
         alert("O Valor a ser Pago é de: R$" + valorASerPago.toFixed(2));
       } else {
         alert("A quantidade de Litros Vendidos não é válida!!");
       }
     }
   } else if (combustivel === "G" && litrosVendidos > 0) {
     if (litrosVendidos <= 20) {
       valorASerPago = (litrosVendidos * 3.30) - ((4 / 100) * (litrosVendidos * 3.30));
       alert("O Valor a ser Pago é de: R$" + valorASerPago.toFixed(2));
     } else {
       if (litrosVendidos > 20) {
         valorASerPago = (litrosVendidos * 3.30) - ((6 / 100) * (litrosVendidos * 3.30));
         alert("O Valor a ser Pago é de: R$" + valorASerPago.toFixed(2));
       }
     }
   } else {
     if (litrosVendidos <= 0 && combustivel !== "G" && combustivel !== "A") {
      alert("A Quantidade de Litros Vendidos e o Tipo de Combustível não são válidos!!");
     } else if (litrosVendidos <= 0 && (combustivel === "G" || combustivel === "A")) {
      alert("A Quantidade de Litros Vendidos não é válida!!");
     } else {
      alert("O Tipo de Combustível não é válido!!");
     }
   }
   