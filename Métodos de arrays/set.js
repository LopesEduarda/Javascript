// DESAFIO - Removendo duplicatas
// Um professor acidentalmente adicionou nomes repetidos na lista de chamada

const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Remova os nomes repetidos, deixando apenas um de cada

const nomesAtualizados = [...new Set(nomes)];
// os elementos do Set não podem se repetir

console.log(nomes);
console.log(nomesAtualizados);