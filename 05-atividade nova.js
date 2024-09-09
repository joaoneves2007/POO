class Pessoa {
    // Construtor para inicializar os atributos da classe
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura; // altura em metros
        this.peso = peso; // peso em kg
    }

    // Método para falar o nome
    falar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }

    // Método para calcular o IMC (Índice de Massa Corporal)
    calcularIMC() {
        const imc = this.peso / (this.altura * this.altura); // Fórmula do IMC
        console.log(`O IMC de ${this.nome} é: ${imc.toFixed(2)}`);
    }
}

// Criação de três objetos da classe Pessoa
const pessoa1 = new Pessoa('Wanderson', 48, 1.65, 70.0);
const pessoa2 = new Pessoa('Allan', 30, 1.70, 60.0);
const pessoa3 = new Pessoa('João', 25, 1.80, 80.0);

// Chamada dos métodos para cada objeto
pessoa1.falar();
pessoa1.calcularIMC();

pessoa2.falar();
pessoa2.calcularIMC();

pessoa3.falar();
pessoa3.calcularIMC();