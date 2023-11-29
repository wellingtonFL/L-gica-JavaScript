alert("Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão")



alert("Graus Celsius para Graus Fahrenheit")

let celsius=parseInt(prompt("Digite sua temperatura"))


while (celsius <= 100) {
 
    let fahrenheit = (9 * celsius + 160) / 5;

   
    console.log(celsius.toFixed(2) + "            " + fahrenheit.toFixed(2));


    celsius += 10;
}
