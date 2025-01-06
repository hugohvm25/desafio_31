
/*
=========================
        STRINGS 
=========================

Uma string é basicamente **um texto entre aspas. No JavaScript, você pode usar três tipos de aspas:

- Aspas simples 'Texto'
- Aspas duplas "Texto"
- Template literals (crase) `Texto`

**Exemplo:**

🔥 let nome = "João";  // Aspas duplas
🔥 let sobrenome = 'Silva';  // Aspas simples
🔥 let saudacao = `Olá, ${nome}!`;  // Template literal

================================
🔥🔥 Dica: 🔥🔥

 Use `template literals` (crase) quando precisar incluir variáveis ou expressões diretamente no texto.
================================
 

================================
Principais Operações com Strings
================================

🔥🔥🔥 Concatenar Strings: 🔥🔥🔥
Unir textos usando o operador + ou template literals:

🔥let nome = "Ana";
🔥let saudacao = "Olá, " + nome + "!";  // Usando +
🔥let saudacao2 = `Olá, ${nome}!`;  // Usando template literals
console.log(saudacao);  // Saída: Olá, Ana!


Acessar Caracteres:
Cada caractere de uma string tem um índice, começando em 0:

let palavra = "Programação";
console.log(palavra[0]);  // Saída: P
console.log(palavra[4]);  // Saída: a


Obter o Tamanho da String:

let texto = "JavaScript";
console.log(texto.length);  // Saída: 10

====================================
Métodos Úteis para Manipular Strings
====================================
_________________________________________________________________________________________________________
Método         |           Descrição                     |        Exemplo                     | Saída
toUpperCase()  | Transforma tudo em maiúsculas           |  "abc".toUpperCase()               | "ABC"
toLowerCase()  | Transforma tudo em minúsculas           |  "ABC".toLowerCase()               | "abc"
trim()         | Remove espaços do início e do fim       |  "  texto  ".trim()                | "texto"
includes()     | Verifica se contém um texto específico  |  "JavaScript".includes("Script")   |  true
startsWith()   | Verifica se começa com um texto         |  "JavaScript".startsWith("Java")   |  true
endsWith()     | Verifica se termina com um texto        |  "JavaScript".endsWith("Script")   |  true
slice()        | Extrai uma parte da string              |  "JavaScript".slice(0, 4)          | "Java"
replace()      | Substitui parte do texto                | "Olá, João".replace("João", "Ana") | "Olá, Ana"
_________________________________________________________________________________________________________

==================================
🔥🔥🔥 Dicas Importantes 🔥🔥🔥
==================================

Você não pode alterar diretamente um caractere de uma string.

let texto = "Olá";
texto[0] = "A";  // Não funciona
console.log(texto);  // Saída: Olá
​
Use métodos encadeados para manipulação eficiente:

let texto = "  Olá, mundo!  ";
console.log(texto.trim().toUpperCase());  // Saída: OLÁ, MUNDO!

*/


// 1. Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nomeCompleto = "Nome Teste"

console.log(nomeCompleto.slice(0, 4))

let nomeCompleto2 = "Segundo Nome"
let nomeCortado = nomeCompleto2.slice(0, 7)
console.log(nomeCortado)

// 2. Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let palavra = "Python Golang"

if (palavra.includes("Java")) {
    console.log("Possui Java nessas palavras.")
} else {
    console.log("Não possui Java nessas palavras.")
}

// 3. Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let frase = "   Meu nome é Zmax   "

console.log(frase)
console.log(frase.trim().toUpperCase());

// 4. Substitua a palavra "erro" por "correção" na string `"Houve um erro no sistema."`.

let texto = "Houve um erro no sistema"

console.log(texto)
console.log(texto.replace("erro", "correção"))

// 5. Divida a frase `"Eu amo JavaScript"` em palavras separadas e exiba cada uma.

let txt = "Eu amo JavaScript"

console.log(txt.slice(0, 2))
console.log(txt.slice(3, 6))
console.log(txt.slice(7, 17))

// 6. Valide se um URL começa com `https://` e termina com `.com`.

let endereco = "http://www.meusite.com.br"

if (endereco.includes("http://" && ".com")) {
    console.log("O endereço possui htt:// e .com")
} else if (endereco.includes("http://")) {
    console.log("O endereço possui somente htt://")
} else if (endereco.includes(".com")) {
    console.log("O endereço possui somente .com")  
} else {
    console.log("O endereço não possui somente htt:// e .com")
}
