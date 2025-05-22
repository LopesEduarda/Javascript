// Curso de Fundamentos do JavaScript para Back-end (Arrays)

// calcular média entre as seguintes notas: 10, 6.5, 8, 7.5
const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

const media = notas[0] + notas[1] + notas[2] + notas[3] / notas.length;
console.log('A média é:', media);


for (let nota of notas) {
    somaDasNotas += nota;
};
// para cada nota de notas
// incremente somaDasNotas, que é igual a 0, + o valor de cada uma das notas da iteração do array

console.log('Soma:', somaDasNotas / 4);

