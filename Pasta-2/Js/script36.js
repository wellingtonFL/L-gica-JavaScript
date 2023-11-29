alert("36) Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idadesdos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a somadas idades do homem mais velho com a mulher mais nova, e o produto das idades do homem maisnovo com a mulher mais velha. ")
    




 IdadeHomemUm("Insira a Idade do Primeiro Homem: ")
 
  IdadeHomemDois("Insira a Idade do Segundo Homem: ")
   
 IdadeMulherUm("Insira a Idade da Primeira Mulher: ")
  
    IdadeMulherDois("Insira a Idade da Segunda Mulher: ")
  

    let somaUm,somaDois
    
    if (idadeHomemUm > idadeHomemDois) {
      if (idadeMulherUm < idadeMulherDois) {
        somaUm = idadeHomemUm + idadeMulherUm;
        somaDois = idadeHomemDois + idadeMulherDois;
        alert("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: " + somaUm)
        alert("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: " + somaDois)
      } else {
        if (idadeMulherUm > idadeMulherDois) {
          somaUm = idadeHomemUm + idadeMulherDois;
          somaDois = idadeHomemDois + idadeMulherUm;
         alert("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: " + somaUm)
          alert("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: " + somaDois)
        }
      }
    } else {
      if (idadeHomemUm < idadeHomemDois) {
        if (idadeMulherUm < idadeMulherDois) {
          somaUm = idadeHomemDois + idadeMulherUm;
          somaDois = idadeHomemUm + idadeMulherDois;
          alert("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: " + somaUm)
          alert("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: " + somaDois)
        } else {
          if (idadeMulherUm > idadeMulherDois) {
            somaUm = idadeHomemDois + idadeMulherDois;
            somaDois = idadeHomemUm + idadeMulherUm;
            alert("A Soma da Idade do Homem mais velho e a Mulher mais nova é de: " + somaUm)
            alert("A Soma da Idade do Homem mais novo e a Mulher mais velha é de: " + somaDois)
          }
        }
      }
    }
    