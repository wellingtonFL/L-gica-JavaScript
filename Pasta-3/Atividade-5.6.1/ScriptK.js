


Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
//situados na faixa numérica de 1 a 10.

console.log("Fatorial dos valores ímpares na faixa de 1 a 10:");

for (let numero = 1; numero <= 10; numero++) {
    if (numero % 2 !== 0) {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        console.log(numero + "! = " + fatorial);
    }
}



