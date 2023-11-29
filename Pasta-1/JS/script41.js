
alert("41) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop while.")


let numero = parseInt(prompt("Digite um número inteiro positivo: "));
let divisor = 1;

if (numero <= 0 || isNaN(numero)) {
    alert("Por favor, insira um número inteiro positivo válido.");
} else {
    while (divisor <= numero) {
        
       
if (numero % divisor === 0) {
            
           
alert(divisor);
        }
        divisor++;
    }
}

        
       
