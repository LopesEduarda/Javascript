const nomes = ["Maria Eduarda", "Jhonnatan", "Aline"];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach((nome) => {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
};

nomes.forEach(imprimeNome);
// é possível criar a função separada e depois chamá-la no forEach

const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
 console.log('a lista', lista[indice]); 
}

const lista2 = [1, 2, 3, 4, 5];
let soma = 0;

for (let elemento of lista2) {
 soma += elemento;
}
console.log(soma) //15

//com forEach
const lista3 = [1, 2, 3, 4, 5];
let soma2 = 0;

lista3.forEach(numero => soma2 += numero);
console.log(soma2) //15