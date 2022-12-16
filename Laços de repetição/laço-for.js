/*
Desafio 9: For
Imprima o índice e a lista com os seguintes números:

100, 200, 300, 400, 500, 600
*/

const numeros = [100, 200, 300, 400, 500, 600];

for(let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
};
// para cada indice = 0
// enquanto indice for menor que o tamanho do array
// faça um incremento. ou seja, indice + 1
// a variável indice é quem faz o controle do loop!

// Primeira expressão: é executada apenas uma única vez, ou seja, inicializando uma variável
// Segunda expressão: condição de execução do nosso bloco for
// Terceira expressão: é executada sempre ao final do bloco



const numbers = [2, 5, 7, 9, 11];

let soma = 0;
for (let index = 0; index < numbers.length; index++) {
    soma += numbers[index];
};

console.log(soma);