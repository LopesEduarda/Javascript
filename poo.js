// Programação Orientada a Objetos (POO).
/*
O construtor em uma classe serve para inicializar os atributos da classe e configurar o estado inicial do objeto assim que ele é criado. Ele é um método especial que é automaticamente chamado quando você cria uma instância da classe usando o operador new.

Vantagens do Construtor
Inicialização Automática: Permite definir valores iniciais para os atributos do objeto.
Simplificação: Evita a necessidade de configurar os valores manualmente após criar o objeto.
Flexibilidade: Permite passar parâmetros ao criar o objeto, tornando-o mais dinâmico.
*/


/*
A Programação Orientada a Objetos (POO) é amplamente usada no mundo real porque ela reflete como pensamos e organizamos o mundo ao nosso redor: em objetos com propriedades e comportamentos. Aqui estão os principais motivos para usar POO em projetos do mundo real:

A POO permite mapear entidades do mundo real diretamente para o código. Por exemplo:
Um Carro pode ser representado por uma classe com atributos como modelo e cor e métodos como acelerar() ou frear().
Um Usuário pode ter nome, email e ações como fazerLogin().
Isso facilita a compreensão e o desenvolvimento, já que a estrutura do código imita a realidade.

Reutilização de Código (Herança e Polimorfismo)
Herança: Você pode criar uma base genérica e reutilizá-la. Exemplo:
Uma classe Animal pode ter atributos e métodos comuns (comer(), dormir()), enquanto classes específicas (Cachorro, Gato) herdam essas funcionalidades e adicionam comportamentos únicos.
Polimorfismo: Permite que métodos se comportem de forma diferente dependendo do objeto. Exemplo:
Um método fazerSom() pode exibir "au-au" para um cachorro e "miau" para um gato.

Encapsulamento: Segurança e Controle
A POO permite esconder detalhes internos de um objeto e expor apenas o necessário por meio de métodos públicos. Isso ajuda a:
Proteger os dados de alterações indevidas.
Facilitar a manutenção, pois mudanças na lógica interna não afetam o resto do código.
Exemplo: Um objeto ContaBancaria pode ter um método sacar(valor) que valida o saldo antes de alterar os dados. O saldo não pode ser diretamente alterado por algo como conta.saldo = -100

Modularidade: Facilita a Manutenção
Com a POO, o código é dividido em classes pequenas e independentes. Isso facilita:
A manutenção: Você consegue corrigir ou melhorar uma parte sem impactar o resto.
O reaproveitamento: Classes e métodos bem definidos podem ser usados em outros projetos.
Exemplo: Uma classe Usuario que gerencia informações de login pode ser usada tanto no site quanto no app de uma empresa


Exemplo no Mundo Real
Sistema de Gerenciamento Hospitalar:

Classes: Paciente, Medico, Consulta, Prescricao.
Herança: Funcionario como base para Medico, Enfermeiro, etc.
Encapsulamento: O salário de um médico é privado; pode ser acessado ou alterado apenas por métodos específicos.
Polimorfismo: O método calcularPagamento() se comporta de forma diferente para médicos e enfermeiros.

*/

class Veiculo {
    // construtor para inicializar os atributos
    // atributos privados

    #marca;
    #modelo;
    #ano;

    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    // métodos para acessar e modificar os atributos privados

    getMarca() {
        return this.#marca;
    };

    setMarca(marca) {
        this.#marca = marca;
    }

    ligar() {
        console.log(`O veículo ${this.#marca} ${this.#modelo} está ligado.`);
    }

    desligar() {
        console.log(`O veículo ${this.#marca} ${this.modelo} está desligado.`);
    }
};

// criando uma instancia e usando os métodos

const meuCarro = new Veiculo("Ford", "Fiesta", "1999");

console.log(meuCarro.getMarca()); // ford

meuCarro.setMarca("HB20");

console.log(meuCarro.getMarca()); // hb20

meuCarro.ligar();


// HERANÇA: criando uma classe Carro que herda de Veiculo e adicionando mais funcionalidades específicas

class Carro extends Veiculo {
    #combustivel

    constructor(marca, modelo, ano, combustivel) {
        super(marca, modelo, ano); // chama o construtor da classe pai
        this.#combustivel = combustivel;
    }

    abastecer() {
        console.log(`Abastecendo o carro com ${this.#combustivel}.`);
    }

    ligar() {
    console.log(`O carro ${this.getMarca()} está ligado!`);
    }
}

const meuCarro2 = new Carro("Honda", "Civic", 2024, "Gasolina");

meuCarro2.ligar();
meuCarro2.abastecer();

// POLIMORFISMO: criando uma classe moto que também herda de veiculo mas implementa o metodo ligar de forma diferente

class Moto extends Veiculo {
    ligar() {
        console.log(`A moto ${this.getMarca()} está ligada com um ronco potente!`);
    }
}

const minhaMoto = new Moto("Yamaha", "MT-07", 2021);
minhaMoto.ligar();

// Trabalhar com Listas de Objetos

const veiculos = [
  new Carro("Toyota", "Corolla", 2020, "Gasolina"),
  new Moto("Honda", "CB 500", 2021),
  new Veiculo("Volvo", "XC60", 2022),
];

veiculos.forEach((veiculo) => {
    veiculo.ligar();
});
