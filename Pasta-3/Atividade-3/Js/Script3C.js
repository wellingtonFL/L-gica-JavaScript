



   alert("Este programa irá fazer a porcentagem de votos de seus candidatos")
 
  let CandidatoA=parseInt(prompt("Escreva a quantidade de votos do candidato A: "))

    let CandidatoB=parseInt(prompt("Escreva a quantidade de votos do candidato B: "))
  
  let CandidatoC=parseInt(prompt("Escreva a quantidade de votos do candidato C: "))

  let nulos=parent(prompt("Digite a quantidade de votos nulos: "))

   let brancos=parseInt(prompt("Digite a quantidade de votos brancos: "))
   


   somatotal=CandidatoA+CandidatoB+CandidatoC+nulos+brancos
   percentualA=(CandidatoA/somatotal)*100
   percentualB= (CandidatoB/somatotal)*100
   percentualC= (CandidatoC/somatotal)*100
   percentualN= (nulos/somatotal)*100
   percentualBran=(brancos/somatotal)*100
   alert("O percentual de votos do canditato A foi: "+ percentualA )
   alert("O percentual de votos do canditato B foi: "+ percentualB)
   alert("O percentual de votos do canditato C foi: "+ percentualC )
   alert("O percentual de votos nulos foi: "+  percentualN )
   alert("O percentual de votos em branco foi: "+ percentualBran )
