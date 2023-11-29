Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
//Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
//pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
//valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo

let termoAnterior = 1;
let termoAtual = 1;

console.log("Os 15 primeiros termos da série de Fibonacci são:");
console.log(termoAnterior); // Primeiro termo
console.log(termoAtual);    // Segundo termo

for (let contador = 3; contador <= 15; contador++) {
    let proximoTermo = termoAnterior + termoAtual;
    console.log(proximoTermo);
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
}
