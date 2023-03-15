/*
Desafio 8: Procurando na lista
Crie uma função que recebe como argumento o nome de um aluno.
Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
Para este desafio, usaremos as mesmas listas da aula anterior:

'João', 'Juliana', 'Caio', 'Ana'
10, 8, 7.5, 9
*/

// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
// arrays de duas dimensões
// o primeiro indice é o indice de qual lista queremos acessar, o segundo indice é o elemento dessa lista escolhida

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaDoAluno = listaDeAlunosEMedias[1][indice];
        console.log(`A média de ${aluno} é ${mediaDoAluno}!`)
    } else {
        console.log('Aluno não encontrado!')
    }
};

exibeNomeENota('Ana');