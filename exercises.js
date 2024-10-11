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



// funções
// parâmetros / retornos
// retorno (return)

function exibeInfosEstudante(nome, nota) {
    return `O nome do estudante é ${nome} e a nota dele é ${nota} !`;
};

console.log(exibeInfosEstudante('Maria', 8.5));
exibeInfosEstudante('João', 5.0);


// somar 2 números
function somaDoisNumeros(n1, n2) {
    return n1 + n2;
};

console.log(somaDoisNumeros(2, 4));


// js tem 3 formas de trabalhar com função:
// 1- declaração de função
// 2- expressão de função (abaixo um exemplo), são conhecidas como 'funções anônimas' pq estão dentro de variáveis
// 3- arrow functions

const estudanteReprovou = function(notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
};
// criamos uma função e agora atribuímos o valor dessa função para uma variável
// uma das diferenças é que a função declarada possui algo do js chamado hoisting: que faz com que ao iniciar a execução do arquivo, ele 'puxe' as variáveis pra cima pra conseguir ler elas antes. por isso, o console.log pode estar antes da declaração da função em si que não fará diferença
// nos casos da expressão de função o console.log precisa estar APÓS a declaração da função em si

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(8, 1));

function calculaProduto(a, b = 2, c = 1) {
  return a * b * c;
}

const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);

// arrow functions

const estudanteReprovouNovamente = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
            return true;
        } else {
            return false;
    };
};

const exibeNome = (nome) => nome;
console.log(exibeNome('Fernando'));


// funções: é um bloco de código que é declarado uma vez, mas pode ser executado quantas vezes for necessário