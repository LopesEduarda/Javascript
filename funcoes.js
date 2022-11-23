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

const somando = function(num1, num2) {
    return num1 + num2;
};

console.log(somando(2, 2));
// Aqui criamos uma variável e atribuimos nossa função à essa variável. É importante ser const pra nao corrermos risco de colocar outro valor dentro dela. Um jeito mais curto de escrever a função também.

// A função declarativa pode ser chamada em qualquer parte do código, inclusive antes de sua criação
// A função expressão de função deve ser chamada somente nas linhas abaixo de sua criação
