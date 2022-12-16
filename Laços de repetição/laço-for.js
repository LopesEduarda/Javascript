/*
Desafio 9: For
Imprima o índice e a lista com os seguintes números:

100, 200, 300, 400, 500, 600
*/

const numeros = [100, 200, 300, 400, 500, 600];

for (let indice = 0; indice < numeros.length; indice++) {
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

/*
Desafio 10: Média
Calcule a média entre as seguintes notas, usando o for:

10
6.5
8
7.5
*/

const notas = [10, 6.5, 8, 7.5];
// soma de todos os elementos + divisão pela quantidade de elementos
let somaDasNotas = 0;
// iniciando uma variável vazia para colocar a soma conforme percorrer o array com o for
for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice];
    //  a somaDasNotas será igual notas na posição indice, ou seja, na primeira vez será 10, na próxima vez que o array
    // for percorrido será 10 + 6.5 e assim até finalizar o loop
};

const mediaDasNotas = somaDasNotas / notas.length;
console.log(`A média das notas é ${mediaDasNotas}!`);



/*
Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro. Começaremos criando mais alguns arrays e uma matriz de 2 dimensões.
*/
const notas1 = [10, 6.5, 8, 7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1, notas2, notas3]

let media = 0

/*
Com a matriz criada, vamos iterar sobre os elementos. Mas não poderemos usar o mesmo for utilizado da última vez, já que agora notasGerais[i] contém um array e não mais um valor numérico. Por isso usaremos outro for para acessar esse array.
*/
for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media += notasGerais[i][j] / notasGerais[i].length;
    }
}

/*
Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, com i=0,i=1,i=2.

O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i porque ela já está definida, e vamos executá-lo enquanto j for menor que notasGerais[i].length. Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais. Assim, o parâmetro [j] vai acessar o elemento dentro array escolhido pelo notasGerais[i], retornando um número que podemos usar na nossa conta.
*/

/*
No entanto, este código retorna uma média de 24. Como tal média é possível se não temos nenhum número maior do que 10? O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas, 8+7+9 edividir pela quantidade de arrays em notasGerais.
*/

const Arrnotas1 = [10, 6.5, 8 ,7.5]
const Arrnotas2 = [9, 6, 6]
const Arrnotas3 = [8.5, 9.5]

const ArrnotasGerais = [notas1,notas2,notas3]

let Arrmedia = 0

for (let i = 0; i < ArrnotasGerais.length; i++) {
  for (let j = 0; j < ArrnotasGerais[i].length; j++) {
    Arrmedia += ArrnotasGerais[i][j]/ArrnotasGerais[i].length;
  }
}
// o primeiro for vai executar 3 vezes, pois tem 3 arrays dentro dele
// o segundo for vai executar iterando pelos valores dos 3 arrays
media = Arrmedia/ArrnotasGerais.length

console.log(media)



/*
Declaramos o valor inicial da variável de controle como o valor da última posição do array (numeros.length - 1); realizamos um decremento (i--) ao invés de um incremento e a condição de execução é i >= 0. Ou seja, nesse caso, a variável i começará do valor 5 e irá até 0.
*/
const numerosArray = [100, 200, 300, 400, 500, 600];

for (let i = numerosArray.length - 1; i >= 0; i--) {
  console.log(numerosArray[i]);
}