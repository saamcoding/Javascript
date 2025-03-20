// alert("teste")

/* VAR
Variavéis declaradas com var tem escopo global ou de função
podem ser atulizadas e declaradas novamente dentro do seu
escopo.
Existem desde o começo na linguagem javascript
*/
var variavelVar = "Sam";
console.log(variavelVar);

var variavelVar = "Doardo";
console.log(variavelVar);

var variavelVar = "Beabea";
console.log(variavelVar);



/* LET
Variáveis declaradas com let tem ecopo em bloco
Podem ser atualizadas, mas nao declarada novamente
Foram criadas posteriormente para evitar confusões
*/
let variavelVar = 10
console.log(variavelVar)

variavelVar = 33
console.log(variavelVar)



/* CONST
constantes = o valor não pode ser alterado
*/
const constanteConst = true
console.log(constanteConst)

constanteConst = false
console.log(constanteConst) //Aparece mensagem de erro