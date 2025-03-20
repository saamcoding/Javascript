/*  
BLOCO 1 e BLOCO 2 utilizam abordagens 
diferentes para capturar a entrada do usário
*/


// BLOCO 1 - Uso de readline-sync (sincronizado)
/* CÓDIGO SINCRONO
Este código é síncrono, ou seja, ele vai esperar até 
que o usuário digite a resposta antes de continuar a 
execução do código. Isso significa que o programa só 
avança depois que o usuário fornecer a entrada.
*/

// console.log("Olá, mundo");

// prompt("Digite algo!")

// const readline = require('readline-sync');

// var texto = readline.question("Digite algo!");

// console.log("Você digitou: " + texto);

/*
Se nao quiser instalar pacotes extras, pode usar
readline, que já vem inbutido no node.js
*/



// BLOCO 2 - Uso de readline (Node.js nativo)
/* CÓDIGO ASSÍNCRONO
Esse código usa uma abordagem assíncrona, ou seja, 
a execução do código não vai esperar a resposta do 
usuário para continuar. 
A função de callback ((resposta) => { ... }) é 
chamada somente quando o usuário fornecer a entrada.
*/

/* COMANDO READLINE
Serve para ler entradas do usuário.
*/
const readline = require("readline");

// cria uma interface para ler entradas do 
// usuário e escrever na saída (console)
const rl = readline.createInterface({ 
    input: process.stdin, // Leitura do teclado
    output: process.stdout // Saída para o console
  });

  rl.question("Digite alguma coisa: ", (resposta) => {
    console.log("Você digitou: " + resposta);
    rl.close //fecha a interface (interface manual)
  });