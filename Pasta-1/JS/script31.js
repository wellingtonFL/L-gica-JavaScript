alert("31) Faça um programa que leia o valor do salário-mínimo e o salário de um funcionário, e exiba quantos salários-mínimos ele recebe.")

let salarioMinimo = 1.320; // Valor do salário mínimo atual em reais
let salario = parseFloat(prompt("Digite seu salário"));

let quantiaSalario = salario / salarioMinimo;
quantiaSalario = Math.round(quantiaSalario * 100) / 100; // Arredonda para 2 casas decimais

alert("A quantidade de salários mínimos que você recebe é de " + quantiaSalario);
