// 1. Classe base
class Instrumento {
    constructor(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._tipo = tipo;
        this._material = material;
        this._numeroDePecas = numeroDePecas;
        this._peso = peso;
        this._cor = cor;
        this._valor = valor;
        this._frequencia = frequencia;
    }

    // 2. Métodos acessores (getters)
    get marca() { return this._marca; }
    get modelo() { return this._modelo; }
    get ano() { return this._ano; }
    get tipo() { return this._tipo; }
    get material() { return this._material; }
    get numeroDePecas() { return this._numeroDePecas; }
    get peso() { return this._peso; }
    get cor() { return this._cor; }
    get valor() { return this._valor; }
    get frequencia() { return this._frequencia; }

    // 3. Métodos modificadores (setters)
    set marca(marca) { this._marca = marca; }
    set modelo(modelo) { this._modelo = modelo; }
    set ano(ano) { this._ano = ano; }
    set tipo(tipo) { this._tipo = tipo; }
    set material(material) { this._material = material; }
    set numeroDePecas(numeroDePecas) { this._numeroDePecas = numeroDePecas; }
    set peso(peso) { this._peso = peso; }
    set cor(cor) { this._cor = cor; }
    set valor(valor) { this._valor = valor; }
    set frequencia(frequencia) { this._frequencia = frequencia; }

    // 4. Métodos
    tocar() {
        console.log(`${this._modelo} está tocando!`);
    }

    afinar() {
        console.log(`${this._modelo} afinado!`);
    }

    descricao() {
        return `${this._modelo} é um instrumento do tipo ${this._tipo}.`;
    }

    // Sobrecarga de método
    descricao(ano) {
        return `${this._modelo} (${ano}) é um instrumento do tipo ${this._tipo}.`;
    }
}

// 5. Classes derivadas
class Bateria extends Instrumento {
    constructor(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia, tipoDeBateria, numMicrofones) {
        super(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia);
        this._tipoDeBateria = tipoDeBateria;
        this._numMicrofones = numMicrofones;
    }

    // Método específico
    fazerSolo() {
        console.log(`${this._modelo} faz um solo incrível!`);
    }

    // Sobrescrita de método
    tocar() {
        console.log(`${this._modelo} está tocando uma batida de bateria!`);
    }
}

class Tambor extends Instrumento {
    constructor(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia, tamanho, tipoDeSom) {
        super(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia);
        this._tamanho = tamanho;
        this._tipoDeSom = tipoDeSom;
    }

    fazerRitmo() {
        console.log(`${this._modelo} faz um ritmo envolvente!`);
    }

    tocar() {
        console.log(`${this._modelo} está tocando um ritmo de tambor!`);
    }
}

class Caixa extends Instrumento {
    constructor(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia, profundidade, som) {
        super(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia);
        this._profundidade = profundidade;
        this._som = som;
    }

    fazerCompasso() {
        console.log(`${this._modelo} faz um compasso marcante!`);
    }

    tocar() {
        console.log(`${this._modelo} está tocando uma batida de caixa!`);
    }
}

class Pandeiro extends Instrumento {
    constructor(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia, numSinetas, estilo) {
        super(marca, modelo, ano, tipo, material, numeroDePecas, peso, cor, valor, frequencia);
        this._numSinetas = numSinetas;
        this._estilo = estilo;
    }

    fazerBatida() {
        console.log(`${this._modelo} faz uma batida contagiante!`);
    }

    tocar() {
        console.log(`${this._modelo} está tocando um ritmo de pandeiro!`);
    }
}

// 6. Criando instâncias e chamando métodos
const bateria = new Bateria("Yamaha", "Stage Custom", 2020, "Bateria", "Madeira", 5, 25, "Preta", 5000, 440, "Acústica", 4);
const tambor = new Tambor("Pearl", "Decade Maple", 2019, "Tambor", "Madeira", 1, 10, "Vermelho", 200, 440, "12\"", "Agudo");
const caixa = new Caixa("Ludwig", "Supraphonic", 2018, "Caixa", "Metal", 1, 15, "Cromada", 800, 440, "6\"", "Clara");
const pandeiro = new Pandeiro("Meinl", "Sama", 2021, "Pandeiro", "Madeira", 1, 1, "Natural", 150, 440, 8, "Samba");

// Chamando métodos
bateria.tocar();
tambor.fazerRitmo();
caixa.fazerCompasso();
pandeiro.fazerBatida();

// 7. Modificando atributos usando setters
bateria.modelo = "Tour Custom";
tambor.cor = "Azul";
caixa.valor = 900;
pandeiro.numSinetas = 10;

// Mostrando o resultado das modificações
console.log(`Modelo da bateria: ${bateria.modelo}`);
console.log(`Cor do tambor: ${tambor.cor}`);
console.log(`Valor da caixa: ${caixa.valor}`);
console.log(`Número de sinetas do pandeiro: ${pandeiro._numSinetas}`);