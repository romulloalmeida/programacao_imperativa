// Exercício para calcular nota dos alunos

const media = 7;

function aluno(nome, numero, notas){
    this.nome = nome;
    this.numero = numero;
    this.notas = notas;
    this.media = function(){
        total = 0;
        for(i=0;i<this.notas.length;i++){
            total += this.notas[i];
        }
        return total/this.notas.length;
    }
    this.aprovado = function(){
        if(this.media()>media){
            console.log(`${this.nome} foi aprovado!`)
        }
        else{
            console.log(`${this.nome} foi reprovado!`)
        }
    }
}

let Joao = new aluno("João",5,[10,5,8,6]);
let Ana = new aluno("Ana",6,[1,3,8,10]);
let Pedro = new aluno("Pedro",8,[6,5,6,6]);
let Alice = new aluno("Alice",15,[7,9,8,4]);
Ana.aprovado();
Joao.aprovado();
console.log(Pedro.media());
console.log(Ana.media());
console.log(Alice.media());