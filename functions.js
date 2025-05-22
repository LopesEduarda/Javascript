/*
1. Arrow Function
Arrow functions são uma forma concisa de escrever funções em JavaScript. Elas são particularmente úteis para callbacks e funções curtas. Uma característica importante é que elas não possuem seu próprio this.
*/

// Função que soma dois números
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8

/*
Explicação
Forma concisa: (a, b) => a + b substitui function(a, b) { return a + b; }.
Sem return explícito: Para funções de uma linha, o valor é retornado automaticamente
*/



/*
2. Function Declaration
Uma function declaration é a forma mais comum de declarar funções. Ela é "elevada" (hoisted) ao topo do escopo, ou seja, pode ser usada antes de ser definida no código.
*/

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 5)); // 20

/*
Explicação
Hoisting: Você pode chamar multiply(4, 5) antes da definição da função.
Boa para funções que precisam ser reutilizadas várias vezes.
*/


/*
3. Function Expression
Uma function expression é quando você armazena uma função em uma variável. Ela não é elevada, ou seja, só pode ser usada depois de ser definida.
*/

const divide = function (a, b) {
    return a / b;
};

console.log(divide(10, 2)); // 5

/*
Explicação
Funções anônimas: Você pode criar funções sem nome.
Não hoisted: Só pode ser chamada após ser definida.
Útil para atribuir funções a variáveis ou passar como argumentos.
*/


/*
4. Função como Método de Objeto
Funções podem ser definidas diretamente dentro de objetos, sendo chamadas de métodos.
*/

const person = {
    name: "Ana",
    greet() {
        return `Olá, meu nome é ${this.name}`;
    },
};

console.log(person.greet()); // "Olá, meu nome é Ana"

/*
Explicação
this: O this dentro de métodos referencia o objeto em que a função está definida.
*/


/*
6. Função com new Function
Uma forma menos comum de criar funções é usar o construtor Function. Não é recomendada por questões de segurança e legibilidade.
*/

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 3)); // 5


const axios = require('axios');

// Base URL da API
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Tarefa 1: Listar nome e e-mail de usuários
async function listUsers() {
  const response = await api.get('/users');

  response.data.forEach((user) => {
    console.log(`Nome: ${user.name}, E-mail: ${user.email}`);
  });
}

// Chamar função para testar
listUsers();
