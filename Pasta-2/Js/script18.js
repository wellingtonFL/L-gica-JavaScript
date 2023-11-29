alert("17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escreveruma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 oaluno é aprovado). Escrever também a média calculada. ")




 let AnoNascimento=parseInt(prompt("Digite seu Ano de Nascimento: "))

 let AnoAtual =parseFloat(prompt("Digite o Ano Atual: "))


 let Idade = AnoAtual - AnoNascimento


if (Idade<18) {
    alert("Voce ainda não pode votar esse ano!!")
} else {
    alert("Voce pode votar esse ano!!")
}

