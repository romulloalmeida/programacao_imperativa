// Exercício usando o método redurce()

const numero = [1,2,-3,4,-5,0,7,8,9,19];
let resultado = numero.reduce(
    function agrupar(tot,elemento){
        return tot + elemento;
});

console.log(resultado);