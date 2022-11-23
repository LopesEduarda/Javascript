/*
Agora, vamos juntar tudo num bloco que é muito importante estudarmos com calma, que são as funções.

A função permite que a gente isole, feche, um bloco de código e podemos dizer exatamente quando queremos que esse bloco de código seja executado.
*/

// Declaração de função
function imprimeTexto(texto) {
    console.log(texto);
};

imprimeTexto('Oie!')
imprimeTexto('Oie de novo!')
// Uma coisa interessante sobre as funções é que elas podem ser criadas e executadas para exibir diversos tipos de texto, e não um só. Código reaproveitável.

function soma() {
    const resultado = 2 + 2;
    return resultado;
};

console.log(soma());
// Sem parâmetro precisamos usar o console.log para imprimir o resultado no terminal.

/*
 tem uma vantagem muito importante de quebrarmos o nosso programa em funções relativamente pequenas, que fica mais fácil para nós lermos. Nós sabemos o que, exatamente, aquele trecho de código está fazendo. Conseguimos reaproveitar o trecho do código e fica bem mais fácil darmos manutenção.
*/

// Os parâmetros servem pra função saber o que deve receber para funcionar
// Boas práticas para funções é passar poucos argumentos. Se necessário, criar várias funções com poucos argumentos pois fica mais fácil, inclusive, de dar manutenção.

function cumprimentaPessoa(pessoa) {
    console.log(`oi, ${pessoa}!`)
}

cumprimentaPessoa('Helena')


function cumprimentar() {
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”



// Outra forma de escrever função em javascript: Expressão de função

const somando = function (num1, num2) {
    return num1 + num2;
};

console.log(somando(2, 2));
// Aqui criamos uma variável e atribuimos nossa função à essa variável. É importante ser const pra nao corrermos risco de colocar outro valor dentro dela. Um jeito mais curto de escrever a função também.

// A função declarativa pode ser chamada em qualquer parte do código, inclusive antes de sua criação
// A função expressão de função deve ser chamada somente nas linhas abaixo de sua criação



// Outra forma de escrever função em javascript: Arrow Function =>

const apresentarArroz = nome => `meu nome é ${nome}`;
// só um parâmetro, sem parenteses e sem chaves.

const novaSoma = (num1, num2) => num1 + num2;
// como tem mais de um parametro, é necessário passar entre parenteses.
// se tiver mais de uma linha de código nessa função, será necessário usar chaves e return.

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return 'somente números de 1 à 9!'
    } else {
        return num1 + num2;
    }
};

console.log(somaNumerosPequenos(9, 9));
// Hoisting: arroz function (executada na ordem em que é criada; não é possível chamar essa função antes de sua inicialização)