alert("26) Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque equantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidademédia = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou iguala quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuarcompra'. ")





 let EstoqueAtual=parseFloat(prompt("Digite a Quantidade Atual em estoque: "))
 
   let QuantidadeMaxima=parseFloat(prompt("Digite a Quantidade Maxima em estoque: "))
 
   let QuantidadeMinima=parseFloat(prompt("Digite a Quantidade Minima em estoque: "))
 
   let QuantidadeMedia = ((QuantidadeMaxima + QuantidadeMinima) /2)


if (EstoqueAtual >= QuantidadeMedia) {
   alert("Não efetuar compra")
} else {
   alert("Efetuar compra")
}

