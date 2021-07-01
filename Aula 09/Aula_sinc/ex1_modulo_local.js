// Exercício de modulação de calculadora

let calc = require("./Modulo/modulo_local");

function calcular(a,b,acao) {
    switch(acao){
        case "+": console.log(calc.somar(a,b)); 
        break;
        case "-": console.log(calc.subtrair(a,b)); 
        break;
        case "*": console.log(calc.multiplicar(a,b)); 
        break;
        case "/": console.log(calc.dividir(a,b)); 
        break;
        default: console.log("Digite uma operação válida!");
        break;
    }
}

calcular(1,5,"?");