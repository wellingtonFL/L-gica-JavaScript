alert("31) Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formamou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a somados outros 2 lados. ")




 let  A=parseInt(prompt("Insira aqui o Primeiro Valor: "))
  
    let B=parseInt(prompt("Insira aqui o Segunndo Valor: "))
  
   let C=parseInt(prompt("Insira aqui o Terceiro Valor: "))
  


   if (A < (B+C) && B < (A+C) && C < (B+A)) {
      alert("Estes Valores formam um triângulo!")
   } else {
      alert("Estes Valores Não formam um triângulo!")
   }
