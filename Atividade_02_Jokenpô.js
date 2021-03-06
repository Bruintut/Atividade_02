/* O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
Pedra ganha da tesoura, mas perde para o papel;
Tesoura ganha do papel, mas perde para a pedra;
Papel ganha da pedra, mas perde para a tesoura.
E para esse projeto você deve desenvolver um programa capaz de:
Receber o elemento escolhido pelo usuário;
Escolher um elemento aleatório para o computador;
Comparar os dois elementos e declarar um vencedor.
Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).
Requisitos
Para esse projeto, os requisitos fundamentais serão:
Permitir que eu decida quantas rodadas iremos fazer;
Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
Decidir de forma aleatória a decisão do computador;
Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.*/



const prompt = require("prompt-sync")();

console.log()
console.log('Seja bem vindo(a) ao jogo de Jokenpô');
console.log()



let listplayer = ['pedra', 'papel', 'tesoura'];
let listpc = ['pedra', 'papel', 'tesoura'];





loop: while(true){
let vitoria = 0
let empate = 0
let derrota = 0
let quantidade = +prompt('Quantas vezes você deseja jogar?')


for (i=0; i < quantidade; i++){
 
    for (a=0; a < quantidade; a++){
    let player = +prompt ('Digite, 1 para pedra, 2 para papel e 3 para tesoura');
  console.log()
      switch(player){
        case 1:
          player = listplayer[0]
          break;
        case 2:
          player = listplayer[1]
          break;
        case 3:
          player = listplayer[2]
          break;
        default:
          console.log ('A opção indicada não existe')
        
      }
  
    let pcgame = listpc[Math.floor(Math.random() * listpc.length)]
    
  
    if ((player == listplayer[0] && pcgame == listpc[2]) || (player == listplayer[1] && pcgame == listpc[0]) || (player == listplayer[2] && pcgame == listpc[1])) {
      
      console.log('Você ganhou, você colocou', player, 'e a máquina', pcgame);
      continue;
        vitoria++
      
    }else if ((player == listplayer[0] && pcgame == listpc[0]) || (player == listplayer[1] && pcgame == listpc[1]) || (player == listplayer[2] && pcgame == listpc[2])){
      
      console.log('Você empatou, você colocou', player, 'e a máquina', pcgame)
      continue;  
      empate++
      
    }else {
      console.log('Você perdeu, você colocou', player, 'e a máquina', pcgame)
      continue;
        derrota++
    }

    
      } 
  console.log()
    console.log('De ', quantidade, ' partidas, você obteve ',vitoria,'vitorias, ',empate, 'empates e   ',derrota,' derrotas');
    console.log()
  
 let replay = prompt('Deseja jogar novamente? sim ou não').toLowerCase()
    if (replay == 'sim'){
       console.log('Ok, será reiniciado o jogo')
      continue loop;
   
    } else{
     break loop;
    } 
  
}  
    }
