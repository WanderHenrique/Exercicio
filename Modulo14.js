// 1. Resolva as operações:
console.log(10 + 15);
console.log("10" + 2);
console.log("10" * 2);
console.log("10" / 3);
console.log("10" % 3);
console.log(10 + true);
console.log(10 == "10");
console.log(10 === "10");
console.log(10 < 11);
console.log(10 > 12);
console.log(10 <= 10.1);
console.log(10 > 9.99);
console.log(10 != "dez");
console.log(10 + true);
console.log("dez" + true);
console.log(10 + false);
console.log(10 * false);
console.log(true + true);

let x = 10;
let y = 10;
console.log(x++);
console.log(y--);

console.log(1 & 1);
console.log(1 & 0);
console.log(0 & 0);
console.log(1 & 0);
console.log(0 / 1);

//2. Responda as perguntas de acordo com as variáveis.
var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

//a) branco == “branco”
console.log(branco == "branco");

//b) branco == cinza
console.log(branco == cinza);

//c) carro === branco
console.log(carro === branco);

//d) var cavalo = carro == “preto” ? “cinza” : “marron”;
var cavalo = carro == "preto" ? "cinza" : "marron";
console.log(cavalo);

//e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.
let entrada = 3000;
let restante = valor - entrada;
let numPrestacoes = restante / prestacao;
console.log(numPrestacoes);

//f) Somando as variáveis de cores é formada uma string de quantos caracteres?
let stringCores = branco + preto + cinza;
let numCaracteres = stringCores.length;
console.log(numCaracteres);