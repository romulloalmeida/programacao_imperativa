//Micro-desafio 1 Função IMC
function calcularIndiceDeMassaCorportal(h,p){
    // Declarando variáveis
    let imc;
    let altura;
    let peso;

    //Adequando os valores
    altura = h/100;
    peso = p;

    //Calculando IMC
    imc = peso/(altura**2);

    //Retornando valores
    return imc;
}

//Executando a função
var valorPeso=50;
var valorAltura=165;

console.log("O valor do IMC é: " + calcularIndiceDeMassaCorportal(valorAltura,valorPeso) + ".");