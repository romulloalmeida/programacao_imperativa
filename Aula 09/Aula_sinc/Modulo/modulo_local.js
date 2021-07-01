// Módulo de exportação para uma calculadora

// Função de verificação do typo de variável
function verificar(a,b) {
    if(typeof a == "number" && typeof b == "number"){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    somar: (a,b) => {
        if(verificar(a,b) == true){
            return a + b;
        }
        else{
            return "Insira um número!"
        }
    },
    subtrair: (a,b) => {
        if(verificar(a,b) == true){
            return a - b;
        }
        else{
            return "Insira um número!"
        }
    },
    multiplicar: (a,b) => {
        if(verificar(a,b) == true){
            return a * b;
        }
        else{
            return "Insira um número!"
        }
    },
    dividir: (a,b) => {
        if(b != 0){
            if(verificar(a,b) == true){
                return a / b;
            }
            else{
                return "Insira um número!"
            }
        }
        else{
            return "Impossível dividir!"
        }
    }
}