// Micro Desafio 03 Estações

// Variaveis
var estação;
var resposta;
// Setando valores
estação = "Primavera";
// Switch
switch(estação){
    case "Verão":
        resposta = "Que calor heim?!";
        break;
    case "Inverno":
        resposta = "Frio dms!";
        break;
    case "Outono":
        resposta = "É a estação em que as folhas caem.";
        break;
    case "Primavera":
        resposta = "O momento em que as flores crescem!";
        break;
    default:
        resposta = "Ops, estação inválida!";
        break;
}

// Exibindo o resultado
console.log(resposta);