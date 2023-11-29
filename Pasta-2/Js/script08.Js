
alert("8) Escreva um algoritmo para ler o número total de eleitores de um município, o número de votosbrancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. ")



let VotosTotais=parseInt(prompt("Digite o numero total de eleitores:"))
let VotosBrancos=parseInt(prompt("Digite o numero de votos brancos:"))
let VotosNulos=parseInt(prompt("Digite o numero de votos nulos"))
let VotosValidos=parseInt(prompt("Digite o numero de votos validos"))

 let PercentualBrancos = (VotosBrancos / VotosTotais) * 100
 let PercentualNulos = (VotosNulos / VotosTotais) * 100
 let PercentualValidos = (VotosValidos / VotosTotais) * 100

alert("Percentual em relação ao total de eleitores dos votos brancos: "+ PercentualBrancos.toFixed(2)+"%")
alert("Percentual em relação ao total de eleitores dos votos nulos: "+ PercentualNulos.toFixed(2)+"%")
alert("Percentual em relação ao total de eleitores dos votos validos: "+ PercentualValidos.toFixed(2)+"%")