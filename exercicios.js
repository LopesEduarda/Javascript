// 1- Tire o primeiro item do array e imprima o array sem o primeiro item
const array1 = ['Banana', 'Maçã', 'Laranja', 'Mamão', 'Melancia'];
array1.splice(0, 1);
console.log(array1)

// 2- Retorne apenas os nomes que tenham 5 letras
const nomes = ['Lucas', 'Joana', 'Eduarda', 'Luian', 'Fernando'];

// 3- Insira dois novos valores no array: 'amarelo' e 'azul'
const cores = ['Roxo', 'Vermelho', 'Preto', 'Laranja', 'Branco'];

// 4- Junte os dois arrays em um só
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

// 5- Verifique se o nome 'João' está incluso na lista e retorne uma mensagem de sucesso caso esteja e uma de erro caso não esteja
const lista = ['João', 'Ana', 'Felipe', 'Marcela', 'Junior'];




// Meus exercícios

// 1 - Elaborar um programa que leia os preços de produtos de supermercado. 
// E calcule a quantidade total dos produtos comprados. 

const produtos = [
    { Nome: 'Arroz', preco: 25.00 },
    { Nome: 'Feijão', preco: 15.00 },
    { Nome: 'Macarrão', preco: 8.00 },
    { Nome: 'Cenoura', preco: 3.00 },
    { Nome: 'Beterraba', preco: 3.00 },
]

const produtosComprados = [
    { Nome: 'Arroz', Preco: 25.00 },
    { Nome: 'Feijão', Preco: 15.00 }
]

let sum = 0;
for (let i = 0; i < produtosComprados.length; i++) {
    sum += produtosComprados[i].Preco;
}
// valor da variavel soma = 0
// valor da variavel soma = 0 + 25
// valor da variavel soma = 25 + 15

console.log(sum);


let usersArray = [
    { name: 'Alexandre', age: 45 },
    { name: 'Joao', age: 12 },
    { name: 'Marcos', age: 10 }
]

let reduce = usersArray.reduce((valor1, object) => {
    return valor1 + object.age
}, 0)

console.log(reduce);



var users = [
    {
        name: 'Alexandre',
        age: 45
    },
    {
        name: 'Joao',
        age: 12
    },
    {
        name: 'Marcos',
        age: 10
    }
]

var soma = 0;
for (var i = 0; i < users.length; i++) {
    soma += users[i].age;
}

console.log(soma);