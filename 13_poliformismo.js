/*
====================================
            POLIFORMISMO
====================================


📌 Poliformismo ocorre quando o método é igual em outras classes mas cada um tem um comportamento diferente.

- Imagine que você tem **diferentes tipos de sapatos**: tênis, chinelo e sapato social.
    - Todos têm a função "usar", mas cada um é usado de forma diferente:
        - Tênis para correr.
        - Chinelo para casa.
        - Sapato social para eventos formais.

class Sapato {
  usar() {
    console.log("Usando um sapato genérico.");
  }
}

class Tenis extends Sapato {
  usar() {
    console.log("Usando tênis para correr. 🏃‍♂️");
  }
}

class Chinelo extends Sapato {
  usar() {
    console.log("Usando chinelo em casa. 🏠");
  }
}

const meuTenis = new Tenis();
const meuChinelo = new Chinelo();

meuTenis.usar();  // Saída: Usando tênis para correr. 🏃‍♂️
meuChinelo.usar(); // Saída: Usando chinelo em casa. 🏠



==================================================
 💡💡       Sobrescrita de Métodos         💡💡
==================================================

O polimorfismo acontece quando uma subclasse **sobrescreve** um método da superclasse para fornecer um comportamento específico.








==================================================
🔥🔥🔥🔥🔥🔥  Dicas Importantes   🔥🔥🔥🔥🔥🔥
==================================================

🔥 Use a Sobrescrita com Propósito:**
    
    Certifique-se de que a implementação específica de um método em uma subclasse faz sentido no contexto.
    
🔥 Mantenha o Código Flexível:**
    
    O polimorfismo ajuda a reduzir o acoplamento entre partes do sistema, facilitando futuras alterações ou extensões.
    
🔥 Evite Repetição de Código:**
    
    Reutilize ao máximo os métodos da superclasse antes de sobrescrevê-los.


*/






// 1. Crie uma classe `Funcionario` com um método `calcularSalario`. Implemente subclasses como `Desenvolvedor` e `Gerente` que sobrescrevem esse método.

class Funcionario {

    calcularSalario() {
        console.log('O salario será mostrado para cada função.');
    };
};

class Desenvolvedor {

    calcularSalario() {
        console.log('O salario do desenvolvedor é 1000');
    };
};

class Gerente {

    calcularSalario() {
        console.log('O salario do gerente é 1100');
    };
};

const dev = new Desenvolvedor();
const gerente = new Gerente();

dev.calcularSalario();
gerente.calcularSalario();



// 2. Implemente uma classe `Transporte` e subclasses como `Carro`, `Avião` e `Barco`, cada uma com seu método `mover`.








// 3. Crie uma superclasse `Documento` com um método `exibirConteudo`, e subclasses como `PDF` e `Word` que personalizem esse método.









// 4. Implemente um sistema de animais com uma superclasse `Animal` e métodos específicos em subclasses como `Passaro` e `Peixe`.









// 5. Use o polimorfismo para criar uma lista de diferentes formas geométricas (`Quadrado`, `Círculo`, etc.) e calcule suas áreas.