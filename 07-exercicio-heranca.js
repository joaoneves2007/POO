// 07-exercicio-heranca.js

// Classe base Pessoa
class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }

    // Método para mostrar dados da pessoa
    mostrarDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Altura: ${this.altura}, Peso: ${this.peso}`);
    }
}

// Classe Estudante que herda de Pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso, curso) {
        super(nome, idade, altura, peso);
        this.curso = curso;
    }

    // Método para mostrar o curso do estudante
    mostrarCurso() {
        console.log(`Curso: ${this.curso}`);
    }
}

// Classe Funcionario que herda de Pessoa
class Funcionario extends Pessoa {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso);
        this.salario = salario;
    }

    // Método para mostrar o salário do funcionário
    mostrarSalario() {
        console.log(`Salário: ${this.salario}`);
    }
}

// Classe Diretor que herda de Funcionario
class Diretor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso, salario);
    }
}

// Classe Professor que herda de Funcionario
class Professor extends Funcionario {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso, salario);
    }
}

// Criando objetos aluno, diretor e professor
const aluno = new Estudante("João", 20, 1.78, 70, "Programação de Jogos Digitais");
const diretor = new Diretor("Sérgio", 45, 1.65, 65, 3000);
const professor = new Professor("Wanderson", 40, 1.65, 70, 1000);

// Mostrando no console a saída
aluno.mostrarDados(); // Saída: Nome: João, Idade: 20, Altura: 1.78, Peso: 70
aluno.mostrarCurso(); // Saída: Curso: Programação de Jogos Digitais

diretor.mostrarDados(); // Saída: Nome: Sérgio, Idade: 45, Altura: 1.65, Peso: 65
diretor.mostrarSalario(); // Saída: Salário: 3000

professor.mostrarDados(); // Saída: Nome: Wanderson, Idade: 40, Altura: 1.65, Peso: 70
professor.mostrarSalario(); // Saída: Salário: 1001