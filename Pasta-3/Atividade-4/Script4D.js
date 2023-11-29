
alert("Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição")



  
   alert("Escreva 4 notas")
 
    let nota1=parseInt(prompt("Nota UM:"))
  
    let nota2=parseInt(prompt("Nota Dois:"))
  
    let nota3=parseInt(prompt("Nota Três:"))
   
     let nota4=parseInt(prompt("Nota Quatro:"))
   

    let media = (nota1+nota2+nota3+nota4)/4


    if (media >= 7) {
      alert("Aluno Aprovado com a nota: " + media)
    } else {
      const exame = parseFloat(prompt("Digite a nota do exame:"));
    
      const notaFinal = (exame + media) / 2;
    
      if (notaFinal >= 5) {
        console.log("Aluno aprovado no sufoco com nota: " + notaFinal);
      } 
      }
        alert("Aluno reprovado com nota: " + notaFinal);
      
    
   