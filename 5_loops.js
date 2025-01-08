/*
=========================
        LOOPS 
=========================

Os Laços de Repetição são ferramentas poderosas que nos permitem **executar o mesmo bloco de código várias vezes**.

Imagine que você precisa imprimir os números de 1 a 100. Você não quer escrever 100 linhas de código, certo? É aqui que os loops entram em cena, salvando tempo e esforço. Vamos aprender como usar os principais loops no JavaScript: `for`, `while` e `do...while`. 🚀


O Que são Laços de Repetição?**

Laços de repetição, ou **loops**, são usados para executar um bloco de código várias vezes, com base em uma condição.

💡 **Exemplo no mundo real:**

- Enviar uma mensagem para todos os convidados de uma festa.
- Contar quantos itens existem em uma lista de compras.


================================================================
🔥🔥 1 - FOR 🔥🔥

O loop `for` é usado quando você sabe exatamente quantas vezes deseja repetir o código.

for (let i = 0; i < 5; i++) {
  console.log(`Número: ${i}`);
}
// Saída:
// Número: 0
// Número: 1
// Número: 2
// Número: 3
// Número: 4


**Explicação:**

1. `let i = 0`: Inicializa o contador.
2. `i < 5`: Define a condição para continuar o loop.
3. `i++`: Incrementa o valor de `i` a cada iteração.

================================================================

🔥🔥 2. while 🔥🔥

O loop `while` repete o código enquanto uma condição for verdadeira.


let contador = 0;
while (contador < 3) {
  console.log(`Contando: ${contador}`);
  contador++;
}
// Saída:
// Contando: 0
// Contando: 1
// Contando: 2


📌 **Quando usar:**

- Quando você não sabe quantas vezes o loop vai rodar.

================================================================

🔥🔥 3. do...while 🔥🔥

Semelhante ao `while`, mas garante que o código seja executado pelo menos uma vez antes de verificar a condição.


let numero = 5;
do {
  console.log(`Executando...`);
  numero--;
} while (numero > 5);
// Saída:
// Executando...


📌 **Quando usar:**

- Quando você precisa executar o código pelo menos uma vez, independentemente da condição.

================================================================

==================
Controlando o Loop
==================

⚠️ break ⚠️

Interrompe o loop antes de completar todas as iterações.


⚠️ continue ⚠️

Pula para a próxima iteração sem executar o restante do código na atual.



================================
🔥🔥 Dica: 🔥🔥


⚠️⚠️⚠️⚠️ Cuidado com loops infinitos ⚠️⚠️⚠️⚠️
    
Sempre garanta que a condição de saída do loop será atingida:

let i = 0;
while (true) {
    console.log(i);
    i++;
    if (i === 5) break; // Evita loop infinito
}

    
Escolha o loop certo:
    - Use `for` quando souber o número exato de iterações.
    - Use `while` quando depender de uma condição variável.
    - Use `do...while` para garantir uma execução inicial.

================================

*/


// 1. Use um loop `for` para imprimir os números de 1 a 10 no console.

//para indice iniciando em zero, imprima os numeros somando uma unidade sequencialmente para os valores que sejam menores que 10 exclusive (incrementando)
for (let indice = 0; indice < 10; indice++ ) {
  console.log("Número", indice);
  console.log(`Número: ${indice}`); // outra forma de concatenar
}



// 2. Crie uma lista de nomes e use um `for` para exibir cada nome.

let nomes = ["Pedro", "Maria", "Jorge", "Ana"];

//para indice iniciando em 0 e o indice seja menor que a quantidade de nomes na lista, imprima os nomes da lista
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}


// 3. Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let num = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14",]
// para um indice começando em 0 e o indice seja menor que a quantidade de numeros, imprima os valores -SE- o indice for maior ou igual a 10 interroma a verificão
for (let i = 0; i < num.length ; i++) {
  if (i >= 10) { 
    break;
  }
  console.log(i)
}



// 4. Use um `while` para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.

let contagem = 10;

// enquanto o contador for menor ou igual a 10, realize a contagem regressiva. SE a contagem for igual a 0 pare e imprima Lançamento. 
while (contagem <= 10) {
  if (contagem == 0) {
    console.log("Lançamento!")
    break;
  }
  console.log("Contando:", contagem);
  contagem--;  
}



// 5. Escreva um loop que calcula o fatorial de um número (ex: `5! = 5*4*3*2*1`).

let mult = 5*4*3*2*1
console.log("Resultado de 5*4*3*2*1:", mult)


let fatorial = 5;
let resultado = 1; //menor resultado possível que é o !1 = 1.

// para o indice igual ao valor desejado E desde que seja maior ou igual a 1, multiplique o valor atual pelo valor decrementando 1 unidade até 1 (que é a condição).
for (let i = fatorial; i >= 1; i-- ) {
  resultado *= i;
}
console.log("Fatorial de", fatorial,"é: ", resultado)

