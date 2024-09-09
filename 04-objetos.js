class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    falar() {
        console.log(´Olá, meu nome é ${this.nome}!´);
    }
}
const pessoa1 = new Pessoa('wanderson', 48, 1.65, 70.0);
pessoa1.falar(); // Chamada do método falar() da classe Pessoa