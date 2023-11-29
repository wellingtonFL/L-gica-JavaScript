

alert("9) Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.Calcular e escrever o valor do novo salário. ")

   let salario=parseFloat(prompt("Digite o Valor do seu Salario: "))
   let Reajuste=parseInt(prompt("Digite o Valor de reajuste em Porcentagem: "))

    let NovoSalario = Salario +(Salario * (Reajuste / 100))
   
   alert("O Valor de seu novo salario é de: "+NovoSalario)