// Pratica guiada

// Exportando o objeto aluno
let aluno = require("./ex1_mod_aluno");

// 3-Criando o objeto literal Curso
let curso = {
    nomeCurso : "CTD",
    notaAprovacao : 7,
    faltasMaximas : 6,
    listaAluno : [],
};

// 4-Criando o método
curso.adicionarAluno = function(nome,falta,nota){
    this.listaAluno.push(new aluno(nome,falta,nota))
};

curso.adicionarAluno("pedro",15,[10,8,6,7]);
curso.adicionarAluno("Ana",5,[3,5,6,7]);
curso.adicionarAluno("joAna",5,[10,5,9,7]);
curso.adicionarAluno("viAna",25,[9,5,6,9]);

// 5-Criando o método
curso.aprovacao = function(nome){
    const aluno = this.listaAluno.find(ele => ele.nome == nome);

    if(aluno == undefined){
        return "Aluno não matriculado";
    }
    if(aluno.quantidadeFaltas > this.faltasMaximas){
        return false;
    }
    if(aluno.quantidadeFaltas = this.faltasMaximas && aluno.calcularMedia() > this.notaAprovacao*1.1){
        return true;
    }
    if(aluno.calcularMedia()>this.notaAprovacao){
        return true;
    }
    return false;
};

// 6-Criando o método
curso.listarAprovacao = function(){
    let lista = [];
    this.listaAluno.forEach(function(aluno){
        lista.push(curso.aprovacao(aluno.nome))
    });
    console.log(lista);
};


console.log(curso.aprovacao("joAna"))
curso.listarAprovacao();