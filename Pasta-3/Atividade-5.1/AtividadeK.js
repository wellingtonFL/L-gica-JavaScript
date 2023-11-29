


alert("Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área  do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.")

    let areaTotal = 0

while (true) {
    alert("Digite o nome do cômodo: ")
    let nomeComodo = prompt()

    alert("Digite a largura do cômodo em metros: ")
    let largura = parseFloat(prompt())

    alert("Digite o comprimento do cômodo em metros: ")
    let comprimento = parseFloat(prompt())

    let areaComodo = largura * comprimento

    alert("A área do " + nomeComodo + " é de " + areaComodo + " metros quadrados.")

    areaTotal += areaComodo; 

    alert("Deseja calcular outro cômodo? (SIM/NAO): ")
    let continuar = prompt();

    if (continuar.toUpperCase() === "NAO") {
        break; 
    }
}

alert("A área total da residência é de " + areaTotal + " metros quadrados.")
