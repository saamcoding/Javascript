// let idade = prompt("Digite sua idade: ");
// let cnh = false;

// if(idade >= 18) {
//     console.log("Você pode dirigir!");
// }else{ 
//     console.log("Você não pode dirigir!");
// }

// if(idade >= 18){
//     if(nha == true){ // Verifica se a pessoa tem CNH
//         console.log("Você pode dirigir!");
//     }else{
//         console.log("Você é maior de idade, mas não tem cnh e não pode dirigir");
//     }
// // o else abaixo será executado quando nenhuma das condições dentro do primeiro if for verdadeira
// // ele apenas lida com o caso onde a pessoa é menor de 18 anos, sendo uma condição separada das outras
// }else{
//     console.log("Você é menor de idade e nãpo pode dirigir!");  // Se a pessoa for menor de idade
// }

// sorteio de números
// pense em um número 1 ao 100
var numeroPensado = Math.round(Math.random() * 4);
console.log(numeroPensado)

var chute = 51//prompt("Pensei em um número, qual você acha que é? ")

if(chute == numeroPensado){
    console.log("Uau! Você acertou! Eu pensei exatamente no número " + numeroPensado)
}else{
    console.log("HAHA! Você errou! Eu pensei no número " + numeroPensado)
}


let nota = 6

if(nota >= 7){
    console.log("Aprovado")
}else if(nota >=5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}


let permissão = prompt("Você tem permissão? (sim ou não)").toUpperCase(); 
if(permissão == "SIM"){
    console.log("Você tem permissão");
}else if(permissão == "NÃO"){ 
    console.log("Você não tem permissão")
}