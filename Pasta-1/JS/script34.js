alert("34) Faça um programa que leia a idade de uma pessoa e exiba se ela pode ou não votar. O voto é obrigatório para pessoas entre 18 e 70 anos, e facultativo para pessoas entre 16 e 18 anos e com mais de 70 anos.")

let idade= parseInt(prompt("Digite sua idade"))

if (idade >=19) {
    alert("O seu voto é obrigatório")
    
} else if(idade >=16 ) {

    alert("Seu voto é vacultativo")

    
}