// Exercício Conta Bancária

// Definindo a conta

function conta(numero, saldo, nome) {
    this.numero = numero;
    this.saldo = saldo;
    this.nome = nome;
    this.deposito = function(valor){
        this.saldo += valor;
        return console.log(`${this.nome} depositou ${valor} e agora seu saldo é de: ${this.saldo}.`);
    }
    this.saque = function(valor){
        if(valor>this.saldo){
            return console.log(`Fundos Insuficientes!`);
        }
        else{
            this.saldo -= valor;
            return console.log(`${this.nome} sacou ${valor} e agora o seu saldo é de: ${this.saldo}.`)
        }
    }
}

let Pedro = new conta(10,800,"Pedro");
let João = new conta(11,1200,"João");
Pedro.saque(20);
Pedro.deposito(50);
João.deposito(1000);
João.saque(2000);
João.saque(2000);