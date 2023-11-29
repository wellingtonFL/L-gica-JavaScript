alert("24) Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se queele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o queultrapassar este valor, calcular e escrever o seu salário total. ")


 SalarioFixo("Escreva o Valor de seu salario: ")
 
ValorDeVendas("Escreva o Valor do Total de Vendas: ")


 let SalarioTotal = (ValorDeVendas * (3/100))


if (SalarioTotal > 1500) {
    let SalarioTotal = (ValorDeVendas * (5/100)) - 1500
}
alert("O valor do seu salario com a comissão é de: "+ SalarioTotal)