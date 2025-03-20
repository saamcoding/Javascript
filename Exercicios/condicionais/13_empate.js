let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
    console.log("Por favor, digite um número válido!");
}else if(num1 > num2 && num1 > num3){
    console.log("O maior número é ", num1);
}else if(num2 > num1 && num2 > num3){
    console.log("O maior número é ", num2);
}else if(num3 > num1 && num3 > num2){
    console.log("O maior número é ", num3);
}else if(num1 == num2 && num2 == num3){
    console.log("Todos os números são iguais")
}else if(num1 === num2 || num2 === num3 || num1 === num3){
    console.log("Não é possível verificar o maior se tem dois números iguais")
}