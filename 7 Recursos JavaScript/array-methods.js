// Métodos de Arrays
// exemplos: map, filter, reduce, every

// Map
// Ler um array e modificar seus valores
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(numbers);
console.log(doubleNumbers);

// Filter
// Filtra resultados específicos
const numbers2 = [1, 2, 3, 4, 5, 6];
const filteredNumbers = numbers2.filter((number) => number % 2 === 1, 0);
console.log(filteredNumbers);

// Reduce 
// reduzir os elementos a um só
const numbers3 = [1, 2, 3, 4, 5, 6];
const soma = numbers3.reduce((number, total) => number + total);
console.log(soma);

// Find
// encontrar algum elemento

const numbers4 = [1, 2, 3, 4, 5, 6];
const findNumber = numbers4.find((number) => number === 3);
console.log(findNumber);

// For each
// método utilizado para percorrer cada um dos itens do array
const nomes = ['Eduarda', 'Kael', 'João', 'Ale'];
nomes.forEach((nome) => console.log(nome));
// imprimirá no console cada um dos nomes do array
