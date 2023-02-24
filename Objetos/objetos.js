// O que são objetos?
/*
Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.
*/

const objetoPessoa = {
    nome: 'Eduarda',
    idade: 23,
    cpf: '11133322201'
}

console.log(objetoPessoa.cpf, objetoPessoa.idade, objetoPessoa.nome);
// a chave é, por exemplo, o nome/idade/cpf, e as propriedades são os respectivos valores


const cliente = {
    nome: 'Marcos',
    idade: 33,
    cpf: '1110002229333',
    email: 'marcos@dominio.com'
}

console.log(cliente);
console.log(
    `O nome do cliente é ${cliente.nome}, idade do cliente ${cliente.idade}.`
);
console.log(`
    Os 3 primeiros dígitos do cpf do cliente são ${cliente.cpf.substring(0, 3)}
`)
// o método substring me retorna, à partir do índice 0, 3 números 
