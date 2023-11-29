alert("Programa para ver se aluno passou")

let nota1=parseInt(prompt("Digite a primeira"))
let nota2=parseInt(prompt("Digite a segunda nota"))
let nota3=parseInt(prompt("Digite a terceira nota"))

let media=(nota1+nota2+nota3)/3
if (media>=7) {
    alert("Seu aluno foi aprovado pois ele teve uma média boa")
    
} else {
    alert("Seu aluno foi reprovado")
    
}