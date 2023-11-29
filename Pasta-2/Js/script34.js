alert("34) Seja o seguinte algoritmo: ")


 let X=parseInt(prompt("Digite o Valor de X: "))
 
 let  Y=parseInt(prompt("Digite o Valor de Y: "))
 

let Z = (X * Y) + 5

if (Z <= 0) {
  let Resposta = "A"
} else {
   if (Z <= 100) {
     let Resposta = "B"
   } else {
     let Resposta = "C" 
   }
}

alert("O resultado de Z é de: ", Z , " e a resposta correta é: "+ Resposta)