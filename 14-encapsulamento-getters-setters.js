class Persongens {
    // Encapsulando os atributos com #, tornando-os privados.
    #nome;
    #classe;
    #nivel;
    #vida;
    #mana;

    // Método Constructor
    constructor(nome, classe, nivel, vida, mana) {
        this.#nome = nome;
        this.#classe = classe;
        this.#nivel = nivel;
        this.#vida = vida;
        this.#mana = mana;
    }
    // Métodos Getters e Setters
    // Métodos Getter e Setter para o atributo nome
    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    // Métodos Getter e Setter para o atributo classe
    get classe() {
        return this.#classe;
    }
    set classe() {
        this.#classe = classe;
    }
    .
    .
    .
    // Métodos Getter e Setter para o atributo nivel
    get nivel() {
        return this.#nivel;
    }
    set nivel(nivel) {
        this.#nivel = nivel;
    }
    // Métodos Getter e Setter para o atributo vida
    get vida() {
        return this.#vida;
    }
    set vida(vida) {
        this.#vida = vida;
    }
    // Métodos Getter e Setter para o atributo mana
    get mana() {
        return this.#mana;
    }
    set mana(mana) {
        this.#mana = mana;
    }