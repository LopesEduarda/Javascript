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



// Acessando dados com colchetes
console.log(
    `O nome do cliente é ${cliente['nome']}, idade do cliente ${cliente['idade']}.`
);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})
// é útil dessa forma pois aqui estamos supondo que não sabemos o valor de cada chave
// assim, o forEach irá percorrer todo o array e retornar cada um dos valores



// Alterando propriedades de objetos

const novaPessoa = {
    nome: 'Helena',
    profissao: "Agronoma",
};

novaPessoa.telefone = "111934566";
console.log(novaPessoa);
// assim adicionamos uma nova propriedade ao objeto novaPessoa

novaPessoa.nome = 'Helena Ferreira';
console.log(novaPessoa);
// se temos um objeto numa variável const, podemos manipular ele
// o que não podemos é reatribuir algum valor à essa variável



// Remover propriedade
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

console.log(objPersonagem);
//objeto inteiro
delete objPersonagem.aliado;
// objeto sem a propriedade aliado
console.log(objPersonagem);


// também é possível utilizar a notação de colchetes
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

// Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.