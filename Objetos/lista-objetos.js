// Vamos entender casos em que desejamos salvar um objeto dentro de outro objeto

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

cliente.enderecos.push({
    rua: 'Rua Henrique Gripp Filho',
    numero: 101,
    apartamento: true,
    complemento: 'Apartamento 103'
})
// adicionando um novo endereço no array

console.log(cliente["enderecos"]);


// Filtrando apartamentos
const listaApenasApartamentos = cliente.enderecos.filter((endereco) => {
    return endereco.apartamento === true;
})
// o método filter nos retorna uma nova lista
console.log(listaApenasApartamentos);