const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ["1122233322", "1133344466"]
};

cliente.enderecos = [{
    rua: 'Rua albano branco guimarães',
    numero: 1234,
    apartamento: true,
    complemento: 'Apartamento 207'
}];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);
// espalhou o array na hora da chamada e imprimirá no console os 2 console.log com telefones diferentes


// enviar encomenda para clientes, nosso objeto de encomendas
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);

