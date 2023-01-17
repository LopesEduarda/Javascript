// DESAFIO - Filtrando por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// o método filter retorna um novo array
// a lógica do filter retorna verdadeiro ou falso
const reprovados = alunos.filter((aluno, indice) => {
    return notas[indice] < 7;
});

console.log(reprovados);