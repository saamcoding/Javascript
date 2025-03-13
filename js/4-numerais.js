let n1 = 6;
let n2 = 2;

let subtracao = n1 - n2;
console.log(subtracao);

let idade = "33";
console.log(idade + 2)
/* quando usamos o + de uma string
com um numero, o JS tenta concatenar
os dois, assim a saída será 332

/* PARSEINT 
é uma função que converte o valor 
da variável idade em um número inteiro
*/
console.log(parseInt(idade) + 2) // converte a string "33" para um número inteiro (33)
/* agora que a variável idade foi convertida 
para um número inteiro, podemos somar 2
*/


/* PARSEFLOAT 
é uma função que converte o valor 
da variável idade em um número com casas decimais
*/
console.log(parseFloat(idade).toFixed(2)) // 33.00
/* TOFIXED() 
arredonda o número para 
manter duas casas após a vírgula
*/

console.log((7.5).toFixed(2));    // 7.50 é arredondado para duas casas decimais
console.log((7).toFixed(2))      // 7.00
console.log((7.204).toFixed(2)) // 7.20

console.log((8).toPrecision(4)) 

// prompt é usado apenas para testes
var numero = parseFloat(prompt("Escreva um número: "))
console.log(numero + 2)