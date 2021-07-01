// Microdesafio Filmes

// Definindo variáveis
let filmes=["star war", "clube da luta", "o poderoso chefão", "top gun", "interestelar"];

// Verificação do Array
console.log(filmes[1]);

// Colocando tudo em MAIUSCULA
for(i=0;i<filmes.length;i++){
    filmes[i]=filmes[i].toUpperCase();
}
console.log(filmes);

// Criando arrya animação
let cartoons=["toy story", "procurando nemo", "kung-fu panda", "wally", "fortnite"];

// Tirando o item que não é animação
cartoons.pop();
console.log(cartoons);

// Juntando animações na lista de filmes
for(i=0;i<cartoons.length;i++){
    filmes.push(cartoons[i]);
}
console.log(filmes);

// Notas
const asiaScore=[8,10,6,9,10,6,6,8];
const euroScore=[8,10,6,8,10,6,7,9];

for(i=0;i<euroScore.length;i++){
    if(asiaScore[i]==euroScore[i]){
        console.log(`As notas são iguais, seu valor é ${asiaScore[i]}.`);
    }
    else{
        console.log(`As notas são difentes, o valor europeu é ${euroScore[i]}, já o valor asiático é ${asiaScore[i]}.`);
    }
}
