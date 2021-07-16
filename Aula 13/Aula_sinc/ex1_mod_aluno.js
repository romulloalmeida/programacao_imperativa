// Pratica guiada da aula sincrona

// 1-Criando o objeto Aluno

function aluno(nome, quantidadeFaltas, notas){
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
    // 2-Criando os metodos
    this.calcularMedia = function(){
        return this.notas.reduce((acc,valor) =>{
            return (acc + valor);
        })/this.notas.length;
    };
    this.faltas = function(){
        this.quantidadeFaltas +=1;
    }
}

module.exports = aluno;

// let Pedro = new aluno("Pedro",4,[5,6,7,8]);

// console.log(Pedro.notas);
// console.log(Pedro.calcularMedia());
// Pedro.faltas();
// console.log(Pedro.quantidadeFaltas);