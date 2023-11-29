alert(" Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.")


let expoente = 0

while (expoente <= 15) {
    let resultado = 1
    let i = 1

    while (i <= expoente) {
        resultado *= 3 
        i++ 

    alert("3 elevado a " + expoente + " = " + resultado)
    expoente++
}
}
