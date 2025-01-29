/*
==============================
       CLASSES E OBJETOS
==============================


📌 O Que São Classes e Objetos?

Classe: É o "molde" ou "modelo" que define as características (atributos) e comportamentos (métodos) de um objeto.
Objeto: É a **instância** de uma classe, ou seja, algo criado a partir do molde.

💡 Exemplo no mundo real:

- Classe: **Carro** (com atributos como marca, modelo e cor, e métodos como acelerar e frear).
- Objeto: Um **carro específico**, como "Toyota Corolla branco".

==================================================
💡💡  Como Criar Classes no JavaScript 💡💡 
==================================================

📌 1. Declarando uma Classe

Use a palavra-chave class para declarar uma classe:


class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

📌2. Criando Objetos

Use a palavra-chave new para criar uma instância (objeto) de uma classe:

const pessoa1 = new Pessoa("João", 25);
pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 25 anos.



*/


// 1. Crie uma classe chamada `Livro` com atributos `titulo`, `autor` e `ano`. Adicione um método para exibir os detalhes do livro.

class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  detalhes(){
    console.log(`Este é o livro ${this.titulo} que foi escrito por ${this.autor} no ano ${this.ano}`)
  }
}

const autor1 = new Livro("Primeiro Livro", "Autor 1", 2020);
const autor2 = new Livro("Segundo Livro", "Autor 2", 2021);
const autor3 = new Livro("Terceiro Livro", "Autor 3", 2022);

autor1.detalhes()
autor2.detalhes()
autor3.detalhes()

console.log(""); // pular linha



// 2. Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.

class ContaBancaria {
  constructor(saldo) {
    this.saldo = saldo;
  }

  exibirSaldo(){
    console.log(`O saldo da conta é ${this.saldo} reais`)
  }

  depositar(valor) { // recebe o valor
    if (valor < 0) { // se o valor for menor que zero impede de depositar valores negativos
      console.log(`O saldo da conta é ${this.saldo} reais e não é possível depositar valores negativos`)
    } else { //se não for menor que zero
      const novoSaldo = this.saldo + valor; // cria um novo saldo somando o saldo atual com o valor desejado
      this.saldo = novoSaldo; // atualiza o parametro saldo para o novo saldo
      console.log(`O salto atual é: ${this.saldo}`)
    }
  }

  sacar(valor) { // recebe o valor 
    if (valor > this.saldo) { // se o valor for menor que o saldo, impede de realizar a transação
      console.log(`O saldo da conta é ${this.saldo} reais e não é possível sacar o valor desejado de ${valor} reais.`)
    } else { // se não for menor que o saldo
      const novoSaldo = this.saldo - valor; // cria um novo saldo diminuindo o saldo atual com o valor desejado
      this.saldo = novoSaldo; // atualiza o parametro do saldo para o novo saldo
      console.log(`O salto atual é: ${this.saldo}`)
    }
  }
}

const conta1 = new ContaBancaria(100);
conta1.exibirSaldo();
conta1.depositar(100);
conta1.sacar(300);

console.log(""); // pular linha


// 3. Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  exibirNome() {
    console.log(`Bem vindo, ${this.nome}!`)
  }
}

const novoNome = new Pessoa("Zmax");
novoNome.exibirNome();

console.log(""); // pular linha




// 4. Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.

class Calculadora {
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }

  somar() {
    return this.val1 + this.val2;
  }

  subtrair() {
    return this.val1 - this.val2;
  }

  multiplicar() {
    return this.val1 * this.val2;
  }

  dividir() {
    if (this.val2 == 0) {
      console.log(`Não é possível dividir por zero`);
    } else {
    return this.val1 / this.val2;
    }
  }
}

const operacao = new Calculadora(5, 0);
console.log(`O resultado de ${operacao.val1}+${operacao.val2} é ${operacao.somar()}`);
console.log(`O resultado de ${operacao.val1}-${operacao.val2} é ${operacao.subtrair()}`);
console.log(`O resultado de ${operacao.val1}*${operacao.val2} é ${operacao.multiplicar()}`);
console.log(`O resultado de ${operacao.val1}/${operacao.val2} é ${operacao.dividir()}`);


console.log(""); // pular linha



// 5. Crie uma classe `Agenda` para armazenar e exibir contatos.

class Agenda {
  constructor() {
    this.nomes = [];
  }

  adicionar(nome) {
    this.nomes.push(nome);
    console.log(`O nome ${nome} foi adicionado aos contatos`)
  }

  remover(nome) {
    if (this.nomes.includes(nome)) {
      const index = this.nomes.indexOf(nome);
      if (index > -1) {
        this.nomes.splice(index, 1);
      }      
      console.log(`O nome ${nome} consta nos contatos mas foi removido`);
    } else {
      console.log(`O nome ${nome} não consta nos contatos`)
    }
  }

  exibirContatos() {
    console.log(this.nomes)
  }
}

const contato = new Agenda();

contato.adicionar("Zmax");
contato.exibirContatos();

contato.adicionar("Pedro");
contato.exibirContatos();

contato.remover("João");
contato.exibirContatos();

contato.remover("Pedro");
contato.exibirContatos();