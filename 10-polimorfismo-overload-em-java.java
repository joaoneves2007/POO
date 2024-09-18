class Personagem {
    // Atributos
    private Strng nome;
    private int vida;
    // Método Constructor da classe personagem
    public Personagem(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }
    //Sobrecarga do metodo atacar
    public void atacar() {
        System.out.println(nome + " realiza ataque básico!");
    }
    public void atacar(String arma) {
        System.out.println(nome + " ataca com o " + arma + "!");
    }
    public void atacar(String tipoFlecha, boolean comArco) {
        if (comArco) {
            System.out.println(nome + " dispara flechas " + tipoFlecha + " co umm arco!");
        } else {
            System.out.println(nome + " dispara flechas " + tipoFlecha + " sema arco!");
        }
    }
    public void receberDano(int dano) {
        vida -= dano;
        System.out.println(nome + " recebeu " + dano + " de dano. Vida restante: ");
        }
    }