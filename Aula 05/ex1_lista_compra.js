// Aula 05 - 11/06/2021
// Array  
// Micro Desafio 01

// Variaveis
var produto=["Açucar","Óleo","Sabão"];

// Criando uma função para verificar se temos um array válido.

function verificarArray(iten){
    if(typeof(iten)!=="object"){
        console.log("Não é um array!");
        return;
    }
}

// Pop
function arrayPop(iten){
    // Validando o array
    verificarArray(iten);

    //Atribuino variáveis
    let produtoEliminado;
    const MENSAGEM_POP_FUNCAO = "O método pop elimina o último item do array que é:";
    const MENSAGEM_POP_RESULTADO = "Ficando como resultado o seguinte array:"

    // Executando o métido Pop
    produtoEliminado = iten.pop();
    console.log(MENSAGEM_POP_FUNCAO);
    console.log(produtoEliminado);
    console.log(MENSAGEM_POP_RESULTADO);
    console.log(iten);
}

// Push
function arrayPush(iten, add){
    // Validando o array
    verificarArray(iten);

    //Atribuino variáveis
    let produtoAdicionado = add;
    const MENSAGEM_PUSH_FUNCAO = "O método push adiciona um item no final do array que é:";
    const MENSAGEM_PUSH_RESULTADO = "Ficando como resultado o seguinte array:"

    // Executando o métido Pop
    produto.push(produtoAdicionado);
    console.log(MENSAGEM_PUSH_FUNCAO);
    console.log(produtoAdicionado);
    console.log(MENSAGEM_PUSH_RESULTADO);
    console.log(iten);
}

// Shift
function arrayShift(iten){
    // Validando o array
    verificarArray(iten);

    //Atribuino variáveis
    let produtoEliminado;
    const MENSAGEM_SHIFT_FUNCAO = "O método pop elimina o primeiro item do array que é:";
    const MENSAGEM_SHIFT_RESULTADO = "Ficando como resultado o seguinte array:"

    // Executando o métido Pop
    produtoEliminado = iten.shift();
    console.log(MENSAGEM_SHIFT_FUNCAO);
    console.log(produtoEliminado);
    console.log(MENSAGEM_SHIFT_RESULTADO);
    console.log(iten);
}

// Unshift
function arrayUnshift(iten, add){
    // Validando o array
    verificarArray(iten);

    //Atribuino variáveis
    let produtoAdicionado = add;
    const MENSAGEM_UNSHIFT_FUNCAO = "O método push adiciona um item no inicio do array que é:";
    const MENSAGEM_UNSHIFT_RESULTADO = "Ficando como resultado o seguinte array:"

    // Executando o métido Pop
    produto.unshift(produtoAdicionado);
    console.log(MENSAGEM_UNSHIFT_FUNCAO);
    console.log(produtoAdicionado);
    console.log(MENSAGEM_UNSHIFT_RESULTADO);
    console.log(iten);
}

// Join
function arrayJoin(iten){
    // Validando o array
    verificarArray(iten);

    //Atribuino variáveis
    const MENSAGEM_JOIN_FUNCAO = "Cria uma string de um array, ficando:";

    console.log(MENSAGEM_JOIN_FUNCAO);
    console.log(iten.join());
}

// Testando a função
arrayPop(produto);
arrayPush(produto,"Água");
arrayShift(produto);
arrayUnshift(produto, "Desinfetante")
arrayJoin(produto)
