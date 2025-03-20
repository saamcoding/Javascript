/* OBJETO DATE
o objeto date é usado para representar datas e horários
ele permite criar instâncias de datas e acessar várias 
informações sobre elas, como ano, mês, dia, hora, minuto, 
segundo e milissegundo

esse objeto é automático, ou seja, o js já cria o objeto 
com a data e hora exata de quando o código é executado

console.log(dataAtual);
*/

//  criando um objeto Date
var dataAtual = new Date(); // cria um objeto com data e hora atuais
// new Date(): Quando você chama new Date() sem argumentos, 
// ele cria um objeto Date representando a data e hora atuais.



//  criando um objeto Date com uma data especifica (ano, mês, dia, hora, minuto, segundo)
var dataEspecifica = new Date(1991,10-1,25,14,30,0); //instanciando a classe DATE, já embutida no js
console.log(dataEspecifica)


/*  METODOS ÚTEIS DO DATE
getFullYear(): Retorna o ano (4 digitos)
gwetMonth(): Retorna o mês (0-11, onde 0 é janeiro)
getDate(): Retorna o dia da semana (0-6, onde 0 é domingo)
getHours: Retorna a hora (0-23)
getMinutes(): Retorna os minutos (0-59)
getSeconds(): Retorna os segundos (0-59)
gitMilliseconds(): Retorna os milissegundos (0-999)
getTime(): Retorna o timestamp (milisegundos desde 1 de janeiro de 1970)
*/

/*  OBSERVAÇÕES
meses são indexados de 0 a 11, entao jnaeiro é 0 e dezembro é 11
*/

var data = new Date();
console.log(data.getFullYear()) // ano atual
console.log(data.getMonth() + 1) // mês atual (adiona 1 porque janeiro é zero)
console.log(data.getDate()) // dia do mês 1 - 31
console.log(data.getDay()) // dia da semana 0- 6

/*  TIMESTAMP
é um número que representa a quantidade de milissegundos desde 1 de janeiro de 1970
conhecido também como "Unix Epoch"
*/

var timestamp = Date.now(); //  retorna ao timestamp auaç
console.log(timestamp);

//convertendo timestamp para data
var timestamp = 1697392800000
var data = new Date(timestamp);
console.log(data);

// retornado ao timestamp atual
var timestamp = Date.now();
var data = new Date(timestamp);
console.log(data);

// formatação de datas
var data = new Date();
console.log(data.toLocaleDateString())

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

var dataFormatada = `${dia}/${mes}/${ano}`;
console.log(dataFormatada);


//  diferença entre datas
var data1 = new Date(2023,9,15);
var data2 = new Date(2023,9,20);

// retorna difereça entre milessegundos
var diferenca = data2 - data1;
console.log(diferenca);


//  convertendo em dias
var dias = diferenca / (1000 *60 * 60 * 24);
console.log(dias);