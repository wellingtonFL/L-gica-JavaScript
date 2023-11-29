
   alert("Escreva cinco números")

  let num1=parseInt(prompt("Número 1: "))
 
   let num2=parent(prompt("Número 2: "))
   
    let  num3=parseInt(prompt("Número 3: "))
   
     let num4=parent(prompt("Número 4: "))
    
    let num5=parent(prompt("Número 5: "))

let maior = numeros[0]
let menor = numeros[0]


for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

alert("O maior número é: " + maior)
alert("O menor número é: " + menor)

  