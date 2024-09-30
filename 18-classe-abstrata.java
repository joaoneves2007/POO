// Classe abstrata "Personagem"
abstract class Personagem {
    protected String nome;

    // Constructor da classe Personagem
    public Personagem(String nome) {
        this.nome = nome;
    }

    // Métodos abstratos
    public abstract void atacar();
    public abstract void defender();
}