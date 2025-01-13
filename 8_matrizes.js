/*
=========================
       MATRIZES
=========================

O Que é uma Matriz?

Uma matriz é um array de arrays, ou seja, um array onde cada elemento também é um array.

💡 Exemplo no mundo real:

Um tabuleiro de xadrez, onde cada célula é identificada por uma linha e uma coluna.
Uma planilha do Excel, com células organizadas em linhas e colunas.

let matriz = [
  [1, 2, 3], // Linha 0
  [4, 5, 6], // Linha 1
  [7, 8, 9]  // Linha 2
];
​


📌 Como Acessar Elementos de uma Matriz

Você usa dois índices para acessar os elementos:

1. O **primeiro índice** indica a linha.
2. O **segundo índice** indica a coluna.


let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matriz[1][2]);  // Saída: 6 (Linha 1, Coluna 2)

🔥🔥 Dica 🔥🔥
Os índices começam em `0`, assim como nos arrays.


🔥🔥🔥🔥🔥🔥  Criando Matrizes Dinamicamente 🔥🔥🔥🔥🔥🔥

Você pode criar uma matriz de forma dinâmica usando loops:

let linhas = 3;
let colunas = 3;
let matriz = [];

for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = i + j;  // Exemplo: Soma dos índices
  }
}

===========================
Métodos Úteis para Matrizes
===========================

Embora os métodos nativos de arrays também funcionem em matrizes, você frequentemente precisará de loops para manipulá-las.

📌 1. Iterar Sobre uma Matriz
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento [${i}][${j}]: ${matriz[i][j]}`);
  }
}


📌 2. Somar Todos os Elementos

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}

console.log(`Soma total: ${soma}`);  // Saída: 45


📌 3. Encontrar o Maior Valor

let matriz = [
  [1, 20, 3],
  [4, 5, 6],
  [7, 8, 90]
];

let maior = matriz[0][0];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] > maior) {
      maior = matriz[i][j];
    }
  }
}

console.log(`Maior valor: ${maior}`);  // Saída: 90



================================
       🔥🔥 Dica: 🔥🔥
================================

🔥🔥🔥 Pense em Linhas e Colunas:
    
    Sempre imagine a matriz como uma tabela para facilitar o entendimento.
    

🔥🔥🔥 Cuidado com Índices Inválidos:
    
Tentar acessar uma posição fora da matriz retornará `undefined`.
    

let matriz = [[1, 2], [3, 4]];
console.log(matriz[2][0]);  // Saída: undefined


🔥🔥🔥🔥 Use Loops para Manipular Matrizes:

Quase sempre será necessário um loop dentro de outro (loop aninhado) para percorrer os elementos.

*/


// 1. Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.

let linhas = 3;
let colunas = 3;
let matriz1 = [];

let contador = 1;


// para um intervalo de linhas começando em 0 até o valor de linhas = 3, incremente o valor de vezes para criar as linhas;
for (let i = 0; i < linhas; i++) {
    matriz1[i] = [];
    // para um intervalo de colunas começando em 0 até o valor de colunas = 3, incremente o valor de vezes para criar as colunas em conjunto com as linhas com os valores
    // começando do valor do CONTADOR de valores e incrementando até o valor total da matriz (no caso 3x3=9). 
    for (let j = 0; j < colunas; j++) {
        matriz1[i][j] = contador;
        contador += 1; // outras formas de escrever => contador = contador + 1 ; contador++
    }
}

console.log(matriz1);



// 2. Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.

let matrizA = [ 
  [1 , 2 , 3 ], // 6
  [4 , 5 , 6 ], // 15
  [7 , 8 , 9 ]  // 24
]; // total 45

let somaMatriz = 0;

// para o intervalo de uma matriz começando em 0 e terminando na quantidade de valores nas linhas
for (let i = 0; i < matrizA.length; i++) {
  // e para o intervalo de uma matriz começando em 0 e terminando na quantidade de valores nas linhas
  for (let j = 0; j < matrizA[i].length; j++) {
    // realize a soma da quantidades de valores na matriz para todos os valores contidos na matriz no intervalo i de linhas e j de colunas
    somaMatriz += matrizA[i][j];
  }
}

console.log(`A soma dos valores é: ${somaMatriz}`);




// 3. Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".

// 1ª forma

let linhaTab = 9;
let colunaTab = 9;

let tabuleiro = [];

// criando as linhas para uma matriz vazia
for (let i = 0; i < linhaTab; i++) {
  tabuleiro[i] = [];
  // criando as colunas para matriz com as linhas anteriores
  for (let j = 0; j < colunaTab; j++) {
    // se (if) a divisão da soma das coordenadas da matriz for igual a 0, pinte de branco, se não (else) pinte de preto.
    tabuleiro[i] = (i + j) % 2 === 0 ? "⬜" : "⬛";  // para 1 intervalo
    // tabuleiro[i][j] = (i + j) % 2 === 0 ? "⬜" : "⬛"; // para todos os intervalos
  }
}

console.log(tabuleiro);

// [
//   '1,1 = ⬛', '1,2 = ⬜', '1,3 =⬛',
//   '2,1 = ⬜', '2,2 = ⬛', '2,3 =⬜',
//   '3,1 = ⬛', '3,2 = ⬜', '3,3 =⬛'
// ]

// 2ª forma

let tabuleiro2 = [];

for (let i = 0; i < 9; i++) {
  tabuleiro2[i] = [];
  for (let j = 0; j < 9; j++) {
    tabuleiro2[i] = (i + j) % 2 === 0 ? "⬜" : "⬛";  // Branco ou preto
  }
}
console.log(tabuleiro2);

// [
//   '⬜', '⬛', '⬜',
//   '⬛', '⬜', '⬛',
//   '⬜', '⬛', '⬜'
// ]



// 4. Verifique quantos números em uma matriz são pares.

let matrizB = [ 
  [1 , 2 , 3 ], 
  [4 , 5 , 6 ], 
  [7 , 8 , 9 ]  
];

let contadorPar = 0;

for (let i = 0; i < matrizB.length; i++) {
  for (let j = 0; j < matrizB[i].length; j++) {
    if (matrizB[i][j] % 2 == 0 ) {
      contadorPar += 1;
    }
  }
}  
console.log(`A quantidade de valores pares encontrados nessa matriz é: ${contadorPar}`)


// 5. Substitua todos os valores maiores que 10 em uma matriz por `0`.

let matrizC = [ 
  [1 , 20 , 3 ], 
  [40 , 5 , 60 ], 
  [7 , 80 , 9 ]  
];

for (let i = 0; i < matrizC.length; i++) {
  for (let j = 0; j < matrizC[i].length; j++) {
    if (matrizC[i][j] > 10) {
      matrizC[i][j] = 0;
    }
  }  
}

console.log(matrizC);


// 6. Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.

let matrizD = [ 
  [1 , 2 , 3 ], 
  [4 , 5 , 6 ], 
  [7 , 8 , 9 ]  
];

multiplicador = 3;

for (let i = 0; i < matrizD.length; i++) {
  for (let j = 0; j < matrizD[i].length; j++) {
  matrizD[i][j] = matrizD[i][j] * multiplicador;
  }
}  

console.log(matrizD);