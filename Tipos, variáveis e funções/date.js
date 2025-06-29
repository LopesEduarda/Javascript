/*
parseISO — o que é?
parseISO é uma função que:

Converte uma string de data no formato ISO 8601 para um objeto Date.

Geralmente vem da biblioteca date-fns (bem famosa para manipulação de datas no JavaScript moderno).

Por que usar parseISO?
O Date nativo do JS já consegue entender strings ISO (tipo "2025-06-17"), mas em alguns casos ele pode se confundir com fuso horário, formatos incompletos ou strings inválidas.

O parseISO é mais robusto, porque:

Aceita somente strings ISO válidas.

Garante consistência no parsing (evita bugs de fuso ou browser).

Ajuda a evitar os problemas chatos do Date nativo.
*/

import { parseISO } from 'date-fns';

const isoString = "2025-06-17";
const date = parseISO(isoString);

console.log(date.toLocaleDateString('pt-BR'));  // Date object correspondente a 2025-06-17

const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
console.log(`${year}-${month}-${day}`);


const ano = date.getFullYear();
const mes = String(date.getMonth() + 1).padStart(2, '0');
const dia = String(date.getDate()).padStart(2, '0');

// Dataset inicial
const events = [
    { name: "Evento A", date: "2025-06-17" },
    { name: "Evento B", date: "2023-02-01" },
    { name: "Evento C", date: "2024-11-05" },
    { name: "Evento D", date: "2022-09-10" },
    { name: "Evento E", date: "2023-12-31" },
    { name: "Evento F", date: "2027-01-01" }
  ];

  // Ordena primeiro, mas mantém as datas ainda como string ISO:
  const eventosOrdenados = [...events].sort((a, b) => {
    return parseISO(a.date) - parseISO(b.date);
  });

  console.log("EVENTOS ORDENADOS:", eventosOrdenados);

  // Agora sim, separa passados e futuros:
  let eventosPassados = [];
  let eventosFuturos = [];

  eventosOrdenados.forEach((evento) => {
    const dataAtual = new Date();
    const dataEvento = parseISO(evento.date);

    if (dataEvento < dataAtual) {
      eventosPassados.push({
        // ...evento,
        formattedDate: dataEvento.toLocaleDateString('pt-BR')
      });
    } else {
      eventosFuturos.push({
        ...evento,
        formattedDate: dataEvento.toLocaleDateString('pt-BR')
      });
    }
  });

  console.log("EVENTOS PASSADOS:", eventosPassados);
console.log("EVENTOS FUTUROS:", eventosFuturos);

/*
Só transforma a data para toLocaleDateString no final, só para exibir.

Trabalha sempre com a data ISO original para comparar e ordenar.

Faz o parseISO apenas quando precisa transformar para Date.
*/




function numerosImpares() {
  const numerosDe1a100 = Array.from({ length: 100 }, (_, i) => i + 1);

  for (let i = 0; i < numerosDe1a100.length; i++) {
    const numero = numerosDe1a100[i];
    // Verifica se o número é ímpar
    // Um número é ímpar se o resto da divisão por 2 for diferente de 0
    // essa variável numero é o número atual do loop
    // O operador % (módulo) retorna o resto da divisão
    if (numero % 2 !== 0) {
      console.log(numero);
    }
  }
}

const numeros = [1, 2, 3, 4, 5];

while (numeros.length < 6) {
  numeros.push(numeros.length + 1);
  console.log('o número é:', numeros);
}