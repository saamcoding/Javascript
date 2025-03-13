//Number

let idade = 21; //número inteiro
let preco = 19.99 //numero de ponto flutuante 

console.log(idade);
console.log(typeof idade) //typeof mostra o tipo da variavel

/* STRING
*/
let nome = "Sam"; //sequência de caracteres
let sobrenome = 'Santiago';//string pode ser 
// usadas com as aspas simple ou duplas
console.log(sobrenome);


/* BOOOLEAN
possui apenas dois valores possíveis: true e false
ele é usado para representar valores lógicos e condições 
em expressões, onde verificamos se algo é verdadeiro ou falso
*/
let maiorDeIdade = true; //valor booleano verdadeiro
let menorDeIdade = false; //valor booleano falso
console.log(menorDeIdade)



/* Undefined
quando uma variavel é declarada, mas não foi
inicializada e atribuida a um valor
*/
let endereco; //undefined (porque 'endereco' não foi atribuído ainda)
console.log(endereco);
/* undefined é usado pelo JavaScript automaticamente 
quando uma variável é declarada, mas não inicializada, 
ou quando uma função não tem um valor de retorno
*/


/* Null
ausência de valor ou valor nulo
é usado para indicar que uma variável não tem 
nenhum valor ou referência associada a ela
*/
let telefone = null; //variavel 'telefone' tem valor nulo
                    // ausência intencional de valor