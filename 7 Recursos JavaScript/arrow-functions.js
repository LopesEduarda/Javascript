// Arrow functions 
// consigo criar funções sem esses 3 elementos:
// 1- a palavra 'function', 2- return, 3- { }
// mas se for uma função maior que uma linha, preciso utilizar as chaves e, automaticamente, o return.


// uma função normal
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));

// arrow function
const somar = (a, b) => a + b;
console.log(somar(2, 5));

//filter números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((num) => {
    return num % 2 === 0;
});
console.log(numerosPares);

