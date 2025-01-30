/*
====================================
      ENCAPSULAMENTO E ABSTRAÇÃO
====================================


📌 O Que é Encapsulamento?

**Encapsulamento** é como um cofre: você pode interagir com ele através de um painel de senha, mas não tem acesso direto ao seu conteúdo.

No código, isso significa proteger os atributos de uma classe, permitindo acesso ou alteração apenas por métodos específicos (getters e setters).

💡💡  Exemplo:

class Cofre {
  #senha; // Atributo privado

  constructor(senhaInicial) {
    this.#senha = senhaInicial;
  }

  alterarSenha(novaSenha) {
    this.#senha = novaSenha;
  }

  verificarSenha(senha) {
    return this.#senha === senha;
  }
}

const meuCofre = new Cofre("1234");
console.log(meuCofre.verificarSenha("1234")); // Saída: true
meuCofre.alterarSenha("5678");
console.log(meuCofre.verificarSenha("1234")); // Saída: false


==================================================
 💡💡Como Proteger Atributos no JavaScript? 💡💡
==================================================

Usando Campos Privados (`#`):

Os atributos que começam com `#` são privados e só podem ser acessados dentro da própria classe.



📌  O Que é Abstração?

**Abstração** significa **esconder os detalhes internos** e fornecer apenas as funcionalidades importantes.

Exemplo no mundo real:

- Ao usar um carro, você não precisa entender como o motor funciona; basta girar a chave e dirigir.

class Carro {
  ligarMotor() {
    console.log("Motor ligado! 🔑🚗");
  }

  dirigir() {
    console.log("Dirigindo... 🛣️");
  }
}

const meuCarro = new Carro();
meuCarro.ligarMotor(); // Saída: Motor ligado! 
meuCarro.dirigir();    // Saída: Dirigindo... 

O funcionamento interno do motor está "escondido". O usuário só interage com os métodos ligarMotor e dirigir.


==================================================
🔥🔥🔥🔥🔥🔥  Dicas Importantes   🔥🔥🔥🔥🔥🔥
==================================================

- **Encapsule Sempre que Possível:**
    
    Proteja os dados sensíveis e forneça métodos específicos para acessá-los.
    
- **Mantenha Simples:**
    
    Use a abstração para esconder detalhes irrelevantes e expor apenas o que importa.


*/


// 1. Crie uma classe `ContaBancaria` que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.

class ContaBancaria {
    #saldo // usando # para proteção do parâmetro

    constructor(saldoConta) {      
        this.#saldo = saldoConta;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    depositar(valor) {
        return this.#saldo += valor;
    }

    sacar(valor) {
        return this.#saldo -= valor;
    }
}

const minhaConta = new ContaBancaria(300);
minhaConta.consultarSaldo();
console.log(`O saldo da minha conta é ${minhaConta.consultarSaldo()}`)

minhaConta.depositar(200);
console.log(`O saldo da minha conta é ${minhaConta.consultarSaldo()}`)

minhaConta.sacar(400);
console.log(`O saldo da minha conta é ${minhaConta.consultarSaldo()}`)

console.log(""); // pular linha


// 2. Implemente uma classe `Usuario` que armazena uma senha privada e permite alterar a senha com validação.



console.log(""); // pular linha

// 3. Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.



console.log(""); // pular linha

// 4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.



console.log(""); // pular linha

// 5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.



