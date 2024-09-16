// Classe base Personagem
class Personagem {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.vida = 100; // Adicionando um valor inicial para vida
    }

    atacar() {
        console.log(`${this.nome} realiza um ataque básico!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

// Classe Guerreiro que estende Personagem
class Guerreiro extends Personagem {
    constructor(nome, idade, arma) {
        super(nome, idade); // Chama o construtor da classe base
        this.arma = arma; // Adiciona o atributo arma
    }

    atacar() {
        console.log(`${this.nome} ataca com sua ${this.arma}!`);
    }
}

// Classe Mago que estende Personagem
class Mago extends Personagem {
    constructor(nome, idade, feitiço) {
        super(nome, idade); // Chama o construtor da classe base
        this.feitiço = feitiço; // Adiciona o atributo feitiço
    }

    atacar() {
        console.log(`${this.nome} lança o feitiço ${this.feitiço}!`);
    }
}

// Classe Arqueiro que estende Personagem
class Arqueiro extends Personagem {
    constructor(nome, idade, tipoFlecha) {
        super(nome, idade); // Chama o construtor da classe base
        this.tipoFlecha = tipoFlecha; // Adiciona o atributo tipoFlecha
    }

    atacar() {
        console.log(`${this.nome} dispara uma flecha ${this.tipoFlecha}!`);
    }
}
// Criando instâncias de Guerreiro, Mago e Arqueiro 
const guerreiro = new Guerreiro("Arthur", 100, "espada");
guerreiro.atacar(); // Saida: Arthur ataca com a espadal 
guerreiro.receberDano (20); // Saída: Arthur recebeu 20 de dano. Vida restante: 80

const mago = new Mago("Merlin", 80, "bola de fogo");
mago.atacar(); // Saida: Merlin lança bola de fogol
mago.receberDano(15); // Saida: Merlin recebeu 15 de dano. Vida restante: 65

const arqueiro = new Arqueiro("Legolas", 90, "explosiva");
arqueiro.atacar(); // Saida: Legolas dispara flechas explosiva!
arqueiro.receberDano(10); // Saída: Legolas recebeu 10 de dano. Vida restante: 80