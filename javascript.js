function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return salarioHora;
}

console.log(ganhoPorHora(3000, 176));
/*
O valor por hora do salário seria: 17.045454545454547. Mas, como estamos falando de um valor monetário, esse número deveria ter apenas duas casas decimais. Isto é, o que queremos é arredondar esse resultado para reduzir as casas decimais.

Como estamos utilizando o JavaScript, já existe um método da classe Math que arredonda os números, a Math.round().
*/


// Usando Math.round()

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return Math.round(salarioHora);

}

/*
O valor da resposta foi 17, já resolvemos o problema das várias casas decimais , mas ainda não está muito preciso.

Isso ocorre porque o método Math.round() retorna o valor de um número arredondado para o inteiro mais próximo.
*/


// Formatando o resultado com ajuda do método toFixed()

/*
Como estamos trabalhando com dinheiro é importante saber também os centavos, com o auxílio do método .toFixed() eu consigo controlar o número de casas decimais após a vírgula, de forma mais simples, indicando o número de casas que eu quero como parâmetro.

Como queremos deixar a resposta com duas casas decimais após a vírgula utilizamostoFixed(2), um ponto importante de se observar é que o método .toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123, o valor fica 11.12, já se temos 20.555, o valor fica 20.56. Outro ponto importante de se observar é que seu retorno será uma string representando o número.
*/

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    const total = salarioHora.toFixed(2);

    return total;

};


// Formatando o resultado para Real

/*
No JavaScript temos um método chamado toLocaleString() que converte um número para uma string, já tratando a questão do arredondamento e convertendo para a moeda do país que queremos, no nosso caso, o real, tornando a tarefa do programador muito mais simples.

O método toLocaleString() recebe alguns argumento - um objeto literal com as propriedades -, no meu caso eu utilizei:

style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:

decimal para representar números simples.

currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.

percent para formato percentual.

currency: A moeda para usar na formatação monetária
*/

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return formatado;

};

ganhoPorHora(3000, 176); //'R$ 17,05'

