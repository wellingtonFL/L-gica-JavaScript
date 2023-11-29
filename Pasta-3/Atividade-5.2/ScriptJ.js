
alert("Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.")


alert("Digite o dividendo: ")
let dividendo = parseInt(prompt())

alert("Digite o divisor: ")
let divisor = parseInt(prompt())

if (divisor === 0) {
    alert("Não é possível dividir por zero.")
} else {
    let quociente = 0

    while (dividendo >= divisor) {
        dividendo -= divisor
        quociente++
    }

    alert("O resultado da divisão inteira é: " + quociente)
}

