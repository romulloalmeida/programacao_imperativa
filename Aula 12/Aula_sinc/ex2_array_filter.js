// Exercício usando o método filter()

const numero = [1,2,-3,4,-5,0,7,8,9,19];

const numerosMaiores = numero.filter(
    function filtro(elemento){
        return elemento>5;
    }
);

console.log(numerosMaiores);