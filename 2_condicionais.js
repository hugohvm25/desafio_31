/*
=========================
       CONDICIONAIS
=========================

As estruturas condicionais permitem que o código **execute diferentes blocos de instruções** dependendo de condições específicas.

No JavaScript, as principais formas de tomar decisões são:

1. if e else: Executa um bloco de código se uma condição for verdadeira, e outro bloco caso contrário.
2. else if: Permite testar várias condições.
3. switch: Ideal para quando você precisa verificar muitas possibilidades de forma mais limpa.


## if, else if, e else

Vamos começar com a estrutura mais básica:
let hora = 10;

if (hora < 12) {
  console.log("Bom dia! ☀️");
} else if (hora < 18) {
  console.log("Boa tarde! 🌤️");
} else {
  console.log("Boa noite! 🌙");
}


## switch

O switch é útil quando você precisa testar vários casos diferentes para uma mesma variável.
let diaSemana = 2;

switch (diaSemana) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Outro dia");
}


## Operador Ternário


Se você precisa fazer uma decisão simples, o operador ternário é perfeito. Ele é como um if resumido:
let idade = 18;
let mensagem = idade >= 18 ? "Pode entrar! 🎉" : "Entrada proibida! ❌";

console.log(mensagem);

==================
Dicas Importantes
==================

Coloque condições mais específicas primeiro:
if (nota >= 90) {
  // Específico
} else if (nota >= 50) {
  // Geral
}

*/

// 1. Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável `hora`.

let hora = 15

if (hora < 12) {
       console.log("Bom dia!");
} else if (hora < 18) {
       console.log("Boa tarde");
} else {
       console.log("Boa noite!");
}

// 2. Use um `switch` para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

let mes = 22

switch (mes) {
       case 1:
             console.log("Janeiro") 
              break;
       case 2:
             console.log("Fevereiro") 
              break;
       case 3:
             console.log("Março") 
              break;
       case 4:
             console.log("Abril") 
              break;
       case 5:
             console.log("Maio") 
              break;
       case 6:
             console.log("Junho") 
              break;
       case 7:
             console.log("Julho") 
              break;
       case 8:
             console.log("Agosto") 
              break;
       case 9:
             console.log("Setembro") 
              break;
       case 10:
             console.log("Outubro") 
              break;
       case 11:
             console.log("Novembro") 
              break;
       case 12:
             console.log("Dezembro") 
              break;

       default:
              console.log("Digite um valor válido para os meses do ano!")
              break;
}

// 3. Crie um programa que verifica se uma pessoa pode dirigir. Use a variável `idade` e mostre "Pode dirigir" ou "Não pode dirigir".

let idade = 22

if (idade > 18) {
       console.log("Com " + idade + " anos, você pode dirigir se possuir carteira de habilitação!");
} else {
       console.log("Você é menor de idade, tem que completar 18 anos para digirir!")
}

// 4. Use o operador ternário para verificar se uma variável `saldo` é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = -100
let mensagem = saldo > 0 ? "Saldo positivo!" : "Saldo negativo!";

console.log(mensagem);

// 5. Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".

let num = 5

if (num > 0) {
       console.log("O número " + num + " é positivo");
} else if (num < 0) {
       console.log("O número " + num + " é negativo");
} else {
       console.log("O número é " + num);
}

// 6. Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use `switch` para processar a escolha.


console.log("\nEscolha uma opção:")
console.log("1 - Sacar")
console.log("2 - Depositar")
console.log("3 - Saldo")

let opcao = 3

switch (opcao) {
       case 1:
              console.log("Sacar");
              break;
       case 2:
              console.log("Depositar");
              break;
       case 3:
              console.log("Saldo");
              break;
       default:
              console.log("Digite uma opção válida!");
              break;
}