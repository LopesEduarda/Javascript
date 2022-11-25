/*
Um método é uma função que serve como uma propriedade do array ou de um objeto (que veremos em outro curso). Ele pode realizar tarefas pré-definidas usando os dados do array e dos parâmetros que passamos para eles, como adicionar, remover ou até encontrar elementos.

Existem muitos métodos para conseguir lembrar de todos, mas vamos listar os principais para a aprendizagem. São eles:
*/

/*
concat()

Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado, então precisamos salvar esse resultado em um novo array.
*/
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]


/*
filter()

Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
Não altera o array onde foi chamado, então precisamos salvar esse resultado em um novo array.
*/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


/*
find()

Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
*/
const arr = [5, 12, 8, 130, 44];

const found = arr.find(element => element > 10);

console.log(found);
// expected output: 12


/*
findIndex()

Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
*/

/*
forEach()

Executa uma função em cada elemento do array de forma individual.
Não altera o array original e nem retorna um valor, deixando esse trabalho a cargo da função escolhida.
*/
const arrForEach = ['a', 'b', 'c'];

arrForEach.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"


/*
push()

Adiciona o elemento passado como parâmetro do array, porém na última posição.
Altera o array original com o novo valor.


unshift()

Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos.
Altera o array original com o novo valor.
*/

/*
Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
*/
const arrayReduce = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arrayReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10


/*
reduceRight()

Funciona igual o reduce() porém começa do final do array e segue até o início.
reverse()

Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
slice()

Copia uma parte do array para outro array.
sort()

Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
splice()

Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
*/