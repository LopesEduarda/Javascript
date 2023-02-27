/*
 vamos aprender uma maneira de iterar dentro de um objeto. Vamos supor que temos o nosso objeto cliente que possui diversos campos, e desejamos montar um relatório usando essas propriedades (campos). Neste cenário, assumimos que não sabemos todos os campos.
*/

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

for (let chave in cliente) {
    // console.log(`A chave é: ${chave}`);
    // obtendo os nomes das chaves
    // console.log(cliente[chave]);
    // obtendo os valores das chaves, por exemplo: João, 24... 
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
    // trouxe os campos que não são objetos
}
// Dessa forma, 'chave' será nome, idade, email, telefone, enderecos
// Cada vez que houver uma iteração, será uma chave diferente


