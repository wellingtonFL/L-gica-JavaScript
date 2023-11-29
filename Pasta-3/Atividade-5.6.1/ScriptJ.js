laborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
//10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
//programa deve apresentar os valores das duas temperaturas. A fórmula de conversão


console.log("Conversão de graus Celsius para Fahrenheit:");

for (let celsius = 10; celsius <= 100; celsius += 10) {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + " graus Celsius equivalem a " + fahrenheit + " graus Fahrenheit");
}
