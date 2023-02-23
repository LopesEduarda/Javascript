// Rest e Spread 
// Rest serve para combinar valores
// Spread serve para espalhar valores, e também copiar objetos
// A sintaxe dos dois é a mesma: ...


// Rest: Permite representar um número indefinido de argumentos na forma de um Array.
//Unir valores, criar um array com todos os números que eu passar
function soma(...numeros) {
    return numeros.reduce((total, numero) => total + numero);
};

console.log(soma(1, 2, 3, 4, 5));
console.log(soma(10, 25, 78));


// O uso das reticencias indica que todos os valores passados por parâmetros serão passados para a função como a variável valores que contem um Array de valores.
function soma(...valores) {
    var total = 0

    for (const item of valores) {
        total += parseInt(item, 10)
    }

    return total
}

console.log(soma(1, 2, 3, 4, 50, 10, 23))
// 93


// Considere que temos uma lista de produtos e seja necessário efetuar a soma de todos os itens passados como argumento da função.

const produtos = [
    { descricao: 'Papel Ofício', quantidade: 10, valor: 10.50 },
    { descricao: 'Lapis preto', quantidade: 20, valor: 0.50 }
]

function total(...produtos) {
    return produtos
        .map(produto => produto.quantidade * produto.valor)
        .reduce((a, b) => a + b, 0)
}

console.log(total(...produtos))




// Spread
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

const allNumbers = [...numeros1, ...numeros2];
console.log(allNumbers);


const user = {
    nome: 'Duda',
    idade: 23
}

const addInfo = {...user, address: 'Espera Feliz'};
console.log(addInfo);

