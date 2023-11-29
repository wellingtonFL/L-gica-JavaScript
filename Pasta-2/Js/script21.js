alert("21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem osminutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte. ")


 HoraInicio("Digite o horario de inicio da partida em horas inteiras(sem os minutos): ")

 HoraFim("Digite o horario do fim da partida em horas inteiras(sem os minutos): ")


if (HoraFim< HoraInicio) {
     let duracao = (24 - HoraInicio) + HoraFim
} else {
   let  duracao = HoraFim - HoraInicio
}
alert("A duração do jogo é de: "+ duracao+ " horas")
