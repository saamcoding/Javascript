let idade = parseFloat(prompt("Olá, digite sua idade: "));

if(isNaN(idade)){
    console.log("Digite um número válido!")
}else if(idade >= 60){
    console.log("Você é idoso")
}else if(idade >= 18 && idade <= 59){
    console.log("Adulto")
}else if(idade < 18){
    console.log("Você é menor de idade")
}