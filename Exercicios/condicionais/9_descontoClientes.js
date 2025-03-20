let compra = parseFloat (prompt("Digite o valor da sua compra: "));
let desconto = 0.20
let cartao = prompt("Voce possui o cartão fidelidade?").toLowerCase();

if(cartao == "sim"){
    let precoDesconto = compra * (1 - desconto);
    console.log("Você tem direito a 20% de desconto! O valor da sua compra após o desconto é: ", precoDesconto)
}else if(cartao == "nao"){
    console.log("Você não tem direito a desconto!");
}
