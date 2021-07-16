// Exercício para converter um array em string

// Declarando array
let serie = [1,5,9,3,7];

let texto = serie.reduce(function(acc,num){
    return acc + " - " + num;
});

console.log(texto);