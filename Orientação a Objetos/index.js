/*
Trabalharemos em um novo projeto, encomendado pelo banco Bytebank, no qual criaremos um sistema que permite o cadastro de clientes e contas-correntes, além das operações bancárias mais comuns. Em uma nova pasta, criaremos o arquivo index.js, que servirá de entrada para nosso sistema.
*/

class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
// criando uma instância da minha classe Cliente, que é um 'molde'
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

console.log('Saldo:', contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log('Saldo atualizado:', contaCorrenteRicardo.saldo);
let valorSacado = 200;
    if (contaCorrenteRicardo.saldo >= valorSacado) {
        contaCorrenteRicardo.saldo -= valorSacado;
    } else {
        console.log('Não possui saldo suficiente!')
    }
console.log('Saldo após valor sacado:', contaCorrenteRicardo.saldo);




console.log(cliente1);
console.log(cliente2);