
alert("Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.")

   Escreval("Este programa faz adição e multiplicação de 4 valores:")


   let A=parseInt(prompt("Digite um valor A que tera uma adição com os demais numeros: "))

   let B=parseInt(prompt("Digite um valor B que tera uma adição com os demais numeros: " ))
    
   let C=parseInt(prompt("Digite um valor C que tera uma adição com os demais numeros: "))
   
   let D=parseInt(prompt("Digite um valor D que tera uma adição com os demais numeros:"))
 
  
   alert("Resultado das adições")


   let adicaoA=A+B
   let adicaoB=A+C
   let adicaoC=A+D
   let adicaoD=B+C
   let adicaoE=B+D
   let adicaoF=C+D

   let multiplicaA=A*B
   let multiplicaB=A*C
   let multiplicaC=A*D
   let multiplicaD=B*C
   let multiplicaE=B*D
   let MultiplicaF=C*D

  alert("Resultado das somas")

   alert("A soma de A+B é: "+adicaoA)
   alert("A Soma de A+C é:"+adicaoB)
   alert("A Soma de A+D é:"+adicaoC)
   alert("A Soma de B+C é:"+adicaoD)
   alert("A Soma de B+D é:"+adicaoE)
   alert("A Soma de C+D é:"+adicaoF)

   alert("Resultado das multiplicações")

   
   alert("A multiplicação de A+B é: ",multiplicaA)
   alert("A multiplicação de A+C é: ", multiplicaB)
   alert("A multiplicação de A+D é: ",multiplicaC)
   alert("A multiplicação de B+C é: ",multiplicaD)
   alert("A multiplicação de B+D é: ", multiplicaE)
   alert("A multiplicação de C+D é: ",multiplicaF)