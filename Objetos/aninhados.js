// Vamos entender casos em que desejamos salvar um objeto dentro de outro objeto

const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ["1122233322", "1133344466"]
};

cliente.endereco = {
    rua: 'Rua albano branco guimarães',
    numero: 1234,
    apartamento: true,
    complemento: 'Apartamento 207'
};

console.log(cliente.endereco.complemento);
console.log(cliente["endereco"]);