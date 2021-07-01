//Micro-desafio 2 Função calculadora
function soma(a,b){
    //Declarando variável
    let soma;

    //Operação
    soma = a + b;

    //Retornando valores
    return soma;
}

function subtração(a,b){
    //Declarando variável
    let subtração;

    //Operação
    subtração = a - b;

    //Retornando valores
    return subtração;
}

function multiplicacao(a,b){
    //Declarando variável
    let multiplicacao;

    //Operação
    multiplicacao = a * b;

    //Retornando valores
    return multiplicacao;
}

function divisao(a,b){
    //Declarando variável
    let divisao;

    //Operação
    divisao = a / b;

    //Retornando valores
    return divisao;
}

//Executando a função
var num1 = 2;
var num2 = 1;

console.log("O resultado da operação é:" + soma(num1,num2));
console.log("O resultado da operação é:" + subtração(num1,num2));
console.log("O resultado da operação é:" + multiplicacao(num1,num2));
console.log("O resultado da operação é:" + divisao(num1,num2));
