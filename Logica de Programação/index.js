// uma função que conte vogais
function contarVogais(frase) {
    // converte a frase para minusculo
    frase = frase.toLowerCase();
    // cria um array com as vogais
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    // cria uma variavel para contar as vogais
    let contador = 0;
    // percorre a frase
    for (let i = 0; i < frase.length; i++) {
        // verifica se a letra é uma vogal
        if (vogais.includes(frase[i])) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("Aula de Logica de Programacao")); // 13

function contarConsoantes(frase) {
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        const letra = frase[i].toLowerCase();
        console.log('letra', letra);
        // se a letra for uma consoante e não for um espaço
        if (consoantes.includes(letra) && letra !== ' ') {
            console.log('letra dentro do loop', letra);
            contador++;
        }
    }
    return contador;
}

// a lógica é: crio uma variavel com as consoantes, depois percorro a frase e verifico se a letra é uma consoante e não é um espaço, se for, incremento o contador
// e retorno o contador

console.log(contarConsoantes("Aula de Logica de Programacao")); // 20

function contarEspacos(frase) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {
        // verificando se a letra é um espaço
        if (frase[i] === ' ') {
            contador++;
        }
    }
    return contador;
}

console.log(contarEspacos("dois espaços aqui")); // 2


function contagemRegressiva(numero) {
    const contagem = [];

    for (let i = numero; i >= 0; i--) {
        contagem.push(i);
    }
    // a lógica é: crio um array vazio, depois percorro o numero de trás pra frente e vou adicionando os numeros no array
    // e retorno o array
    return contagem;
    // enquanto index for menor que numero (o parâmetro), vou adicionando os numeros no array
    // se o index for igual a 0, adiciono o 0 e retorno o array
    // se o index for menor que 0, faço o decremento do index
    // e retorno o array
}

console.log(contagemRegressiva(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]


function somarNumerosImpares(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        // verificando se o numero é impar
        if (numeros[i] % 2 !== 0) {
            soma += numeros[i];
        }
        // se o número não for divisível por 2, então ele é ímpar
        // e adiciono ele na soma
        // soma += significa uma forma abreviada de escrever soma = soma + numeros[i];
        // e atribuindo o resultado na variável soma
    }
    return soma;
}

console.log(somarNumerosImpares([1, 2, 3, 4, 5])); // 9


function verificarSePalavraEPalindrome(palavra) {
    // remove espaços em branco e converte para minúsculas
    palavra = palavra.replace(/\s/g, '').toLowerCase();
    // verifica se a palavra é igual ao seu reverso
    const ehPalindromo = palavra === palavra.split('').reverse().join('');
    return ehPalindromo;
}
console.log(verificarSePalavraEPalindrome("maria")); // false

function verificarCaracteres(palavra, caracter) {
    let contador = 0;
    // percorre a string
    for (let i = 0; i < palavra.length; i++) {
        // verifica se o caracter está presente na palavra e quantas vezes
        // se a palavra for igual ao caracter, incremento o contador
        // e retorno o contador
        if (palavra[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

console.log(verificarCaracteres("maria", "a")); // 2

function retornaFatorial(numero) {
    // verifica se o número é menor que 0
    if (numero < 0) {
        return "Número inválido";
    }
    // verifica se o número é igual a 0
    else if (numero === 0) {
        return 1;
    }
    // verifica se o número é igual a 1
    else if (numero === 1) {
        return 1;
    }
    // caso contrário, retorna o fatorial do número
    else {
        let fatorial = 1;
        for (let i = numero; i > 1; i--) {
            console.log('i', i); // 5, 4, 3, 2
            // multiplicando o fatorial pelo número
            fatorial *= i;
        }
        return fatorial;
    }
}

console.log(retornaFatorial(5)); // 120


const array = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi'];

function verificarSeElementoEstaNoArray(array, elemento) {
    // percorre o array
    for (let i = 0; i < array.length; i++) {
        // verifica se o elemento está presente no array
        if (array[i] === elemento) {
            console.log('elemento:', elemento); // banana
            console.log('array[i]:', array[i]); // banana
            return true;
        }
    }
    return false;
}

console.log(verificarSeElementoEstaNoArray(array, 'maçã')); // true


// verificar quantas vezes um elemento aparece no array
function contarQuantasVezes(frase, letra) {
    let contador = 0;

    for (let index = 0; index < frase.length; index++) {
        console.log('index', index); // 0, 1, 2, 3, 4, 5
        // index é o índice da letra
        if (frase[index] === letra) {
            contador++;
            console.log(`A letra ${letra} aparece ${contador} vezes na frase ${frase} !`);
        }
    }
    return contador;
}

console.log(contarQuantasVezes("banana", "a"));

function contarVogais(frase) {
    let contador = 0;

    for (let index = 0; index < frase.length; index++) {
        const vogais = ['a', 'e', 'i', 'o', 'u'];
        // verificando se a letra é uma vogal
        if (vogais.includes(frase[index])) {
            // a lógica não é "se há vogais numa frase", mas sim "se os vogais estão presentes na frase", percorrendo cada uma das letras (index)
            console.log('vogais', vogais); // ['a', 'e', 'i', 'o', 'u']
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais("banana")); // 3

function contarConsoantes(frase) {
    let contador = 0;
    const consoantes = 'bcdfghjklmnpqrstvwxyz';
    const quaisSaoAsConsoantes = [];

    for (let index = 0; index < frase.length; index++) {
        // verificando se a letra é uma consoante
        if (consoantes.includes(frase[index].toLowerCase())) {
            contador++;
            quaisSaoAsConsoantes.push(frase[index].toLowerCase());
        }
    }
    return {
        total: contador,
        quais: `As consoantes presentes na palavra são: ${quaisSaoAsConsoantes}`
    };
}

console.log(contarConsoantes("banana")); // 3