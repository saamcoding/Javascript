/*  OPERADORES LÓGICOS
esses operadora são usados para combinar expressões lógicas
*/

/*  OPERADOR LÓGICO && (E)
retorna verdadeiro se ambas as expressões forem verdadeiras
*/
let nome = true
let senha = false

let resultado = nome == true && senha == true
console.log(resultado)

/*  OPERADOR LÓGICO || (OU)
retorna verdadeiro se pelo menos uma das expressões forem verdadeiras 
*/
let nome2 = "Diego"
let sobrenome = "Rodrigues"
let senha2 = "1234"

let resultado2 = nome2 == "Diego" || sobrenome == "Rodrigues" || senha2 == "1234"
console.log(resultado2)