


    alert("Escreva 4 notas")


     let nota1=parseInt(prompt("Nota UM:"))
    
    let nota2=parseInt(prompt("Nota Dois:"))
   
   let nota3=parseInt(prompt("Nota Três:"))
   
   let nota4=parseInt(prompt("Nota Quatro:"))
    

   let media=  (nota1+nota2+nota3+nota4)/4

  if (media>=5) {
   alert("Aluno Aprovado com a nota: "+ media)
  } else {
   alert("Aluno Reprovado com a nota: "+ media)
  }
  