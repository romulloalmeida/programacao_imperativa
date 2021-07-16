// Exercício para usar o metodo map()

let letraMinuscula = ["a", "b", "c"];

let letraMaiuscula = letraMinuscula.map(
    function maiuscula(elemento){
        return elemento.toUpperCase();
    }
);

console.log(letraMinuscula);
console.log(letraMaiuscula);