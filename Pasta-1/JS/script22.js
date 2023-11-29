alert("Cálculo de aumento")

let salario=parseInt(prompt("Digite o sálario do seu fúncionario"))

if (salario>=2000) {
    let aumento= (10*salario)/100+salario
    alert("Seu novo sálario teve um aumento de 10%,logo você recebera  R$ "+aumento)
    
} else {
    let novosalario= (5*salario)/100+salario
    alert("Seu novo sálario teve um aumento de 5%,logo você recebera R$"+novosalario)
    
}