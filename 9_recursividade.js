/*
=========================
       RECURSÃO
=========================

A recursão ocorre quando uma função se chama a si mesma para resolver um problema maior, 
dividindo-o em partes menores e mais simples. Ela é amplamente utilizada em algoritmos, 
desde cálculos matemáticos complexos até a navegação em estruturas de dados, como árvores.


📌📌 O Que é Recursão? 📌📌

A recursão é uma técnica onde uma função se chama repetidamente até atingir uma condição que interrompa essa chamada.

💡 **Exemplo no mundo real:**

- Uma boneca russa: Cada boneca contém outra menor até que a menor de todas seja encontrada.
- Subir uma escada: Cada passo é uma "chamada" até que você alcance o topo.


💡 
=======================
Estrutura da Recursão
=======================

O caso base é a condição que encerra a recursão. Sem ele, a função entraria em um loop infinito.
Chamada Recursiva:

A chamada onde a função se chama novamente com um valor atualizado, movendo-se em direção ao caso base.

Exemplo:

function somaAte(numero) {
  if (numero === 1) return 1; // Caso base
  return numero + somaAte(numero - 1); // Chamada recursiva
}

console.log(somaAte(5)); // Saída: 15 (5 + 4 + 3 + 2 + 1)

​
=============================================
Como a Recursão Funciona? (Pilha de Chamadas)
=============================================
A recursão utiliza uma estrutura chamada **pilha de chamadas**. Cada vez que a função é chamada, ela é adicionada à pilha. Quando o caso base é atingido, as chamadas começam a ser resolvidas em ordem inversa.

💡 **Visualizando a pilha:**

Para o exemplo `somaAte(5)`:

1. `somaAte(5)` chama `somaAte(4)`.
2. `somaAte(4)` chama `somaAte(3)`.
3. ... até `somaAte(1)`, que retorna `1`.
4. As chamadas começam a ser resolvidas: `1 + 2 + 3 + 4 + 5`.


📌📌📌📌📌📌📌📌📌📌📌
Exemplos Comuns de Recursão
📌📌📌📌📌📌📌📌📌📌📌


🔥🔥 Fatorial de um Número:🔥🔥


function fatorial(n) {
  if (n === 0) return 1; // Caso base
  return n * fatorial(n - 1); // Chamada recursiva
}

console.log(fatorial(5)); // Saída: 120 (5 * 4 * 3 * 2 * 1)



🔥🔥 Sequência de Fibonacci: 🔥🔥


function fibonacci(n) {
  if (n <= 1) return n; // Caso base
  return fibonacci(n - 1) + fibonacci(n - 2); // Chamada recursiva
}

console.log(fibonacci(6)); // Saída: 8 (0, 1, 1, 2, 3, 5, 8)



================================
💡💡💡 Cuidados com a Recursão 💡💡💡
================================

1. **Garanta o Caso Base:**
    
    Sempre defina uma condição para terminar a recursão, ou você pode causar um **estouro de pilha**.
    
2. **Evite Recursões Profundas:**
    
    Se o problema envolver muitas chamadas, prefira usar um loop para evitar problemas de desempenho.
    
3. **Compare com Iteração:**
    
    Nem todo problema precisa de recursão. Compare a eficiência da recursão com um loop antes de escolher.


*/



// 1. Escreva uma função recursiva que conte de `n` até 0.

function ateZero(num) {
    if (num === 0) { //ponto de parada
        console.log("Chegou ao 0!") //fim
        return // interrompe o loop até o ponto de parada
    };
    
    console.log(`Contando: ${num}`);

    ateZero(num - 1); // chamada de recursão
}

ateZero(4);


// 2. Implemente uma função que calcule o fatorial de um número.

let num1 = 5

function fatorial(num1) {
    if (num1 === 0) {        
        return 1
    }; 
    return num1*fatorial(num1-1);
}

console.log(`O fatorial de ${num1} é ${fatorial(num1)}`);


// 3. Crie uma função que some todos os números de um array usando recursão.




// 4. Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.




// 5. Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.




// 6. Crie uma função que liste todos os arquivos de um diretório usando recursão.