// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, classe, arma, magia, habilidadeEspecial) {
        if (new.target === Personagem) {
            throw new Error('Não é possível instanciar a classe abstrata Personagem diretamente');
        }
        this._nome = nome;    
        this._vida = vida;  
        this._forca = forca; 
        this._defesa = defesa;
        this._nivel = nivel; 
        this._experiencia = experiencia; 
        this._classe = classe; 
        this._arma = arma; 
        this._magia = magia; 
        this._habilidadeEspecial = habilidadeEspecial; 
    }

    // Getters e Setters para encapsulamento
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }

    get vida() { return this._vida; }
    set vida(vida) { this._vida = vida; }

    get forca() { return this._forca; }
    set forca(forca) { this._forca = forca; }

    get defesa() { return this._defesa; }
    set defesa(defesa) { this._defesa = defesa; }

    get nivel() { return this._nivel; }
    set nivel(nivel) { this._nivel = nivel; }

    get experiencia() { return this._experiencia; }
    set experiencia(experiencia) { this._experiencia = experiencia; }

    get classe() { return this._classe; }
    set classe(classe) { this._classe = classe; }

    get arma() { return this._arma; }
    set arma(arma) { this._arma = arma; }

    get magia() { return this._magia; }
    set magia(magia) { this._magia = magia; }

    get habilidadeEspecial() { return this._habilidadeEspecial; }
    set habilidadeEspecial(habilidadeEspecial) { this._habilidadeEspecial = habilidadeEspecial; }

    // Métodos abstratos simulados
    atacar(tipoAtaque = "padrão") {
        throw new Error('O método atacar() deve ser implementado pela classe derivada');
    }

    // Implementação padrão de defender
    defender() {
        console.log(`${this.nome} se defende com suas habilidades.`);
    }

    usarMagia() {
        throw new Error('O método usarMagia() deve ser implementado pela classe derivada');
    }

    ganharExperiencia() {
        throw new Error('O método ganharExperiencia() deve ser implementado pela classe derivada');
    }

    info() {
        throw new Error('O método info() deve ser implementado pela classe derivada');
    }
}

// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, arma, habilidadeEspecial, armadura) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Guerreiro", arma, null, habilidadeEspecial);
        this._armadura = armadura; // Atributo específico do Guerreiro
    }

    // Getters e Setters específicos
    get armadura() { return this._armadura; }
    set armadura(armadura) { this._armadura = armadura; }

    atacar(tipoAtaque = "com espada") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} ataca com a ${this.arma}`);
        } else {
            console.log(`${this.nome} ataca ${tipoAtaque} com a ${this.arma}`);
        }
    }

    defender() {
        console.log(`${this.nome} levanta sua armadura ${this.armadura} para se defender`);
    }

    usarMagia() {
        console.log(`${this.nome} não usa magia!`);
    }

    ganharExperiencia() {
        this.experiencia += 10;
        console.log(`${this.nome} ganhou experiência. Experiência atual: ${this.experiencia}`);
    }

    info() {
        return `${this.nome} é um Guerreiro com armadura ${this.armadura} e arma ${this.arma}.`;
    }

    gritarGuerra() {
        console.log(`${this.nome} grita: Para a glória!`);
    }
}

// Classe derivada "Mago"
class Mago extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, arma, habilidadeEspecial, nivelMagia, elemento) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Mago", arma, habilidadeEspecial, null);
        this._nivelMagia = nivelMagia; // Atributo específico do Mago
        this._elemento = elemento; // Atributo específico do Mago
    }

    // Getters e Setters específicos
    get nivelMagia() { return this._nivelMagia; }
    set nivelMagia(nivelMagia) { this._nivelMagia = nivelMagia; }

    get elemento() { return this._elemento; }
    set elemento(elemento) { this._elemento = elemento; }

    atacar(tipoAtaque = "lançamento de magia") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} lança a magia ${this.arma}`);
        } else {
            console.log(`${this.nome} ataca ${tipoAtaque} com a magia ${this.arma}`);
        }
    }

    defender() {
        console.log(`${this.nome} usa um escudo mágico para se defender`);
    }

    usarMagia() {
        console.log(`${this.nome} invoca magia de ${this.elemento}!`);
    }

    ganharExperiencia() {
        this.experiencia += 10;
        console.log(`${this.nome} ganhou experiência. Experiência atual: ${this.experiencia}`);
    }

    info() {
        return `${this.nome} é um Mago com nível de magia ${this.nivelMagia} e elemento ${this.elemento}.`;
    }

    invocar() {
        console.log(`${this.nome} invoca criaturas místicas!`);
    }
}

// Classe derivada "Arqueiro"
class Arqueiro extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, arma, habilidadeEspecial, tipoArco, precisao) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Arqueiro", arma, null, habilidadeEspecial);
        this._tipoArco = tipoArco; // Atributo específico do Arqueiro
        this._precisao = precisao; // Atributo específico do Arqueiro
    }

    // Getters e Setters específicos
    get tipoArco() { return this._tipoArco; }
    set tipoArco(tipoArco) { this._tipoArco = tipoArco; }

    get precisao() { return this._precisao; }
    set precisao(precisao) { this._precisao = precisao; }

    atacar(tipoAtaque = "tiro de flecha") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} atira uma flecha com o ${this.arma}`);
        } else {
            console.log(`${this.nome} ataca ${tipoAtaque} com o ${this.arma}`);
        }
    }

    defender() {
        console.log(`${this.nome} se esquiva rapidamente para evitar o ataque`);
    }

    usarMagia() {
        console.log(`${this.nome} não usa magia!`);
    }

    ganharExperiencia() {
        this.experiencia += 10;
        console.log(`${this.nome} ganhou experiência. Experiência atual: ${this.experiencia}`);
    }

    info() {
        return `${this.nome} é um Arqueiro com precisão ${this.precisao} e tipo de arco ${this.tipoArco}.`;
    }

    atirarFlecha() {
        console.log(`${this.nome} atira uma flecha com precisão!`);
    }
}

// Classe derivada "Ladino"
class Ladino extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, arma, habilidadeEspecial, habilidadeFurtiva, agilidade) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Ladino", arma, null, habilidadeEspecial);
        this._habilidadeFurtiva = habilidadeFurtiva; // Atributo específico do Ladino
        this._agilidade = agilidade; // Atributo específico do Ladino
    }

    // Getters e Setters específicos
    get habilidadeFurtiva() { return this._habilidadeFurtiva; }
    set habilidadeFurtiva(habilidadeFurtiva) { this._habilidadeFurtiva = habilidadeFurtiva; }

    get agilidade() { return this._agilidade; }
    set agilidade(agilidade) { this._agilidade = agilidade; }

    atacar(tipoAtaque = "furtivo") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} realiza um ataque furtivo com ${this.arma}`);
        } else {
            console.log(`${this.nome} ataca ${tipoAtaque} com ${this.arma}`);
        }
    }

    // Implementação específica do método defender
    defender() {
        console.log(`${this.nome} usa sua habilidade furtiva ${this.habilidadeFurtiva} para desaparecer e evitar o ataque`);
    }

    usarMagia() {
        console.log(`${this.nome} não usa magia!`);
    }

    ganharExperiencia() {
        this.experiencia += 10;
        console.log(`${this.nome} ganhou experiência. Experiência atual: ${this.experiencia}`);
    }

    info() {
        return `${this.nome} é um Ladino com habilidade furtiva ${this.habilidadeFurtiva} e agilidade ${this.agilidade}.`;
    }

    desaparecer() {
        console.log(`${this.nome} desaparece nas sombras!`);
    }
}

// Testando a implementação
try {
    const personagem = new Personagem("Invalido", 0, 0, 0, 0, 0, "", "", "", ""); // Isso vai lançar um erro
} catch (error) {
    console.log(error.message); // "Não é possível instanciar a classe abstrata Personagem diretamente."
}

const guerreiro = new Guerreiro("Thorin", 100, 50, 30, 5, 1000, "Espada", "Força Bruta", "Armadura de Aço");
guerreiro.atacar(); // "Thorin ataca com a Espada"
guerreiro.defender(); // "Thorin levanta sua armadura Armadura de Aço para se defender"
guerreiro.ganharExperiencia(); // "Thorin ganhou experiência. Experiência atual: 1010"
console.log(guerreiro.info()); // "Thorin é um Guerreiro com armadura Armadura de Aço e arma Espada."

const mago = new Mago("Gandalf", 80, 40, 20, 5, 1000, "Bastão", "Sabedoria", 3, "Fogo");
mago.atacar(); // "Gandalf lança a magia Bastão"
mago.defender(); // "Gandalf usa um escudo mágico para se defender"
mago.ganharExperiencia(); // "Gandalf ganhou experiência. Experiência atual: 1010"
console.log(mago.info()); // "Gandalf é um Mago com nível de magia 3 e elemento Fogo."

const arqueiro = new Arqueiro("Legolas", 90, 35, 25, 5, 900, "Arco", "Precisão", "Longo", 95);
arqueiro.atacar(); // "Legolas atira uma flecha com o Arco"
arqueiro.defender(); // "Legolas se esquiva rapidamente para evitar o ataque"
arqueiro.ganharExperiencia(); // "Legolas ganhou experiência. Experiência atual: 910"
console.log(arqueiro.info()); // "Legolas é um Arqueiro com precisão 95 e tipo de arco Longo."

const ladino = new Ladino("Varys", 70, 35, 15, 4, 800, "Adaga", "Subterfúgio", "Furtividade", 85);
ladino.atacar(); // "Varys realiza um ataque furtivo com Adaga"
ladino.defender(); // "Varys usa sua habilidade furtiva Furtividade para desaparecer e evitar o ataque"
ladino.ganharExperiencia(); // "Varys ganhou experiência. Experiência atual: 810"
console.log(ladino.info()); // "Varys é um Ladino com habilidade furtiva Furtividade e agilidade 85."