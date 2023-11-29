alert("33) Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro. ")

ValorUm,ValorDois: Inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   Escreval("Digite o Primeiro Valor: ")
   Leia(ValorUm)
   Escreval("Digite o Segundo Valor: ")
   Leia(ValorDois)

   Se (ValorUm = ValorDois) Entao
      Escreval("Números iguais")
   Senao
      Se (ValorUm > ValorDois)Entao
         Escreval("Primeiro é maior")
      Senao
         Se (ValorUm < ValorDois) Entao
            Escreval("Segundo maior")
         Fimse
      Fimse
   Fimse