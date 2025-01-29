
/*
=========================
        BOOLEANOS
=========================

**O Que São Valores Booleanos?**

Um valor booleano só pode ter dois estados:

- true: Representa verdadeiro.
- false: Representa falso.

Eles são usados principalmente em **condições** para determinar o que o código deve fazer.

**Exemplo no mundo real:**

- Está chovendo?** *true*
- Você está logado?** *false*
- A luz está acesa?** *true*


====================================
Comparações e Operadores Relacionais
====================================

Os valores booleanos muitas vezes são gerados a partir de comparações. Aqui estão os operadores mais comuns:
_________________________________________________________
Operador  |     Descrição     |  Exemplo  |  Resultado
===       | Igualdade estrita |  5 === 5  |   true
!==       | Diferença estrita |  5 !== 3  |   true
<         |    Menor que      |   3 < 5   |   true
>         |    Maior que      |   5 > 3   |   true
<=        |  Menor ou igual   |   3 <= 3  |   true
>=        |  Maior ou igual   |   5 >= 5  |   true
_________________________________________________________


==================
Operadores Lógicos
==================

Os operadores lógicos permitem combinar ou inverter valores booleanos:
_________________________________________________________
Operador  |   Descrição   |    Exemplo      |   Resultado
&&        | "E" lógico    |  true && false  |    false
||        | "OU" lógico   |  true || false  |    true
!         | "NÃO" lógico  |     !true       |    false
_________________________________________________________

Dicas Importantes

Cuidado com conversões automáticas (truthy e falsy):

No JavaScript, alguns valores são interpretados como true ou false, mesmo que não sejam booleanos.
____________________________________________
Valor                        | Interpretação  
0, "", null, undefined, NaN  |     false
Qualquer outro valor         |     true
____________________________________________


*/


// 1. Verifique se um número é maior que 10 e menor que 20.

let num = 143

if (num > 10 && num < 20) {
    console.log("O " + num + " está entre 10 e 20")
} else {
    console.log("O " + num + " não está entre 10 e 20")
}


// 2. Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 23

if (idade >= 18){
    console.log("Você tem " + idade + " e já pode votar.")
} else {
    console.log("Você tem " + idade + " e não pode votar ainda.") 
}


// 3. Use `&&` e `||` para criar um sistema de login onde um usuário pode entrar com email **ou** nome de usuário, mas precisa fornecer uma senha válida.

let usuario = "ped"
let email = "pedro@teste.com"
let senha = 123

//  se o usuário for IDENTICO a "pedro" - OU(um ou outro)-  o email foi IDENTICO a "pedro@teste.com" - E (obrigatóriamente)-  a senha for identica a "1233"
if (usuario === "pedro" || email === "pedro@teste.com" && senha === 1234) {
    console.log("Usuário logado")
} else {
    console.log("Usuário ou senha inválidos! Tente novamente.")
}


// 4. Implemente um sistema de notas onde:
//     - Notas >= 90: "Aprovado com A"
//     - Notas >= 70 e < 90: "Aprovado com B"
//     - Notas < 70: "Reprovado".

let nota = 69

if (nota >= 90) {
    console.log("Está aprovado com conceito A!")
} else if (nota >= 70) {
    console.log("Está aprovado com conceito B!")
} else {
    console.log("Está reprovado!")
}


// 5. Crie uma variável `saldo` e verifique:
//     - Se `saldo > 0`: Mostre "Saldo positivo".
//     - Se `saldo === 0`: Mostre "Sem saldo".
//     - Caso contrário, mostre "Saldo negativo".

let saldo = 0

if (saldo > 0) {
    console.log("Saldo Positivo.")
} else if ( saldo === 0) {
    console.log("Sem saldo.")
} else {
    console.log("Saldo Negativo.")
}


// 6. Use o operador `!` para verificar se uma luz está apagada e ligue-a.

// luz está ligada para true
let luzLigada = true

//se a luzLigada não está ligada (luzLigada não é true), retorna a luz está apagada.
if (!luzLigada) {
    console.log("Luz está apagada.")
}