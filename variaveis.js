
/*
=========================
        VARIAVEIS
=========================

Uma variável é um espaço na memória do computador onde você pode **armazenar informações**. Essa informação pode ser:

- Um número 🧮
- Uma palavra ou frase 📜
- Uma lista 📋
- Ou até mesmo algo mais complexo, como objetos e funções!

Declarando uma variável com let
let nome = "João"; // Você pode mudar o valor depois

Declarando uma variável com const
const idade = 25; // O valor não pode ser alterado

Declarando uma variável com var (não recomendado, mas funciona)
var cidade = "São Paulo";


No JavaScript, as variáveis podem armazenar diferentes tipos de dados. Vamos ver os principais:
Número (number):
let idade = 30;

Texto (string):
let nome = "Maria";

Booleano (boolean):
let estaLogado = true; // ou false

Lista (Array):
let frutas = ["Maçã", "Banana", "Laranja"];

Objeto:
let pessoa = {
  nome: "Carlos",
  idade: 28
};


1. var: O "Velho" JavaScript
Declarada antes do ES6, var foi a única maneira de criar variáveis por muito tempo.
Escopo: Global ou local dentro de funções. Ignora blocos (if, for, etc.).
Reatribuição: Pode ser reatribuída e redeclarada no mesmo escopo.

if (true) {
  var nome = "Pedro";
}
console.log(nome); // Funciona, mesmo fora do bloco


⚠️ Problemas com `var`:
⚠️ Como ignora blocos, pode causar comportamentos inesperados, especialmente em loops.

2. let: O "Atualizado"
Introduzido no ES6, é recomendado para variáveis cujo valor pode mudar.
Escopo: Local ao bloco onde foi declarada.
Reatribuição: Pode ser reatribuída, mas não redeclarada no mesmo escopo.

if (true) {
  let idade = 25;
  console.log(idade); // Funciona aqui
}
console.log(idade); // Erro: idade não está definida


3. `const`: O "Imutável"**

- Também introduzido no ES6, é usado para variáveis que **não mudam de valor**.
- **Escopo:** Local ao bloco onde foi declarada.
- **Reatribuição:** Não pode ser reatribuída, mas se for um objeto ou array, seus valores internos podem ser alterados.

const PI = 3.14;

Para objetos e arrays:

const frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // Funciona


### **💡 Quando Usar Cada Um?**

let`:** Quando você precisa de uma variável cujo valor será alterado.
const`:** Para valores constantes ou estruturas que não serão reatribuídas.
⚠️ var`:** Evite, a menos que precise de compatibilidade com códigos antigos. ⚠️

*/

// Exercícios
// 1 - Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".

let nome = "Zmax";
let idade = "34";

console.log('Meu nome é ' + nome + ' e minha idade é '+ idade + ' anos.')

// 2-  Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let preco = 30;
let desconto = 10;
let precoFinal = preco - desconto

console.log('O preço final do produto é: ' + precoFinal + ' reais')


// 3 - Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.

const comidas = ['pizza', 'cachorro quente']; //começa sempre em 0 e é sempre feito com []

console.log(comidas)
console.log(comidas[1])


// 4 - Crie um objeto que represente um livro, com propriedades como `titulo`, `autor` e `ano`. Mostre no console o título e o autor.

const livro = { 
  titulo: 'meu livro', 
  autor: 'Zmax',
  ano: 2025
}; // sempre feito com {} e os objetos declarados diretamente seguido de ":" e ao final com "," - strings com aspas e numeros escritos diretamente
console.log(livro)

// 5 - Declare uma variável `estaLogado` com o valor `false`. Depois, mude o valor para `true` e imprima a mensagem: "Status de login: [valor da variável]".

let estaLogado = true

console.log("Status de login: ", estaLogado)

// 6 - Crie uma variável constante chamada `PI` com o valor `3.14`. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

const PI = 3.14
let raio = 5

console.log(PI*raio**2)



