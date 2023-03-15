/*
Desafio 5: Atualizando elementos
Temos que criar uma lista de chamada com os seguintes alunos:

João
Ana
Caio
Lara
Marjorie
Leo

Porém, Ana e Caio mudaram de escola e o Rodrigo entrou nessa sala. Nosso desafio será atualizar a lista de chamada, removendo os nomes de Ana e Caio, e inserindo Rodrigo.
*/

const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, 'Rodrigo');
// juntar
// o primeiro parâmetro é o indice do elemento que quero remover, e o segunda parametro é a quantidade de elementos que queremos remover à partir desse indice
// o splice aceita também um terceiro parametro, sendo assim, ao invés de utilizar outro método(push) para adicionar um nome nessa lista, podemos só adicionar no método splice

//obs: o splice altera o array original!
console.log(nomes);