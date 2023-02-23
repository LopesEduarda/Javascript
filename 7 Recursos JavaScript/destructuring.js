// Destructuring tem 3 objetivos principais:
// 1- Desestrutura objetos e arrays
// O que é desestruturar? basicamente criar variáveis baseados em dados que estão em objetos e arrays 
// 2- Extrair propriedades/argumentos de funções
// 3- Criar variáveis

const user = {
    nome: 'Eduarda',
    idade: 23,
    email: 'eduarda@gmail.com',
};

// extrair nome e email
const { nome, email } = user;
console.log(nome);
console.log(email);
// dessa forma não precisamos utilizar todo o objeto, somente dados específicos


// extrair itens de arrays
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log("A", a);
console.log("B", b);
console.log("C", c);

// função para exibir dados. também é possível extrair itens de um objeto para argumentos de uma função
function exibeDados({ nome, email }) {
    console.log(nome, email);
};
exibeDados(user);