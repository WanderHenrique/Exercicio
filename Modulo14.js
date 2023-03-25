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

let branco = "preto";
let preto = "cinza";
let cinza = "branco";
let carro = "preto";
let valor = 30000;
let prestacao = 750;

//a) branco == “branco”
console.log(branco == "branco");

//b) branco == cinza
console.log(branco == cinza);

//c) carro === branco
console.log(carro === branco);

//d) var cavalo = carro == “preto” ? “cinza” : “marron”;
let cavalo = carro == "preto" ? "cinza" : "marron"; 
// cavalo é igual a "cinza"