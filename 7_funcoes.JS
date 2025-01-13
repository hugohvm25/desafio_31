/*
=========================
       FUNÇÕES
=========================

O Que é uma Função?


Uma **função** é um bloco de código que realiza uma tarefa específica. Você pode pensar nela como um **mini-programa** dentro do seu programa principal.

💡 **Exemplo no mundo real:**

- Uma função para calcular a soma de dois números.
- Uma função para validar um email.

💡 

1. Declaração de Função (Function Declaration):
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3));  // Saída: 5

2. Expressão de Função (Function Expression):
const multiplicar = function(a, b) {
  return a * b;
};

console.log(multiplicar(4, 5));  // Saída: 20
​
3. Arrow Function (ES6):
const dividir = (a, b) => a / b;

console.log(dividir(10, 2));  // Saída: 5
​
🔥  Dica: Use arrow functions para simplificar código curto e direto.



📌  Parâmetros e Retornos

Funções com Parâmetros:
Parâmetros são como "ingredientes" que a função precisa para funcionar.
function cumprimentar(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar("João"));  // Saída: Olá, João!


📌 Funções Sem Retorno:

Nem todas as funções precisam retornar um valor.
function exibirMensagem(mensagem) {
  console.log(mensagem);
}

exibirMensagem("Bem-vindo ao curso!");  // Saída: Bem-vindo ao curso!
​

📌 Funções com Valor Padrão:

Você pode definir valores padrão para os parâmetros.
function somar(a = 0, b = 0) {
  return a + b;
}

console.log(somar(5));  // Saída: 5 (b = 0 por padrão)


🔥🔥 Funções de Alta Ordem 🔥🔥

Funções de alta ordem são aquelas que recebem outras funções como argumentos ou retornam funções.

function calcular(a, b, operacao) {
  return operacao(a, b);
}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(calcular(5, 3, somar));       // Saída: 8
console.log(calcular(5, 3, multiplicar)); // Saída: 15




================================
       🔥🔥 Dica: 🔥🔥
================================

- **Evite Repetição de Código:**
    
    Sempre que perceber que está repetindo código, considere criar uma função.
    
- **Nomeie Funções de Forma Clara:**
    
    O nome da função deve indicar claramente o que ela faz.
    
    ```jsx
    function calcularMedia() {} // Claro
    function calc() {} // Pouco claro
    
    ```
    
- **Use Funções para Modularizar o Código:**
    
    Divida tarefas complexas em várias funções menores e reutilizáveis.

*/


// 1. Crie uma função que calcule o dobro de um número.


function multiplicar(a, b) {
       return a * b;
};

console.log(multiplicar(3, 2));


function calcular(a, b, operacao) {
       return operacao(a, b);
}

const soma = (a, b) => a + b;
const mult = (a, b) => a * b;

console.log(calcular(2, 3, soma))
console.log(calcular(2, 3, mult))


// 2. Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.

function saudacao(nome) {
       return `Bem vindo, ${nome}`;
};

console.log(saudacao("Zmax"));
console.log(saudacao("Pedro"));


// 3. Crie uma função que receba dois números e retorne o maior deles.

function maiorNum(a, b) {
       if (a > b) {
              return a
       } else {
              return b
       }
};

console.log(maiorNum(3, 6));


// 4. Implemente uma função que calcule a média de três números.

function media(a, b ,c) {
       return (a + b + c )/3
};

console.log(media(2 , 3 , 4))



// 5. Crie uma função que receba um array de números e retorne a soma deles.


function somaLista(lista) {
       // uma soma igual a zero
       let soma = 0
       // para um numero dentro de uma lista de numeros, pega o primeiro numero e soma com o próximo e retorna a soma dos numeros da lista
       for (let numero of lista) {
              soma += numero;           
       }
       return soma;  
}

let lista = [1, 2, 3, 4, 5];

console.log(somaLista(lista));


// 6. Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function quantidadeCaracteres(palavra) {
       return palavra.length       
};

let palavra = "Zmax";
console.log(quantidadeCaracteres(palavra));