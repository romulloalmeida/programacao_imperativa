// Exercício de Array usando parametro .filter()

// Declarando o array
let nomes = ["Maria", "João", "Pedro", "Antonia", "Maria"];

let maria = nomes.filter(function(nome){
    return nome == "Maria";
});

console.log(maria);