// Classe base Personagens
class Personagem {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
}

    atacar() {
        console.log(`${this.nome} realiza um ataque básico!`);
    }

    receberDano(dano) {
        this.vida -= dano
        console.log(`${this.nome} recebeu ${dano} de dano. vida restante: ${this.vida}`);
    }
}