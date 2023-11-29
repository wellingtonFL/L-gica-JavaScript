

alert("Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um  automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.")



alert("Este programa calcula a quantidade de litros gasto em uma viagem")
alert("Carro que consome em média 12km por litro")

let tempot=parseFloat(prompt("Escreva o tempo gasto em sua viagem:  "))

let velocidade=parseFloat(prompt("Escreva a velocidade média durante sua viagem: "))
 
let distancia= tempot * velocidade

let litrosUsados = distancia/12

alert("A distancia percorrida com o seu veiculo é:"+distancia)
alert("A quantidade de litros usados é:"+ litrosUsados)