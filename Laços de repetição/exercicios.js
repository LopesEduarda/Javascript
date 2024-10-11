// 1- Criar um loop
for (let i = 0; i < 10; i++) {
    // console.log('Criar um loop:', i);
}
// 2- Exibir uma contagem regressiva de 10 a 0
// deixe index ser igual à 10. enquanto index for maior ou igual à zero, realize a contagem regressiva de 10 a 0
for (let i = 10; i >= 0; i--) {
    // console.log('Contagem regressiva:', i);
};

// 3- Exibir os números pares de 1 a 10
/*
Este é um loop for em JavaScript que faz o seguinte:

let i = 2;: Isso inicializa uma variável chamada i com o valor 2. Esta é a variável de controle do loop, e ela começa em 2.

i <= 10;: Esta é a condição de continuação do loop. Enquanto i for menor ou igual a 10, o loop continuará a ser executado. O loop vai parar quando i for maior do que 10.

i += 2: Isso é chamado de atualização da variável de controle. A cada iteração do loop, i é incrementado em 2. Isso significa que a cada passo do loop, i aumenta em 2 unidades.

console.log(i);: Isso é o corpo do loop. Dentro do loop, ele exibe o valor atual de i no console.

Aqui está uma descrição passo a passo do que acontece:

Inicialmente, i é definido como 2.
O loop verifica se a condição i <= 10 é verdadeira. Como 2 é menor ou igual a 10, o loop é executado.
O valor atual de i, que é 2, é impresso no console.
A variável i é então incrementada em 2, tornando-se 4.
O loop volta ao passo 2 para verificar a condição novamente.
O processo se repete até que i seja maior do que 10. Quando i se torna 12, a condição i <= 10 é falsa, e o loop para.
Portanto, este loop for imprime os números pares de 2 a 10 no console, incrementando i em 2 unidades a cada iteração. O resultado será:
2, 4, 6, 8, 10
*/
for (let i = 2; i <= 10; i += 2) {
    // console.log(i);
};

for (let i = 2; i <= 10; i += 2) {
    if (i % 2 === 0) {
        // console.log(i + ' é um número par');
    } else {
        // console.log(i + ' é um número ímpar');
    }
};
  

// 4- Exibir os números primos de 1 a 100
// Números primos são aqueles divisíveis apenas por 1 e por eles mesmos. 

for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
    //   console.log(i);
    }
  }

// 5- Crie um programa que leia um número do usuário e retorne o número em ordem reversa

const userNumber = prompt('Digite um número');

const reversedNum = userNumber => parseFloat(userNumber.toString().split('').reverse().join('')) * Math.sign(userNumber);

console.log(reversedNum);

  