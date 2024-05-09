// Definindo a função construtora para o Retângulo
function Retangulo(base, altura) {
    // Propriedades do Retângulo
    this.base = base;
    this.altura = altura;

    // Método para calcular a área do Retângulo
    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

// Criando um objeto Retângulo
let retangulo = new Retangulo(5, 8);

// Executando o método que calcula a área
let area = retangulo.calcularArea();
console.log("Área do Retângulo:", area);
// Definindo a função construtora para Conta
function Conta(nomeCorrentista, banco, numeroConta, saldo) {
    this.nomeCorrentista = nomeCorrentista;
    this.banco = banco;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
}

// Definindo a função construtora para Conta Corrente com Saldo Especial
function ContaCorrenteSaldoEspecial(nomeCorrentista, banco, numeroConta, saldo, limite) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.limite = limite;
}

// Definindo a função construtora para Conta Poupança com Juros e Data de Vencimento
function ContaPoupancaJuros(nomeCorrentista, banco, numeroConta, saldo, taxaJuros, dataVencimento) {
    Conta.call(this, nomeCorrentista, banco, numeroConta, saldo);
    this.taxaJuros = taxaJuros;
    this.dataVencimento = dataVencimento;
}

// Criando objetos de cada tipo de conta
let contaCorrente = new ContaCorrenteSaldoEspecial("Fulano", "Banco A", "12345", 1000, 500);
let contaPoupanca = new ContaPoupancaJuros("Ciclano", "Banco B", "67890", 2000, 0.05, "01/01/2025");

// Exibindo os dados das contas
console.log("Dados da Conta Corrente:", contaCorrente);
console.log("Dados da Conta Poupança:", contaPoupanca);
