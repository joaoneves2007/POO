// Classe base "Personagem" simulado uma classe abstrata
class Personagem {
    constructor(nome) {
        if (this.target === Personagem) {
            throw new Error('Não é possivel instanciar a classe abstrata Personagem diretamente');
        }
        this.nome = nome;    
}

// Método abstrato simulado
atacar() {
    throw new Error('O método atacar() deve ser implementado pela classe derivada');
}

// Método abstrato simulado
    defender() {
        throw new Error('O método defender() deve ser implementado pela classe derivada');
    }
}
// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

    // implementação dos métodos abstratos da classe Personagem
    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}`);
    }

    defender() {
        console.log(`${this.nome} levanta o escudo para se defender`);
    }
}