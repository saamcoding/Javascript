let nota = parseFloat(prompt("Digie sua nota: "));

if(isNaN(nota)){
    console.log("Por favor, digite um número válido!");
}else if(nota == 10){
    console.log("Aprovado com excelência!");
}else if(nota >= 7){
    console.log("Aprovado");
}else if(nota >= 5 && nota <= 6.9){
    console.log("Recuperação");
}else if(nota < 5){
    console.log("Reprovado");
}