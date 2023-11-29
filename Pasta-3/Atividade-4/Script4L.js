
alert("Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: Ilmo Sr. se o sexo informado como masculino, ou a mensagem Ilma Sra., para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado.")


 
let nome = prompt("Informe seu nome: ")

let sexo = prompt("Informe seu sexo (masculino/feminino): ")

if (sexo.toLowerCase() === "masculino") {
  alert("Ilmo Sr. " + nome)
} else if (sexo.toLowerCase() === "feminino") {
  alert("Ilma Sra. " + nome)
} else {
  alert("Sexo não reconhecido")
}
