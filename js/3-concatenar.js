// 1. Usando o operador de concatenção (+)
let string1 = "Olá, ";
let string2 = "mundo!";
console.log(string1 + string2 + "!!" + " " + string1 + string2);

// 2. Usando o método concat()
let string3 = "Olá, ";
let string4 = "mundo!";
let resultado = string3.concat(string4);
console.log(resultado)

// 3. Usando template literals (Template string)
let string5 = "Olá, ";
let string6 = "mundo!";
let resultado2 = `Olá ${string5}${string6} blablabla`
console.log(resultado)

// 4. Usando a função join()
// percorre todos os elementos de um array, 
// converte cada elemento para uma string e 
// junta esses elementos em uma única string, 
// usando o separador fornecido entre eles
let sobrenome = "Rodrigues";
let resultado3 = ['Diego', sobrenome].join(' ');
// array.join(separador);
// ( ) separador que será inserido entre os elementos
// se não for especificado, o método usará uma vírgula (,)
// como padrão
console.log(resultado)