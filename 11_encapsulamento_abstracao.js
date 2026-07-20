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

// class ContaBancaria {
//     #saldo // usando # para proteção do parâmetro

//     constructor(saldoConta) {      
//         this.#saldo = saldoConta;
//     }

//     consultarSaldo() {
//         return this.#saldo;
//     }

//     depositar(valor) {
//         return this.#saldo += valor;
//     }

//     sacar(valor) {
//         return this.#saldo -= valor;
//     }
// }

// const minhaConta = new ContaBancaria(300);
// minhaConta.consultarSaldo();
// console.log(`O saldo da minha conta é ${minhaConta.consultarSaldo()}`)

// minhaConta.depositar(200);
// console.log(`O saldo da minha conta é ${minhaConta.consultarSaldo()}`)

// minhaConta.sacar(400);
// console.log(`O saldo da minha conta é ${minhaConta.consultarSaldo()}`)

// console.log(""); // pular linha




// 2. Implemente uma classe `Usuario` que armazena uma senha privada e permite alterar a senha com validação.

// class Usuario {
//   #senha

//   constructor(senhaInicial) {
//     this.#senha = senhaInicial;    
//   }

//   alterarSenha(senhaAtual, novaSenha) {
//     if (senhaAtual === this.#senha) {
//       this.#senha = novaSenha;
//       return 'Senha alterada';
//     } else {
//       return 'senha não alterada';
//     }

//   }

//   verificarSenha(senha) {
//     if (this.#senha === senha) {
//       return 'senha validada';
//     } else {
//       return 'senha incorreta'
//     }  
//   }
// }

// const usuario = new Usuario('1111');

// console.log(usuario.verificarSenha('1111'))

// console.log(usuario.alterarSenha('2222', '1234'))
// console.log(usuario.verificarSenha('2222'));

// console.log(usuario.alterarSenha('1111', '1234'))
// console.log(usuario.verificarSenha('1234'));



// console.log(""); // pular linha



// 3. Crie uma classe `ControleRemoto` com métodos para ligar e desligar a TV, escondendo o estado interno.


// class ControleRemoto {

//   ligarTV() {
//     console.log('ligando tv')
//   }

//   desligarTV() {
//     console.log('desligando tv')
//   }
// }


// const novoControle = new ControleRemoto();
// novoControle.ligarTV();
// novoControle.desligarTV();

// console.log(""); // pular linha




// 4. Escreva uma classe `Cofre` que armazena valores privados e só permite acesso com uma senha correta.

// class Cofre {
//   #senha
//   #saldo

//   constructor(senhaInicial, saldoConta) {
//     this.#senha = senhaInicial;
//     this.#saldo = saldoConta;
//   }

//   validadarSenha(senha) {
//     if (this.#senha === senha) {
//       console.log('Senha correta.\n')
//     } else {
//       console.log('Senha errada.\n')
//     }
//   }

//   alterarSenha(senhaAtual, novaSenha) {
//     if (senhaAtual === this.#senha) {
//       this.#senha = novaSenha;
//       console.log('Senha alterada com sucesso.\n');
//     } else {
//       console.log('A senha não pode ser alterada.\n');
//     }
//   }

//   consultarSaldo(senha) {
//     if (this.#senha === senha) {
//       console.log(`O saldo atual é R$${this.#saldo}.\n`);
//     } else {
//       console.log('O saldo não pode ser exibido porque a senha está incorreta.\n');
//     }
//   }


//   depositar(senha, valor) {
//     if (this.#senha != senha) {
//       console.log('O valor não pode ser depositado porque a senha está incorreta.\n');
//     } else {
//       if (this.#senha === senha && valor <= 0) {
//         console.log('O valor não pode ser depositado porque o valor é negativo.\n');       
//       } else {
//         this.#saldo += valor;
//         console.log(`Foi depositado o valor de R$${valor} e saldo atual é R$${this.#saldo}.\n`);
//       }
//     }
//   }


//   sacar(senha, valor) {
//     if (this.#senha != senha) {
//     console.log('O valor não pode ser sacado porque a senha está incorreta.\n');
//     } else {
//       if (this.#senha === senha && valor > this.#saldo) {
//         console.log('O valor não pode ser sacado.\n');       
//       } else {
//         this.#saldo -= valor;
//         console.log(`Foi sacado o valor de R$${valor} e saldo atual é R$${this.#saldo}.\n`);
//       }
//     }
//   }

// }



// const cofre = new Cofre('111', 100)

// cofre.validadarSenha('111')

// cofre.consultarSaldo('111')
// cofre.consultarSaldo('112')

// cofre.depositar('111', 50)
// cofre.depositar('111', -50)

// cofre.alterarSenha('111', '123')
// cofre.validadarSenha('123')

// cofre.consultarSaldo('123')

// cofre.sacar('111', 50)
// cofre.sacar('123', 50)



// console.log(""); // pular linha





// 5. Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.



