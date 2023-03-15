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

const chavesDoObjeto = Object.keys(cliente);
// essa função nos retornará um array contendo todas as chaves que já foram inicializadas naquele cliente

console.log(chavesDoObjeto);

if (chavesDoObjeto.includes('enderecos')) {
    console.log('Contém endereço!')
} else if (!chavesDoObjeto.includes('enderecos')) {
    console.log('Não contem endereço!')
}