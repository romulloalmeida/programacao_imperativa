// Exercício da prática guiada

// 1-Criação da váriavel produto

let produto = [
    {
        nome: "produto1",
        valor: 1050,
        qualidade: 9,
        status: true,
    },
    {
        nome: "produto2",
        valor: 700,
        qualidade: 10,
        status: true,
    },
    {
        nome: "produto3",
        valor: 500,
        qualidade: 7,
        status: false,
    }
];

// 2-Filtro de produtos
const carrinho = produto.filter((produto) =>{
    const valor = produto.valor
    const qualidade = produto.qualidade
    const status = produto.status
    const selecionado = (valor >= 482 && valor <= 1600) && (qualidade >=6) && (status == true)
    return selecionado
});

// 3-Exibição dos itens do carrinho
carrinho.forEach((produto) => {
    console.log(`Produto: ${produto.nome}`)
    console.log(`Valor: ${produto.valor}`)
    console.log("-------------------------")
});

const total = carrinho.reduce((acumulador, produto) =>{
    return acumulador.valor + produto.valor
});

console.log(`Total: ${total}`);