// Classes são moldes para objetos
// Criaremos uma instância de um objeto baseado no molde de uma classe
// Sintaxe: class, constructor, herança(extends e super)
// Recursos: propriedades(são os valores, tipo nome, idade e email) e métodos(são as ações dos objetos, como por exemplo enviar email, se inscrever)

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresenta() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos!`);
    }
}

const pessoa1 = new Pessoa("Eduarda", 23);
const pessoa2 = new Pessoa("Marcos", 30);

pessoa1.apresenta();
pessoa2.apresenta();


// Herança
// Já vou aproveitar o nome e o método apresenta para essa classe. por isso o 'extends'
class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        // utilizando o 'super', eu demonstro pro javascript que estou utilizando da classe Pai
        super(nome, idade);
        this.salario = salario;
    }

    apresentaFuncionario() {
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e meu salário é de ${this.salario} por mês.`);
    };
}

const funcionario1 = new Funcionario('Pablo', 23, 2000);
const funcionario2 = new Funcionario('Elise', 32, 3000);
funcionario1.apresentaFuncionario();
funcionario2.apresentaFuncionario();