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