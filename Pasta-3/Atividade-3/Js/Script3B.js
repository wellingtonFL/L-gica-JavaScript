

alert("Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS). ")





   Escreval("Este programa irá fazer o percentual de reajuste do salário de seu funcionario")
     


  let SM=parseInt(prompt("Digite o salário do seu funcionário: "))
 
   let PR=parseInt(prompt("Digite o percentual de rejuste: "))
 
    let reajuste = (SM*PR)/100

   Escreval("O reajuste de salario do seu funcionario é de: " ,"R$"+reajuste)
   Escreval("Logo então você tera que pagar ao seu funcionario: ","R$"+reajuste+SM )
