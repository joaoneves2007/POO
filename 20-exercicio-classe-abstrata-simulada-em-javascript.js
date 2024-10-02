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

    defender() {
        throw new Error('O método defender() deve ser implementado pela classe derivada');
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
        this._armadura = armadura;
    }

    // Getters e Setters específicos
    get armadura() { return this._armadura; }
    set armadura(armadura) { this._armadura = armadura; }

    // Sobrecarga simulada do método atacar
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
    constructor(nome, vida, forca, defesa, nivel, experiencia, magia, habilidadeEspecial, nivelMagia, elemento) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Mago", null, magia, habilidadeEspecial);
        this._nivelMagia = nivelMagia;
        this._elemento = elemento;
    }

    // Getters e Setters específicos
    get nivelMagia() { return this._nivelMagia; }
    set nivelMagia(nivelMagia) { this._nivelMagia = nivelMagia; }

    get elemento() { return this._elemento; }
    set elemento(elemento) { this._elemento = elemento; }

    // Sobrecarga simulada do método atacar
    atacar(tipoAtaque = "com magia") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} lança uma magia de ${this.magia}`);
        } else {
            console.log(`${this.nome} ataca ${tipoAtaque} com magia do elemento ${this.elemento}`);
        }
    }

    defender() {
        console.log(`${this.nome} usa um escudo mágico do elemento ${this.elemento} para se defender`);
    }

    usarMagia() {
        console.log(`${this.nome} lança a magia de nível ${this.nivelMagia}, elemento ${this.elemento}`);
    }

    ganharExperiencia() {
        this.experiencia += 15;
        console.log(`${this.nome} ganhou experiência. Experiência atual: ${this.experiencia}`);
    }

    info() {
        return `${this.nome} é um Mago com magia de elemento ${this.elemento} e nível ${this.nivelMagia}.`;
    }

    invocar() {
        console.log(`${this.nome} invoca uma criatura do elemento ${this.elemento}!`);
    }
}

// Classe derivada "Arqueiro"
class Arqueiro extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, arma, habilidadeEspecial, tipoArco, precisao) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Arqueiro", arma, null, habilidadeEspecial);
        this._tipoArco = tipoArco;
        this._precisao = precisao;
    }

    // Getters e Setters específicos
    get tipoArco() { return this._tipoArco; }
    set tipoArco(tipoArco) { this._tipoArco = tipoArco; }

    get precisao() { return this._precisao; }
    set precisao(precisao) { this._precisao = precisao; }

    // Sobrecarga simulada do método atacar
    atacar(tipoAtaque = "com arco") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} atira uma flecha com o arco ${this.tipoArco}`);
        } else {
            console.log(`${this.nome} atira ${tipoAtaque} com precisão de ${this.precisao}`);
        }
    }

    defender() {
        console.log(`${this.nome} esquiva-se com agilidade para se defender`);
    }

    usarMagia() {
        console.log(`${this.nome} não usa magia!`);
    }

    ganharExperiencia() {
        this.experiencia += 12;
        console.log(`${this.nome} ganhou experiência. Experiência atual: ${this.experiencia}`);
    }

    info() {
        return `${this.nome} é um Arqueiro com arco ${this.tipoArco} e precisão ${this.precisao}.`;
    }

    atirarFlecha() {
        console.log(`${this.nome} dispara uma flecha com alta precisão!`);
    }
}

// Classe derivada "Ladino"
class Ladino extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, arma, habilidadeEspecial, habilidadeFurtiva, agilidade) {
        super(nome, vida, forca, defesa, nivel, experiencia, "Ladino", arma, null, habilidadeEspecial);
        this._habilidadeFurtiva = habilidadeFurtiva;
        this._agilidade = agilidade;
    }

    // Getters e Setters específicos
    get habilidadeFurtiva() { return this._habilidadeFurtiva; }
    set habilidadeFurtiva(habilidadeFurtiva) { this._habilidadeFurtiva = habilidadeFurtiva; }

    get agilidade() { return this._agilidade; }
    set agilidade(agilidade) { this._agilidade = agilidade; }

    // Sobrecarga simulada do método atacar
    atacar(tipoAtaque = "furtivo") {
        if (tipoAtaque === "padrão") {
            console.log(`${this.nome} realiza um ataque furtivo com ${this.arma}`);
        } else {
            console.log(`${this.nome} ataca ${tipoAtaque}) com ${this.arma}`);
            if (this.agilidade > Math.random()) {
                console.log("Ataque acertou!");
            } else {
                console.log("Ataque falhou!");
            }
        }
        this.habilidadeFurtiva--;
        if (this.habilidadeFurtiva <= 0) {
            this.habilidadeFurtiva = 0;
            console.log(`${this.nome} terminou sua habilidade furtiva.`);
        }
        this.atacar("padrão");
    }
}