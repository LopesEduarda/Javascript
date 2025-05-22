const pessoas = ['Ana', 'Bruno', 'Carlos', 'Daniela', 'Eduardo'];
const idades = [20, 25, 30, 35, 40];

// for (const pessoa of pessoas) {  // Veja o "const" aqui
//     for (const idade of idades) {  // E aqui também
//         console.log(`${pessoa} tem ${idade} anos.`);
//     }
// }


for (let index = 0; index < pessoas.length; index++) {
    console.log(`${pessoas[index]} possui ${idades[index]} anos !`);
}

/*
Explicação
Iniciamos o loop na posição 0 do array.

O loop continua enquanto o índice (index) for menor que o tamanho do array (pessoas.length).

Para cada iteração, acessamos o elemento correspondente nos arrays pessoas, idades, e cores usando o mesmo índice (index).

Dessa forma, pessoas[index] retorna o elemento atual do array pessoas, idades[index] retorna o elemento correspondente do array idades, e cores[index] retorna o elemento do array cores.
*/

const paises = ['Brasil', 'Argentina', 'França', 'Japão'];
const capitais = ['Brasília', 'Buenos Aires', 'Paris', 'Tóquio'];

for (let index = 0; index < paises.length; index++) {
    console.log(`a capital do ${paises[index]} é ${capitais[index]}`)
}

// Objetivo: Imprimir apenas os animais que têm mais de 2 anos. Exemplo: "O Cachorro tem 5 anos."

const animais = ['Gato', 'Cachorro', 'Coelho', 'Papagaio'];
const idadesAnimais = [2, 5, 1, 3];

for (let index = 0; index < idadesAnimais.length; index++) {
    if (idadesAnimais[index] >= 2) {
        console.log(`a idade do ${animais[index]} é ${idadesAnimais[index]}, ou seja, MAIOR ou IGUAL a 2!`);
    } else {
        console.log(`a idade do ${animais[index]} é ${idadesAnimais[index]}, ou seja, MENOR do que 2!`);
    }
}

// Objetivo: Exibir uma frase que combine fruta, cor e sazonalidade, por exemplo: "A Uva é Roxa e está em sua melhor época na Primavera."

const frutas = ['Maçã', 'Banana', 'Uva', 'Laranja'];
const cores = ['Vermelha', 'Amarela', 'Roxa', 'Laranja'];
const sazonalidade = ['Outono', 'Verão', 'Primavera', 'Inverno'];

for (let index = 0; index < frutas.length; index++) {
    console.log(`A ${frutas[index]} é ${cores[index]} e está em sua melhor forma na ${sazonalidade[index]}.`)
}

if (frutas.includes('Banana')) {
    console.log('Existe essa fruta no array!');
} else {
    console.log('Não possui essa fruta no array!');
}



const alunos = ['João', 'Maria', 'Pedro'];
const disciplinas = ['Matemática', 'História', 'Ciências'];
const notas = [
    [8, 6, 9],  // Notas do João
    [5, 7, 8],  // Notas da Maria
    [7, 6, 7]   // Notas do Pedro
];


for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < disciplinas.length; j++) {
        if (notas[i][j] >= 7) {
            console.log(`${alunos[i]} tirou ${notas[i][j]} em ${disciplinas[j]}: Aprovado!`);
        } else {
            console.log(`${alunos[i]} tirou ${notas[i][j]} em ${disciplinas[j]}: Reprovado!`);
        }
    }
}

/*
Explicação:

O primeiro loop (for (let i = 0; i < alunos.length; i++)) percorre cada aluno.
O segundo loop (for (let j = 0; j < disciplinas.length; j++)) percorre cada disciplina e nota para o aluno atual.
A condição notas[i][j] >= 7 verifica se a nota é suficiente para aprovação.
*/

const funcionarios = ['Alice', 'Roberto', 'Carla'];
const projetos = ['Projeto A', 'Projeto B', 'Projeto C'];
const horasTrabalhadas = [
    [42, 35, 40],  // Horas da Alice
    [38, 45, 50],  // Horas do Roberto
    [40, 39, 42]   // Horas da Carla
];

for (let index = 0; index < funcionarios.length; index++) {
    for (let indexProjetos = 0; indexProjetos < projetos.length; indexProjetos++) {
        if (horasTrabalhadas[index][indexProjetos] >= 40) {
            console.log(`O funcionário ${funcionarios[index]} trabalhou ${horasTrabalhadas[index][indexProjetos]} horas no ${projetos[indexProjetos]}: Atingiu a meta!`);
        } else {
            console.log(`O funcionário ${funcionarios[index]} trabalhou ${horasTrabalhadas[index][indexProjetos]} horas no ${projetos[indexProjetos]}: Não atingiu a meta!`);
        }
    }
}

/*
Objetivo: Percorrer cada projeto para o funcionário atual.
Variável indexProjetos: Começa em 0 e vai até o tamanho do array projetos.
O que acontece: Para cada valor de indexProjetos, estamos lidando com um projeto específico do funcionário atual.

Por exemplo:
Se index = 0 (funcionário 'Alice'):
Na 1ª iteração de indexProjetos: indexProjetos = 0 → projetos[0] é 'Projeto A'.
Na 2ª iteração de indexProjetos: projetos[1] é 'Projeto B'.
Na 3ª iteração de indexProjetos: projetos[2] é 'Projeto C'.


Objetivo: Verificar se o funcionário trabalhou pelo menos 40 horas no projeto atual.
Acesso à matriz horasTrabalhadas:
horasTrabalhadas[index][indexProjetos] nos dá a quantidade de horas que o funcionário atual trabalhou no projeto atual.

Por exemplo:
Se index = 0 e indexProjetos = 0, acessamos horasTrabalhadas[0][0], que é 42 (horas de Alice no Projeto A).
Se a condição for verdadeira (ou seja, horas trabalhadas são maiores ou iguais a 40), imprimimos que o funcionário "Atingiu a meta".
Se a condição for falsa, imprimimos que o funcionário "Não atingiu a meta".
*/

/*
Explicação:

Loop externo: Itera por cada funcionário.
Loop interno: Itera por cada projeto e horas trabalhadas para o funcionário atual.

Condição: Verifica se o funcionário atingiu a meta de 40 horas em cada projeto e imprime a mensagem correspondente.
*/
