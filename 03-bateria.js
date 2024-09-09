class Livro {
    // Construtor para inicializar os atributos da classe
    constructor(titulo, autor, paginas, genero, disponivel) {
      this.titulo = titulo; // Título do livro
      this.autor = autor; // Autor do livro
      this.paginas = paginas; // Número de páginas
      this.genero = genero; // Gênero literário
      this.disponivel = disponivel; // Disponibilidade (se está disponível ou emprestado)
    }
  
    // Método para exibir informações sobre o livro
    exibirInfo() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Páginas: ${this.paginas}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Disponível: ${this.disponivel ? "Sim" : "Não"}`);
    }
  
    // Método para emprestar o livro, alterando a disponibilidade
    emprestar() {
      if (this.disponivel) {
        this.disponivel = false;
        console.log(`O livro "${this.titulo}" foi emprestado.`);
      } else {
        console.log(`O livro "${this.titulo}" já está emprestado.`);
      }
    }
  
    // Método para devolver o livro, tornando-o disponível novamente
    devolver() {
      if (!this.disponivel) {
        this.disponivel = true;
        console.log(`O livro "${this.titulo}" foi devolvido.`);
      } else {
        console.log(`O livro "${this.titulo}" já está disponível.`);
      }
    }
  }
  
  // Exemplo de uso
  const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200, "Fantasia", true);
  livro1.exibirInfo(); // Exibe as informações do livro
  livro1.emprestar(); // Empresta o livro
  livro1.exibirInfo(); // Exibe as informações atualizadas
  livro1.devolver(); // Devolve o livro
  