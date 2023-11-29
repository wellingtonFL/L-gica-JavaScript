alert("32) Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nomedo vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE. ")



  let NomeTimeUm=window.prompt ("Digite o nome do Primeiro Time: ")
 
 let  GolsUm=parseInt(prompt("Digite a quantidade de gols do "+ NomeTimeUm+ ":"))
 
  let NomeTimeDois=window.prompt("Digite o nome do Segundo Time: ")
 
  let GolsDois=parseInt(prompt("Digite a quantidade de gols do "+ NomeTimeDois+ ":"))
 
if (GolsUm > GolsDois) {
   alert("O Time vencedor foi: "+NomeTimeUm)
} else {
   if (GolsDois > GolsUm) {
      alert("O Time vencedor foi: "+ NomeTimeDois)
   } else {
      alert("O Resultado do jogo foi Empate")
   }
}

