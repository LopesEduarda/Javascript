/*
Temos mais um desafio para calcular uma média novamente. Desta vez, utilizaremos uma nota estrutura. Nos últimos vídeos, estudamos o for e, agora, estudaremos o for of.

Desafio 11: Média com for of
Calcule a média entre as seguintes notas usando o for of:

10
6.5
8
7.5
*/
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
};
// para cada nota de notas
// incremente somaDasNotas, que é igual a 0, + o valor de cada uma das notas da iteração do array
console.log(somaDasNotas);