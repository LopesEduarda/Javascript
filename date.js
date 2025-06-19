// manipulação de datas

// 1- criar a data atual
const dataAtual = new Date();
console.log("Data atual PT-BR:", dataAtual.toLocaleDateString('pt-BR'));
console.log("Data atual ISO:", dataAtual.toISOString());
/*
O toISOString()método de Dateinstâncias retorna uma string representando esta data no formato de string de data e hora , um formato simplificado baseado na norma ISO 8601 , que sempre tem 24 ou 27 caracteres ( YYYY-MM-DDTHH:mm:ss.sssZou ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectivamente). O fuso horário é sempre UTC, conforme indicado pelo sufixo Z.
*/
console.log("Data atual:", dataAtual);


// 2- obter partes da data (ano, mês, dia)
const ano = dataAtual.getFullYear();
const mes = dataAtual.getMonth() + 1; // Janeiro é 0
const dia = dataAtual.getDate();
const hora = dataAtual.getHours();
const minuto = dataAtual.getMinutes();
console.log(`Parte da data atual: ${dia}/${mes}/${ano} ${hora}:${minuto}`);

// 3- somar dias a uma data
function adicionarDias(data, dias) {
    const resultado = new Date(data);
    resultado.setDate(resultado.getDate() + dias);
    return resultado;
}
const dataFutura = adicionarDias(dataAtual, 10);
console.log("Data atual + 10 dias:", dataFutura.toLocaleDateString('pt-BR'));


// Desafio: separar e ordenar datas
/*
Crie uma função chamada organizarDatas que:

    Recebe um array de strings com datas no formato 'yyyy-mm-dd'

    Separa as datas em futuras e passadas comparando com a data atual

    Retorna um objeto com:

    futuras: ordenadas da mais próxima para a mais distante

    passadas: ordenadas da mais recente para a mais antiga
*/

const datas = [
    "2025-06-01",
    "2025-06-25",
    "2025-06-10",
    "2025-06-19",
    "2025-05-10",
    "2025-09-25",
  ];


function organizarDatas(datas) {
    const dataAtual = new Date();
    let datasFuturas = [];
    let datasPassadas = [];

    datas.forEach((dataStr) => {
        const data = new Date(dataStr);
        if (data >= dataAtual) {
            datasFuturas.push(data);
        } else {
            datasPassadas.push(data);
        }
    });

    // datas futuras e passadas já são objetos Date, então podemos ordená-las diretamente
    // Ordena as datas futuras da mais próxima para a mais distante
    datasFuturas.sort();
    datasPassadas.sort((a, b) => b - a);

    return {
        futuras: datasFuturas,
        passadas: datasPassadas
    };
}

const resultado = organizarDatas(datas);
console.log("Datas futuras:", resultado.futuras.map(d => d.toLocaleDateString('pt-BR')));
console.log("Datas passadas:", resultado.passadas.map(d => d.toLocaleDateString('pt-BR')));


// Desafio - Contar Dias Úteis Entre Duas Datas

const dataInicio = new Date("2025-06-01");
const dataFim = new Date("2025-06-30");

function contarDiasUteis(dataInicio, dataFim) {
    let diasUteis = 0;
    const dataAtual = new Date(dataInicio);

    while (dataAtual <= dataFim) {
        const diaDaSemana = dataAtual.getDay();
        // Verifica se é um dia útil (segunda a sexta)
        // getDay() retorna 0 para domingo e 6 para sábado
        // Portanto, consideramos dias úteis como aqueles que não são nem sábado (6) nem domingo (0)
        if (diaDaSemana !== 0 && diaDaSemana !== 6) {
            diasUteis++;
        }
        // Avança para o próximo dia
        dataAtual.setDate(dataAtual.getDate() + 1);
    }

    return diasUteis;
}

const diasUteis = contarDiasUteis(dataInicio, dataFim);
console.log(`Dias úteis entre ${dataInicio.toLocaleDateString('pt-BR')} e ${dataFim.toLocaleDateString('pt-BR')}: ${diasUteis}`);

// 4- obter o dia da semana atual
// getDay() retorna 0 para domingo, 1 para segunda, ..., 6 para sábado
// Portanto, se você quiser o dia da semana atual como um número de 0 a 6:
// 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
const day = new Date().getDay();
console.log(`Dia da semana atual: ${day}`); // 0 = Domingo,