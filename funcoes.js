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