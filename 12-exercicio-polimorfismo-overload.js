// 1. Classe base
class Roupa {
    constructor(tipo, cor, tamanho, material, marca, estilo, preco, estoque, desconto, descricao) {
        this.tipo = tipo;
        this.cor = cor;
        this.tamanho = tamanho;
        this.material = material;
        this.marca = marca;
        this.estilo = estilo;
        this.preco = preco;
        this.estoque = estoque;
        this.desconto = desconto;
        this.descricao = descricao;
    }

    // Método para descrever a roupa
    descrever() {
        console.log(`Tipo: ${this.tipo}, Cor: ${this.cor}, Tamanho: ${this.tamanho}, Preço: R$${this.preco}`);
    }

    // Método para calcular o preço com desconto
    calcularPreco() {
        if (this.preco > 0) {
            const precoComDesconto = this.preco - (this.preco * (this.desconto / 100));
            console.log(`Preço com desconto: R$${precoComDesconto.toFixed(2)}`);
        } else {
            console.log('Erro: O preço deve ser um valor positivo.');
        }
    }

    // Sobrecarga para calcular o preço com um desconto adicional
    calcularPreco(descontoAdicional) {
        if (this.preco > 0) {
            const precoComDesconto = this.preco - (this.preco * ((this.desconto + descontoAdicional) / 100));
            console.log(`Preço com desconto total: R$${precoComDesconto.toFixed(2)}`);
        } else {
            console.log('Erro: O preço deve ser um valor positivo.');
        }
    }

    // Método para verificar estoque
    verificarEstoque() {
        console.log(`${this.tipo} - Estoque disponível: ${this.estoque} unidades.`);
    }
}

// 2. Classes derivadas
class Camiseta extends Roupa {
    constructor(cor, tamanho, material, marca, preco, estoque) {
        super('Camiseta', cor, tamanho, material, marca, 'Casual', preco, estoque, 10, 'Camiseta confortável e leve.');
    }
}

class Calça extends Roupa {
    constructor(cor, tamanho, material, marca, preco, estoque) {
        super('Calça', cor, tamanho, material, marca, 'Casual', preco, estoque, 15, 'Calça jeans estilosa.');
    }
}

class Jaqueta extends Roupa {
    constructor(cor, tamanho, material, marca, preco, estoque) {
        super('Jaqueta', cor, tamanho, material, marca, 'Moderna', preco, estoque, 20, 'Jaqueta quente e elegante.');
    }
}

// 3. Instanciando objetos e chamando os métodos
const camiseta = new Camiseta('Azul', 'M', 'Algodão', 'Marca X', 49.90, 100);
camiseta.descrever();
camiseta.calcularPreco();
camiseta.calcularPreco(5); // desconto adicional
camiseta.verificarEstoque();

const calca = new Calça('Preta', 'G', 'Denim', 'Marca Y', 99.90, 50);
calca.descrever();
calca.calcularPreco();
calca.verificarEstoque();

const jaqueta = new Jaqueta('Vermelha', 'P', 'Couro', 'Marca Z', 199.90, 30);
jaqueta.descrever();
jaqueta.calcularPreco();
jaqueta.verificarEstoque();