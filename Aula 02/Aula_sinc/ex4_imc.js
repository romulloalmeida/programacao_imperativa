// Aula 02 - Exercício 01

var nome;   //Declarando o nome completo do cliente
var idade;  //Declarando a idade do cliente
var peso;   //Declarando o peso do cliente
var altura; //Declarando a altura do cliente
var plano;  //Declarando o tipo de plano do cliente
var imc;    //Declarando a variável que vai armazenar o IMC do cliente

//Inserindo dos dados do cliente José
nome = "José da Silva";
idade = 27;
peso = 83,5;
altura = 1.70;
plano = "Ouro"

//Cálculo de ICM
imc = peso/(altura*altura);

//Exibição da informação
console.log(`${nome} tem ${idade} anos e seu indice de massa corporea e de ${imc}.`);
// Usando crase, pode-se declarar variáveis(${variaável}) sem precisar concatenar dados com strings