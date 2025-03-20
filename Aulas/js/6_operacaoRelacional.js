/*  OPERADORES RELACIONAIS
esses operadores são usados para comparar dois
valores e retornar um valor lógico (true/false)
*/

let num1 = 35;
let num2 = 5;


//  igual a (==): verifica se dois valores são iguais,
let igualdade = num1 == num2; // verifica se 35 é igual a 5
console.log(igualdade);


/* 5 == "5"
== verifica se os valores são iguais, mas não se importa com o 
tipo (ou seja, ele faz uma conversão de tipo, se necessário) */
console.log(5 == "5"); /*  aqui o tipo 5 é uma string, mas
(==) converte a string "5" para o tipo NÚMERO antes de comparar
//  5 == "5" se torna 5 == 5, o que é TRUE

/* TRUE
em js, true é considerado 1 quando convertido para número
true == 1 é equivalente a 1 == 1, o que é verdadeiro */
console.log(true == 1); 


/*  TRUE
o null == undefined é true em js
são considerados "iguais" ao fazer uma comparação 
com o ==, embora tenham tipos diferentes

== faz uma conversão de tipos antes de comparar, 
e trata null e undefined como equivalentes*/
console.log(null == undefined); 


/*  FALSE
false == 0 é true.
o == em js faz uma conversão de tipos (coerção) antes 
de comparar os valores
false é convertido para o número 0 quando usado em uma 
comparação, como 0 é igual a 0, a comparação retorna true
*/
console.log(false == 0)



// OPERADORES RELACIONAIS COMUNS
// == IGUAL a (verifica se os valores são iguais)
let igualA = nume1 == num2;
console.log(igualA);

// != DIFERENTE de (verifica se os valores são diferentes)
let diferenteDe = num1 != num2;
console.log(diferenteDe);

// > MAIOR que
let maiorQue = num1 > num2;
console.log(maiorQue);

// < MENOR que
let menorQue = num1 < num2;
console.log(menorQue);

// >= MAIOR OU IGUAL a
let maiorIgual = num1 >= num2;
console.log(maiorIgual);

// <= MENOR OU IGUAL a
let menorIgual = num1 <= num2;
console.log(menorIgual)
