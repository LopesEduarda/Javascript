/*
Desafio 2: Adicionando elementos
Um professor acidentalmente passou apenas 3 das 4 notas no sistema para um aluno:

10
6
8
Para corrigir, precisamos adicionar a nota 7 e fazer o cálculo da média corretamente.
*/

const notas = [10, 6, 8];
notas.push(7);
// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
// o cálculo é feito somando as notas e dividindo pela quantidade de elementos do array
console.log(media);