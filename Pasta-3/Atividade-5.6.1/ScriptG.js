Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
//considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
//neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).


let contador = 1;

while (contador < 200) {
    if (contador % 4 === 0) {
        console.log(contador);
    }
    contador++;
}
