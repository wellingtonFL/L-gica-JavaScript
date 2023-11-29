alert("22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar maisde 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escrevao salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas considere que o mês possua 4 semanas exatas. ")



 let HorasTrabalhadas=parseInt(prompt("Digite o numero de horas trabalhadas no mes: "))

 let  SalarioPorHora=parent(prompt("Digite o salario por hora: "))
 

 if (HorasTrabalhadas > 160) {
   
   let HorasExtras = HorasTrabalhadas - 160
    let ValorHoraExtra = SalarioPorHora + (50/SalarioPorHora)
   let SalarioTotal = (160 * SalarioPorHora) + (HorasExtras * ValorHoraExtra)

 } else {
   SalarioTotal <- HorasTrabalhadas * SalarioPorHora
 }

 alert("O salario total do funcionario é de R$ "+SalarioTotal)

