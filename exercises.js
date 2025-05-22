// lógicas de programação - javascript

// 1- Crie uma função que receba uma string e retorne a string invertida.

// lógicas de programação - javascript

// 1- Crie uma função que receba uma string e retorne a string invertida.

function reverseString(string) {
    return string.split('').reverse().join('');
}
// In this updated code, the split('') method is used to convert the string into an array of characters. Then, the reverse() method is applied to reverse the order of the elements in the array. Finally, the join('') method is used to convert the array back into a string.

console.log(reverseString('Teste'));


// 2- retornar apenas números pares

const numbers = [2, 4, 6, 8, 9, 11, 13];

function returnNumbers(numbers) {
    const evenNumbers = []; // Criar um array para armazenar os números pares

    for (const number of numbers) {
        if (number % 2 === 0) { // Verificar se o número é divisível por 2
            evenNumbers.push(number); // Adicionar ao array de números pares
        }
    }
    return evenNumbers; // Retornar o array com números pares
}

console.log(returnNumbers(numbers)); // [2, 4, 6, 8]

// outro método para comprar
const numbers2 = [2, 4, 6, 8, 9, 11, 13];

function returnNumbers(numbers2) {
    return numbers2.filter(number => number % 2 === 0); // Filtrar números pares
}

console.log(returnNumbers(numbers)); // [2, 4, 6, 8]


// filtrar pessoas com mais de 18 anos
// Por que usamos (arr)?
// A função filterAdults é genérica, ou seja, pode funcionar para qualquer array, não apenas o people. Passar arr como argumento permite que a função seja reutilizável com outros arrays,
const people = [
    { name: 'Ana', age: 17 },
    { name: 'Carlos', age: 25 },
    { name: 'João', age: 15 },
    { name: 'Maria', age: 20 },
];

function filterAdults(arr) {
    return arr.filter(person => person.age >= 18);
}

console.log(filterAdults(people));
// [{ name: 'Carlos', age: 25 }, { name: 'Maria', age: 20 }]
