alert("Uma fruteira está vendendo frutas com a seguinte tabela de preços: Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberáainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) demorangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. ")



 let Fruta =window.prompt("Insira a fruta comprada: ")

   let Kg=parseFloat(prompt("Insira a quantidade em Kg de ", Fruta, ": "))
 

   let valorKg
   
   if (fruta === "Maça") {
     if (kg <= 5) {
       valorKg = kg * 1.80
     } else {
       if (kg > 5) {
         valorKg = kg * 1.50
       }
     }
   } else if (fruta === "Morango") {
     if (kg <= 5) {
       valorKg = kg * 2.50
     } else {
       if (kg > 5) {
         valorKg = kg * 1.50
       }
     }
   }
   
   if (kg > 8 || valorKg > 25) {
     valorKg = valorKg - (0.10 * valorKg)
   }
   
   alert("O valor a ser pago é de: R$" + valorKg.toFixed(2))
   