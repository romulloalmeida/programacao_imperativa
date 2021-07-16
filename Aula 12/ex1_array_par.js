// Exercício de array com pares para converter para impar

// Declarando o array
let par = [2,4,6,8,10];

let impar = par.map(function(num){
    return num + 1;
});

console.log(impar);