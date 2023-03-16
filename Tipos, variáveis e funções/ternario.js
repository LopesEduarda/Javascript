/*
O operador ternário é, basicamente, um if. Ele faz uma comparação, só que ele tem uma maneira especial de ser feita, de ser escrita. Então, ele faz a comparação em uma única linha, temos a comparação e as duas respostas do verdadeiro e do falso, deixando bem mais curto o nosso código.
*/

const idadeMinima = 18;
const idadeCliente = 17;

if (idadeCliente >= 18) {
    console.log('Cerveja');
} else {
    console.log('Suco');
}

const resultado = idadeCliente >= idadeMinima ? 'Cerveja' : 'Água';
console.log(resultado);

const opcoes = ['Água', 'Suco', 'Energético'];
let escolhaDoCliente = 'Refrigerante';

const encontrandoItemMenu = opcoes.find(element => element === escolhaDoCliente);

if (encontrandoItemMenu) {
    console.log('Aqui está o item escolhido:', escolhaDoCliente);
} else {
    console.log('Por favor, escolha uma opção disponível no nosso menu!')
};

const result = encontrandoItemMenu ? escolhaDoCliente : 'Escolha uma opção disponível no nosso menu!';
console.log(result);