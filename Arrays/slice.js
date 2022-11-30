/*
Desafio 4: Sala dividida
Temos uma sala de aula com 20 estudantes, representados por uma lista de strings:
*/

const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

/*
Nosso desafio é dividi-los em duas salas com a mesma quantidade de pessoas. Isto é, duas listas com 10 estudantes, cada.
*/

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(10, alunos.length);
// significa fatiar, dividir
// nos parâmetros é passado o índice de onde quero que comece a dividir, e onde quero que termine
console.log(sala1);
console.log(sala2);