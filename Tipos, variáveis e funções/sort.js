/*
O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.

A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode ser garantido e depende da implementação realizada.
*/

/*
o sort() funciona de maneiras diferentes dependendo do que você passar como parâmetro. Se você não passar nada, ele ordena os elementos de acordo com a pontuação de código unicode, ou seja, os números vêm antes das letras minúsculas, que vêm antes das letras maiúsculas.
Se você passar uma função de comparação, ele ordena os elementos de acordo com o que a função retornar. A função de comparação recebe dois parâmetros, que são os elementos a serem comparados. Se a função retornar um número negativo, o primeiro elemento vem antes do segundo; se retornar um número positivo, o segundo elemento vem antes do primeiro; se retornar 0, os elementos são considerados iguais.

1. quando fazemos this.selected é um array de strings de datas (como "2023-10-01"), então o sort() vai ordenar as strings de acordo com a pontuação de código unicode, ou seja, vai ordenar as datas de forma alfabética, o que não é o que queremos.
2. quando fazemos this.selected.sort((a, b) => new Date(a) - new Date(b)), estamos convertendo as strings em objetos Date e subtraindo um do outro. Isso vai nos dar a diferença em milissegundos entre as duas datas, que é um número negativo se a primeira data for anterior à segunda, um número positivo se a primeira data for posterior à segunda, e 0 se as duas datas forem iguais. Assim, o sort() vai funcionar como queremos.

3. quando fazemos o sort() depois do map():
 - o map está retornando objetos Date (resultado do parseISO);
 - Objetos Date não podem ser ordenados diretamente, pois não são strings ou números;
 - o sort() tenta converter os objetos Date em strings, o que não funciona como esperado;
 - a solução é converter os objetos Date em milissegundos usando o método getTime();

Por isso, a ordem correta é:
- primeiro ordenar as strings de data (this.selecteds.sort());
- depois converter para objetos Date com parseISO;
- e por último ordenar os objetos Date com o sort().

Se quiser fazer o sort() diretamente nos objetos Date, você pode fazer assim:
this.selecteds.sort((a, b) => a.getTime() - b.getTime());

Mas é mais eficiente e limpo fazer o sort primeiro nas strings e depois converter para objetos Date, como no exemplo abaixo:
this.selecteds.sort().map(date => parseISO(date));

*/


var fruit = ["cherries", "apples", "bananas"];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ["word", "Word", "1 Word", "2 Words"];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.


// função sort com parametros para praticar
const dates = [
    "2025-06-17",
    "2023-02-01",
    "2024-11-05",
    "2022-09-10",
    "2023-12-31",
    "2025-01-01"
  ];

const sortedDates = dates.sort((a, b) => {
    // Converte as strings de data para objetos Date
    const dateA = new Date(a);
    const dateB = new Date(b);

    // Compara as datas
    return dateA - dateB; // Retorna a diferença em milissegundos
});

console.log(sortedDates);

const ordenaDatas = dates.sort((a, b) => new Date(a) - new Date(b));
console.log(ordenaDatas);

const events = [
    { name: "Evento A", date: "2025-06-17" },
    { name: "Evento B", date: "2023-02-01" },
    { name: "Evento C", date: "2024-11-05" },
    { name: "Evento D", date: "2022-09-10" },
    { name: "Evento E", date: "2023-12-31" },
    { name: "Evento F", date: "2025-01-01" }
  ];

const formatted = events.map(e => {
    const dateObj = new Date(e.date);
    return {
      ...e,
      formattedDate: dateObj.toLocaleDateString('pt-BR')
    }
  });
  console.log(formatted);
