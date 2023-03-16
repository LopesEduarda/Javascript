/*
Trabalharemos em um novo projeto, encomendado pelo banco Bytebank, no qual criaremos um sistema que permite o cadastro de clientes e contas-correntes, além das operações bancárias mais comuns. Em uma nova pasta, criaremos o arquivo index.js, que servirá de entrada para nosso sistema.
*/

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();
// criando uma instância da minha classe Cliente, que é um 'molde'

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 789456123;

console.log(cliente1);
console.log(cliente2);