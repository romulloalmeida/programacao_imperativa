// Checkpoint I - Microondas

// Declarando as constantes
const pipoca_t = 10;
const macarrao_t = 8;
const carne_t = 15;
const feijao_t = 12;
const brigadeiro_t = 8;

// Criando a função para fazer a verificação do tempo de preparo
function verificacao(numero, check) {
    if (numero > check * 3) {
        console.log("kabumm!!!!!");
    }
    else if (numero > check * 2 && numero <= check * 3) {
        console.log("A comida queimou!");
    }
    else if (numero < check) {
        console.log("Tempo insuficiente!");
    }
    else {
        console.log("Prato pronto, bom apetite!!!");
    }
}

// Criação da função de padronicação de case
function nome(nome) {
    return nome.toLowerCase();
}

// Criação da função de verificação do tipo de tempo
function numero(a) {
    if (typeof (a) == "number") {
        return true;
    }
    else {
        return false;
    }

}

// Criação da função de verificação do tipo de texto
function texto(a) {
    if (typeof (a) == "string") {
        return true;
    }
    else {
        return false;
    }

}

// Criação da função microondas que irá comportar suas ações
function microondas(prato, tempo) {
    if (numero(tempo) && texto(prato)) {
        comida = nome(prato);
        switch (comida) {
            case "pipoca":
                verificacao(tempo, pipoca_t);
                break;
            case "macarrao":
                verificacao(tempo, macarrao_t);
                break;
            case "carne":
                verificacao(tempo, carne_t);
                break;
            case "feijao":
                verificacao(tempo, feijao_t);
                break;
            case "brigadeiro":
                verificacao(tempo, brigadeiro_t);
                break;
            default:
                console.log("Prato inexistente!")
                break;
        }
    }
    else{
        console.log("Dados insuficientes ou incorretos!!");
    }
}

// Executando os testes

microondas("Pipoca", 20);
microondas("macarrao", 36);
microondas("CARNE", 36);
microondas("feijao", 36);
microondas("Brigadeiro", 10);
microondas(6,"pipoca");
microondas("lazanha", 20);
microondas("Água",0);