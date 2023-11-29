

alert("Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE , em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do")

let expoente = 0

while (expoente <= 15) {
    let resultado = 1

    for (let i = 1; i <= expoente; i++) {
        resultado *= 3
    }

    alert("3 elevado a " + expoente + " = " + resultado)
    expoente++
}
