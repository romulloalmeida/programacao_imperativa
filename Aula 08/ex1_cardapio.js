// Exercício do restaurante

let restaurante = {
    nome: "Alegria do povo",
    cardapio: ["Arroz", "Feijão", "Ovo"]
}

function entrada(local){
    console.log(`Seja bem vindo ao ${local.nome}, temos como cardápio hoje: ${local.cardapio[0]}, ${local.cardapio[1]} e ${local.cardapio[2]}.`)
}

entrada(restaurante);