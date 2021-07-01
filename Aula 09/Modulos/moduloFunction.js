// Módulo para configurar funções

function chamada(nome, presença){
    if(presença==true){
        return(`${nome} está presente!`);
    }
    else{
        return(`${nome} faltou hoje`);
    }
}

module.exports = chamada;