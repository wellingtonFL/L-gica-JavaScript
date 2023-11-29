

alert("Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.")


   Escreval("Este programa faz a conversão de dólar para real")


   let cotacao=parseFloat(prompt("Coloque o valor da cotação do dólar:  "))

   let conversao=parseFloat(prompt("Coloque a quantidade de dólar que será convertida para reais: "))

   let Resultado= cotacao*conversao

   alert("Aquantidade de reais obtidas nessa operação será de: "+ " R$ "+Resultado  )