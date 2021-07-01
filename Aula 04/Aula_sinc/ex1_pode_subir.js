// Desafio pode subir

// Variaveis
var altura;
var acompanhante;

// Setar variáveis
altura = 2.50;
acompanhante = false;

// Função podeSubir
function podeSubir(h,a){
    if(h > 2){
        console.log("Acesso negado!");
        return;
    }
    if(h > 1.4){
        console.log("Acesso autorizado!");
        return;
    }
    if(h > 1.2 && a == true){
        console.log("Acesso autorizado!");
        return;
    }
    if(h > 1.2 && a == false){
        console.log("Acesso somente com acompanhante!");
        return;
    }
    else{
        console.log("Acesso negado!");
        return;
    }

}

// Testanto função
console.log(podeSubir(altura,acompanhante));