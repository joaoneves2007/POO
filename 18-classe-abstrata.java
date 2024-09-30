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
    private String arma;

    // Constructor da classe Guerreiro
    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
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
// Classe derivada "Mago"
class Mago extends Personagem {
    private String magia;

    // Constructor da classe Mago
    public Mago(String nome, String magia) {
        super(nome);
        this.magia = magia;
    }

    // Sobrescrita do método Atacar da classe Abstrata Personagem
    @Override
    public void atacar() {
        System.out.println(nome + " lança a magia " + magia + "!");
    }

    // Sobrescrita do método defender da classe Abstrata Personagem
    @Override
    public void defender() {
        System.out.println(nome + " usa um escudo magico para se defender!");
    }
}
// Classe principal
public class Main {
    public static void main(String[] args) {
        Personagem guerreiro = new Guerreiro("Thorin", "Espada");
        guerreiro.atacar(); // Saída: "Thorin ataca com a Espada"
        guerreiro.defender(); // Saída: "Thorin levanta o escudo para se defender"

        Personagem mago = new Mago("Loki", "Supernova");
        mago.atacar(); // Saída: "Gandalf lança a magia Bola de Fogo"
        mago.defender(); // Saída: "Gandalf usa um escudo mágico para se defender!"
    }
}