
alert("Elaborar um programa que efetue o cálculo e no final apresente o somatório do número de grãos de  trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra: colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro quadro coloca-se 1 grão, no segundo quadro colocam-se 2 grãos (neste momento têm-se 3 grãos), no terceiro quadro colocam-se 4 grãos (tendo neste momento 7 grãos), no quarto colocam-se 8 grãos (tendo-se então 15 grãos) até atingir o sexagésimo quarto (64o")

let contador = 1
let somaTotalGraos = 0


do {
    let dobraValor = Math.pow(2, contador - 1)
    somaTotalGraos += dobraValor
    contador++
} while (contador <= 64)

alert("Cabem " + somaTotalGraos + " grãos num tabuleiro de xadrez.")
