/*
=========================
        LOOPS 
=========================

Um **array** é uma lista ordenada de valores que podem ser de qualquer tipo: números, strings, objetos, ou até outros arrays.

💡 **Exemplo no mundo real:**

- Uma lista de tarefas.
- Nomes de participantes em um evento.

Como Criar Arrays no JavaScript
1. Arrays Simples:
let numeros = [1, 2, 3, 4, 5];
​
2. Arrays Mistos (diferentes tipos):
let misto = [42, "Texto", true, { chave: "valor" }];
​
3. Array Vazio:
let vazio = [];
​
📌 Dica: Você pode adicionar elementos ao array depois de criá-lo:
vazio.push("Novo Elemento");
console.log(vazio);  // Saída: ["Novo Elemento"]



Métodos e Propriedades de Arrays

Os arrays vêm com vários métodos úteis para facilitar sua manipulação. Aqui estão os mais importantes:
________________________________________________________________________________________________________
Método    |             Descrição             |              Exemplo        |        Resultado
push()    | Adiciona um elemento ao final     | frutas.push("Uva")          |  ["Maçã", "Banana", "Uva"]
pop()     | Remove o último elemento          | frutas.pop()                |  ["Maçã", "Banana"]
shift()   | Remove o primeiro elemento        | frutas.shift()              | ["Banana", "Laranja"]
unshift() | Adiciona um elemento no início    | frutas.unshift("Morango")   | ["Morango", "Maçã"]
length    | Retorna o tamanho do array        | frutas.length               |       3
indexOf() | Retorna o índice de um valor      | frutas.indexOf("Banana")    |       1
slice()   | Retorna parte do array            | frutas.slice(1, 3)          | ["Banana", "Laranja"]
splice()  | Adiciona/Remove elementos         | frutas.splice(1, 1, "Uva")  | ["Maçã", "Uva", "Laranja"]
join()    | Junta os elementos em uma string  | frutas.join(", ")           | "Maçã, Banana, Laranja
________________________________________________________________________________________________________



================================
🔥🔥 Dica: 🔥🔥
================================

Acessar o Último Elemento:

Use array[array.length - 1] para acessar o último elemento de um array.
let numeros = [5, 10, 15];
console.log(numeros[numeros.length - 1]);  // Saída: 15
​
Cuidado com Índices Inválidos:

Acessar um índice que não existe retorna undefined:
let frutas = ["Maçã", "Banana"];
console.log(frutas[5]);  // Saída: undefined



*/


// 1. Crie um array com suas três cores favoritas e adicione uma nova cor no final.

let cores = ["azul", "amarelo", "vermelho"];

console.log(cores)

cores.push("verde")

console.log(cores)



// 2. Use um loop para exibir todos os itens de um array de compras.

let compras = ["caneta", "lapis", "caderno", "borracha"];

for (let i = 0; i <= compras.length; i++) {
        console.log(`Comprei ${compras[i]}`)
}



// 3. Dado um array de números `[10, 20, 30, 40, 50]`, use o método `slice` para extrair os dois últimos números.

let num = [10, 20, 30, 40, 50];

console.log(num.slice(0, 3))



// 4. Crie um array de tarefas e remova a primeira tarefa usando `shift`.

let tarefas = ["cozinhar", "lavar", "estudar"];

console.log(tarefas)

tarefas.shift()
console.log(tarefas)



// 5. Use `splice` para substituir o terceiro item de um array por "Substituído".

let troca = ["um", "dois", "tres", "quatro", "cinco"];

console.log(troca)
// var.splice(posição, quantidade, "dado que irá substituir")
troca.splice(2, 1, "subistituido");
console.log(troca)


  
 // 6. Transforme um array de palavras em uma frase completa usando `join`.

 let palavras = ["Eu", "gosto", "de", "programar"];

 console.log(palavras);
 console.log(palavras.join(" "));
 
