const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
// arrays de duas dimensões
// o primeiro indice é o indice de qual lista queremos acessar, o segundo indice é o elemento dessa lista escolhida

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        // const alunos = listaDeAlunosEMedias[0];
        // const media = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias;
        // significa a mesma coisa que as duas linhas comentadas 10 e 11
        // sintaxe de desestruturação de listas

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`A média de ${aluno} é ${mediaDoAluno}!`)
    } else {
        console.log('Aluno não encontrado!')
    }
};

exibeNomeENota('Ana');


const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];

const numeros = [numerosPares, numerosImpares];
// dessa forma, o resultado é um array com 2 arrays dentro

const numerosDesestruturados = [...numerosPares, ...numerosImpares];
// dessa forma, estamos pedindo pro JS 'abrir' nosso array e formar um grande array com todos os números

console.log(numeros);
console.log(numerosDesestruturados);


const [num1, num2] = [1, 2];
// o número 1 ficará guardado na primeira variável, o número 2 ficará guardado na segunda variável

const [num3, num4, ...outrosNumeros] = [3, 4, 5, 6, 7];
// com os '...', a variável outrosNumeros pegará o restante dos números


const pessoa = {
    nome: 'Eduarda',
    idade: 23
};

function imprimeDados({nome, idade}) {
    console.log(nome, idade)
};

console.log(pessoa);

