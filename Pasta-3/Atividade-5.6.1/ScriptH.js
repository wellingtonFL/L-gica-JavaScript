

Elaborar um programa que apresente como resultado o valor de uma potência de uma base
//qualquer elevada a um expoente qualquer, ou seja, de BE
//, em que B é o valor da base e E o valor
//do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do

console.log("Resultados das potências de 3 de 0 a 15:");

for (let expoente = 0; expoente <= 15; expoente++) {
    let resultado = 1;

    for (let i = 1; i <= expoente; i++) {
        resultado *= 3;
    }

    console.log("3^" + expoente + " = " + resultado);
}
