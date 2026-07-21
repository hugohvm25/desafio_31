/*
====================================
              HERANÇA
====================================


📌 A herança é um mecanismo que permite que uma classe (subclasse) receba atributos e métodos de outra classe (superclasse).

- **Classe Pai:** Veículo (atributos: rodas, motor; métodos: acelerar, frear).
- **Classe Filha:** Carro (herda atributos e métodos de Veículo, mas pode adicionar características próprias, como ar-condicionado).



==================================================
📌 Criando a Superclasse:
==================================================

A superclasse contém os atributos e métodos básicos que podem ser herdados por outras classes.

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log(`${this.nome} está fazendo um som! 🐾`);
  }
}



==================================================
📌 **Criando a Subclasse:**
==================================================
    
Use a palavra-chave `extends` para criar uma subclasse que herda de uma superclasse.


class Cachorro extends Animal {
  latir() {
    console.log(`${this.nome} está latindo! 🐶`);
  }
}



==================================================
📌 **Chamando o Construtor da Superclasse:**
==================================================
    
Use a palavra-chave `super` para chamar o construtor da superclasse.

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da superclasse
    this.raca = raca;
  }

  latir() {
    console.log(`${this.nome}, da raça ${this.raca}, está latindo! 🐶`);
  }
}



==================================================
 💡💡 Sobrescrita de Métodos (Override)💡💡
==================================================


Uma subclasse pode sobrescrever métodos da superclasse para personalizar seu comportamento.

class Animal {
  fazerSom() {
    console.log("Algum som genérico!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau! 🐱");
  }
}

const meuGato = new Gato();
meuGato.fazerSom(); // Saída: Miau! 🐱





==================================================
🔥🔥🔥🔥🔥🔥  Dicas Importantes   🔥🔥🔥🔥🔥🔥
==================================================

🔥 Use a Herança com Moderação:**
    
    Nem tudo precisa ser resolvido com herança. Às vezes, compor objetos é uma solução mais adequada.

    
🔥 Cuidado com Sobrescrita:**
    
    Certifique-se de que sobrescrever métodos não cause comportamento inesperado.

    
🔥 Aproveite a Reutilização de Código:**
    
    Herança é ótima para evitar duplicação, mas mantenha as classes coesas e com responsabilidades claras.


*/





// 1. Crie uma classe `Veiculo` e duas subclasses: `Carro` e `Moto`. Adicione métodos específicos para cada subclasse.

class Veiculo {

    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    };

    exibir() {
        console.log(`${this.marca} - ${this.tipo}\n`);
    };

};


class Carro extends Veiculo {

    constructor(marca, nome, tipo) {
        super(marca, tipo);
        this.nome = nome;        
    };

    exibirTipo() {
        console.log(`${this.tipo} - ${this.nome}\n`)
    }
    
}

class Moto extends Veiculo {

    constructor(marca, nome, tipo) {
        super(marca, tipo);
        this.nome = nome;        
    };

    exibirTipo() {
        console.log(`${this.tipo} - ${this.nome}\n`)
    }
}

const carro1 = new Carro('Renaut', 'Sandero', 'Passeio');
carro1.exibir();
carro1.exibirTipo();

const carro2 = new Carro('Renaut', 'Boreal', 'SUV');
carro2.exibir();
carro2.exibirTipo();

const moto1 = new Moto('Honda', 'CG', 'urbano')
moto1.exibir();
moto1.exibirTipo();

const moto2 = new Moto('Honda', 'R1', 'esportivo')
moto2.exibir();
moto2.exibirTipo();





// 2. Implemente uma classe `Funcionario` e uma subclasse `Gerente` que adicione um atributo `setor`.








// 3. Crie uma superclasse `Forma` com um método para calcular área, e subclasses como `Quadrado` e `Círculo` que sobrescrevam esse método.








// 4. Escreva uma classe `Animal` e subclasses como `Cachorro` e `Gato`, cada uma com métodos específicos.








// 5. Crie uma classe `Conta` e uma subclasse `ContaPoupanca` que adicione juros ao saldo.