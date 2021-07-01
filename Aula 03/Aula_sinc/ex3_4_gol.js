//Micro-desafio 3 Função Gol
//Declarando variáveis
var nomeJogador;
var golsJogador;
var precoEmDolares;

//Atribuindo valores
nomeJogador = "João";
golsJogador = 3;
precoEmDolares = 200;


//Função Gol
function fazerGol(){
    //Operando
    golsJogador = golsJogador + 1;
    precoEmDolares = precoEmDolares + 10000;
    console.log("GOL!!!!!!!!!!!!!!!!");
}

//Executando a função
fazerGol();
fazerGol();
/* console.log("O nome do jogador é: " + nomeJogador);
console.log("O número de gols é: " + golsJogador);
console.log("O valor do jogador é: " + precoEmDolares); */

//Micro-desafio 4 Função Hat Trick
function hatTrick(){
    //Executando
    fazerGol();
    fazerGol();
    fazerGol();
    precoEmDolares = precoEmDolares*1,1;
}

//Executando a Função
hatTrick();
console.log("O nome do jogador é: " + nomeJogador);
console.log("O número de gols é: " + golsJogador);
console.log("O valor do jogador é: " + precoEmDolares);