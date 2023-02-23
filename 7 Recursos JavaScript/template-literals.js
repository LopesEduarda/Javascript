// Template literals serve basicamente para colocar variáveis em strings
// sintaxe `texto`, ${variavel}

const nome = 'Eduarda';
const idade = 23;

// string com variáveis
const dados = `Meu nome é ${nome} e tenho ${idade} anos!`;
console.log(dados);

// operação mais complexa
const saldo = 1000;

const mensagem = `Seu saldo atual é ${saldo > 0 ? `R${saldo}` : "negativo"}.`;
console.log(mensagem);