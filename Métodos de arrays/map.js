const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});
// o map vai executar para cada uma das notas e pra cada uma ele irá reescrever seu respectivo valor, adicionando 1

console.log(notasAtualizadas);
// o map não altera o array original, portanto é necessário guardar o novo valor numa nova variável/novo array



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