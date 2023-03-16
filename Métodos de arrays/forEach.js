// um LIS é um subconjunto da lista original onde os números estão em ordem de classificação, do menor para
// o maior, e estão em ordem crescente

const nota1 = 10;
const nota2 = 7;
const nota3 = 8;

const somaNotas = nota1 + nota2 + nota3;
const media = somaNotas / 3;

console.log(media.toFixed(2));

if (media > 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
};


// condições
const frutas = ['banana', 'maçã'];

if (frutas.length < 3) {
    frutas.push('mamão');
} else {
    frutas.push('acerola');
};

console.log(frutas);


const notas = [10, 6.5, 8, 7.5];
let notasSoma = 0;

notas.forEach(function (nota, indice) {
    notasSoma += nota;
    console.log(indice);
});
// estrutura de repetição
// quando uma função é parâmetro de outra, chamamos de callback, "chamar de volta"
// é como se estivéssemos guardando essa função dentro do forEach e ela será chamada em determinados momentos
// mais especificamente para cada elemento do array de notas

const mediaNotas = notasSoma / notas.length;

console.log(`A média das notas é ${mediaNotas}!`);