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



// 2. Implemente uma classe `ContaBancaria` com os métodos `depositar` e `sacar`.

class ContaBancaria {
  constructor(parameters) {
    
  }
}


// 3. Crie uma classe `Pessoa` com um método que exibe "Bem-vindo, [nome]!".




// 4. Implemente uma classe `Calculadora` com métodos para soma, subtração, multiplicação e divisão.




// 5. Crie uma classe `Agenda` para armazenar e exibir contatos.