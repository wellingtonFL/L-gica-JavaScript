alert("17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escreveruma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 oaluno é aprovado). Escrever também a média calculada. ")




  let UmA=parseInt(prompt("Digite o Valor da Primeira nota: "))

 let DoisA= parseInt(prompt("Digite o Valor da Segunda nota: "))


 let Media = ((UmA + DoisA) / 2)


 if (Media<6) {
    alert("Voce não foi aprovado! Sua media é "+  Media)
 } else {
alert("Voce foi aprovado! Sua media é "+ Media)
 }



