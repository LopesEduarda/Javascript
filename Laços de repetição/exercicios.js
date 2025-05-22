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


// For - Ideal para quando você sabe quantas vezes deseja repetir um bloco de código.
// While - Útil quando você quer que o código continue repetindo enquanto uma condição for verdadeira.
// For...of e For...in - Loops especiais usados principalmente com arrays e objetos.


// 1. LOOP FOR
for (let index = 0; index < 3; index++) {
    console.log(index);
};

// 2. Loop While
let i = 0;

while (i < 3) {
    console.log(i);
    i++;
};

// 3. Loop For...of (para arrays)
const frutas = ['banana', 'maçã', 'larança', 'mamão'];

for (const fruta of frutas) {
    // console.log('Frutas:', fruta);
};

function frutaNoArray(fruta) {
    if (frutas.includes(fruta)) {
        console.log(`${fruta} está presente no array!`);
    } else {
        console.log(`${fruta} não está presente no array`);
    }
}

frutaNoArray('arroz');
frutaNoArray('banana');

// 4. Loop For...in (para objetos)
const pessoa = { nome: 'Maria', idade: 25 };

for (const chave in pessoa) {
    console.log(chave, pessoa[chave]);
};
// para cada chave do objeto pessoa eu quero que imprima a chave + o objeto com o valor




// exercícios
// 1- Exibir Nomes de Alunos

const alunos = ['João', 'Maria', 'Pedro', 'Ana'];

for (const aluno of alunos) {
    // console.log(aluno);
};

// Modifique o código para exibir: "Aluno: João", "Aluno: Maria", etc.

for (const aluno of alunos) {
    aluno === 'João' || aluno === 'Maria' ? console.log(`Aluno: ${aluno}`) : false;
};


// 2- Somar Números de um Array
// Dado um array de números, some todos os elementos e exiba o total.

const numeros = [2, 4, 6, 8, 10];
let soma = 0;

for (const numero of numeros) {
    soma += numero;
};

console.log("A soma é:", soma);


// 3- Dobrar Números de um Array
// Dado um array de números, crie um novo array onde cada número é o dobro do original.

const numbers = [3, 7, 12, 5, 8];
const numbersX2 = [];
console.log('Numeros originais:', numbers);

for (const numero of numbers) {
    numbersX2.push(numero * 2);
};
console.log('Numeros após o incremento:', numbersX2);


// Nomes com Mais de 4 Letras
// Dado um array de nomes, filtre apenas os nomes que têm mais de 4 letras e, em seguida, coloque esses nomes em letras maiúsculas.

const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eli'];

// Objetivo:
// Primeiro, usando filter e For...of, filtre os nomes que têm mais de 4 letras e coloque-os em um novo array.
// Depois, usando map e For...of, transforme os nomes filtrados em letras maiúsculas e exiba o resultado no console.

const nomes2 = nomes.filter((nome) => {

    for (const nome of nomes) {
        nome.length > 4 ? console.log('o nome possui mais de 4 letras!') : false;
    }

});
