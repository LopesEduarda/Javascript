const notas = [10, 9.5, 8, 7, 4];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});
// o map vai executar para cada uma das notas e pra cada uma ele irá reescrever seu respectivo valor, adicionando 1

console.log(notasAtualizadas);
// o map não altera o array original, portanto é necessário guardar o novo valor numa nova variável/novo array

for (i = 0; i < notas.length; i++) {
    if (notas[i] < 5) {
        console.log(`Está reprovado!`)
    } else {
        console.log(`Está aprovado!`)
    }
}

// DESAFIO - Padronizando os nomes
// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas

const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomes);
console.log(nomesPadronizados);


const nome = "Alura";
let nomeMaiusculo = " ";

for (let indice = 0; indice < nome.length; indice++) {
    nomeMaiusculo += nome[indice].toUpperCase();
};
// nome maiúscula receberá cada letra de Alura e transformará em maiúsculo
console.log(nomeMaiusculo);


// crio o array
const arrayNums = [1, 2, 3, 4];

// crio a função que irá multiplicar os números por 10
function multiplicaPorDez(num) {
    return num * 10;
};

// utilizo o map para percorrer o array e realizar a multiplicação de cada um dos elementos por 10
// transformando-os num novo array com o resultado
const arrayResultado = arrayNums.map(multiplicaPorDez);
console.log(arrayResultado);