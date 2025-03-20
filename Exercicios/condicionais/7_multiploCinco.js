let numero = prompt("Digite um número: ");

if(numero % 10 == 5 || numero % 10 == 0){ // verifica se a ultimo digito do número é zero ou cinco
    console.log("Esse número é múltiplo de cinco")
}else{
    console.log("Esse número não é múltiplo de cinco")
}