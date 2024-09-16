// 09-exercicio-polimorfismo-override.js

// Classe base
class Veiculo {
    constructor(marca, modelo, ano, cor, capacidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.capacidade = capacidade;
    }

    iniciar() {
        console.log(`${this.marca} ${this.modelo} está iniciando.`);
    }

    parar() {
        console.log(`${this.marca} ${this.modelo} está parando.`);
    }
}

// Classe derivada Carro
class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor, capacidade, tipoCombustivel, portas) {
        super(marca, modelo, ano, cor, capacidade);
        this.tipoCombustivel = tipoCombustivel; // Atributo específico para Carro
        this.portas = portas; // Atributo específico para Carro
    }

    iniciar() {
        console.log(`${this.marca} ${this.modelo} (Carro) está ligando o motor.`);
    }

    parar() {
        console.log(`${this.marca} ${this.modelo} (Carro) está desligando o motor.`);
    }
}

// Classe derivada Moto
class Moto extends Veiculo {
    constructor(marca, modelo, ano, cor, capacidade, cilindrada, tipo) {
        super(marca, modelo, ano, cor, capacidade);
        this.cilindrada = cilindrada; // Atributo específico para Moto
        this.tipo = tipo; // Atributo específico para Moto
    }

    iniciar() {
        console.log(`${this.marca} ${this.modelo} (Moto) está acionando o motor.`);
    }

    parar() {
        console.log(`${this.marca} ${this.modelo} (Moto) está apagando o motor.`);
    }
}

// Criando instâncias e chamando métodos
const meuCarro = new Carro('Toyota', 'Corolla', 2024, 'Prata', 5, 'Gasolina', 4);
meuCarro.iniciar(); // Saída: Toyota Corolla (Carro) está ligando o motor.
meuCarro.parar();   // Saída: Toyota Corolla (Carro) está desligando o motor.

const minhaMoto = new Moto('Honda', 'CBR500R', 2023, 'Vermelha', 2, 500, 'Esportiva');
minhaMoto.iniciar(); // Saída: Honda CBR500R (Moto) está acionando o motor.
minhaMoto.parar();   // Saída: Honda CBR500R (Moto) está apagando o motor.