// Exercício Callback

function andar(){
    console.log("O carro está andando.");
}

function parar(){
    console.log("O carro parou.");
}

function acaoCarro(callback){
    callback();
}

acaoCarro(andar);
acaoCarro(parar);