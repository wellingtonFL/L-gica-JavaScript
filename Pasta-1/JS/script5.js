

var precoProduto = parseFloat(prompt("Digite o preço do produto:"))
var quantidadeComprada = parseInt(prompt("Digite a quantidade comprada:"))


let valorTotal = precoProduto * quantidadeComprada

if (quantidadeComprada>=10) {

    let desconto = (valorTotal*10)/100
    let descm= valorTotal-desconto
    alert("Valor total a ser pago: R$" +descm)
    
}else{
    alert("Seu produto não tem desconto de 10%")
}