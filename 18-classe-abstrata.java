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
// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    private int forca;

    // Constructor da classe Guerreiro
    public Guerreiro(String nome, int forca) {
        super(nome);
        this.forca = arma;
    }

    // Sobrescrita do método Atacar da classe Abstrata Personagem
    @Override
    public void atacar() {
        System.out.println(nome + " ataca com a " + arma + "!");
    }

    // Sobrescrita do método defender da classe Abstrata Personagem
    @Override
    public void defender() {
        System.out.println(nome + " levanta o escudo para se defender!");
    }
}