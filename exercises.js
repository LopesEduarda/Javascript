// curso javascript: utilizando tipos, variáveis e funções

const student = 'maria';
const isApproved = false;

if (isApproved === true) {
    console.log('boas festas!');
} else {
    console.log('ops!');
};


// ausencia de valores: null e undefined

let studantName;
console.log(studantName);
// por padrão é undefined

let studentPhone = null;
console.log(typeof studentPhone);
// retorna, por um erro do js, 'object'. tem outra forma de verificar o tipo de null


// tipagem tinâmica e estática

// A sintaxe do JS não requer que o tipo seja definido de forma explícita quando declaramos variáveis, uma vez que JavaScript é uma linguagem dinamicamente tipada.

let exemplo = 10; // exemplo é do tipo número (Number)
console.log(exemplo); // Saída: 10

exemplo = 'Olá, mundo!'; // agora exemplo é uma string (String)
console.log(exemplo); // Saída: Olá, mundo!

exemplo = true; // exemplo agora é um booleano (Boolean)
console.log(exemplo); // Saída: truez

// Essa característica proporciona flexibilidade ao desenvolvimento, mas também demanda maior atenção na manipulação de dados, já que uma mesma variável pode armazenar diferentes tipos de dados ao longo do programa, o que pode resultar em erros se o programa receber um tipo de dado diferente do esperado.

Number(true); // 1
Number(false); // 0

let valor3 = 0;
console.log(typeof valor3);

const salarioMensal = 3500;
const despesasFixas = 1200;
const despesasVariaveis = 500;
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log('Resultado:', resultado);

let contadorVisitas = 0;
contadorVisitas = contadorVisitas + 1;
contadorVisitas += 1;
contadorVisitas++;

// Para o propósito prático deste exercício, ambas as operações resultam no incremento de contadorVisitas em 1 unidade. Porém, há uma diferença sutil entre elas. A expressão contadorVisitas += 1 é uma operação de atribuição aditiva que incrementa contadorVisitas em 1 unidade, enquanto a operação contadorVisitas++ é um operador de incremento pós-fixo que primeiro retorna o valor original de contadorVisitas e depois o incrementa em 1.

let estoqueProdutoA = 50;

function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log('Quantidade de estoque insuficiente!');
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso! Novo estoque: ${estoqueProdutoA}`);
    }
};

realizarVenda(50);


// operadores lógicos

const notaFinal = 7;
const faltas = 5;

if (notaFinal < 7 || faltas > 4) {
    console.log('reprovado!');
} else {
    console.log('não foi reprovado por falta!');
}
