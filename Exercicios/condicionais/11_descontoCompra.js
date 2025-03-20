let valor = parseFloat (prompt("Olá, digite o valor da sua compra: "));
let valorDesconto = 0.15;

if (isNaN(valor)){
    console.log("Por favor, digite um número válido!")
}else if(valor >= 200){
    let valorComDesconto = valor * (1 - valorDesconto);
    console.log("Sua compra no valor de ", valor.toFixed(2), " recebeu um desconto de 15%!. O valor da sua compra agora é: ", valorComDesconto.toFixed(2))
}else{
    console.log("Infelizmente sua compra não atingiu o valor mínimo para o desconto!")
}
