// Adicionando funções no objeto
// Podemos ter propriedades que podem guardar funções

const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ["1122233322", "1133344466"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        //o this para acessar uma instância 
        if (valor > this.saldo) {
            console.log('Não possui saldo suficiente!');
        } else {
            // o saldo atual será o saldo menos o valor da compra realizada
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso! Novo saldo: ${this.saldo}.`);
        }
    }
};

cliente.efetuaPagamento(20);
