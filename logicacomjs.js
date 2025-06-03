/*let number = 1;
let number1 = 9;
let som = number+number1 
console.log("A soma é:"+som)
console.log("_________________")

let number2 = 5;
let number3 = 2;
let sub = number2-number3
  console.log("A subtração é:"+sub)
  console.log("_________________")

  let number4 = 8;
  let number5 = 9;
  let mult = number4*number5
  console.log("A multiplicação é:"+mult)
  console.log("_________________")

  let number6 = 9;
  let number7 = 5;
  let div = number6/number7
console.log("A divisão é:"+div)*/

/*let salario = prompt("Digite seu salário!")
let meses = prompt("digite seus meses trabalhados!")
let mult = 12;
let resul = salario/mult*meses
let usuario = prompt("Digite Seu Nome!")
console.log("Meus parabéns " + usuario +  " seu décimo terceiro é " + resul)
alert( usuario + " seu décimo 13º é" + " R$" + resul)*/

/*let money =800;
let porc = 80
let resultado = money % porc 

function calcularPorcentagem(valor, porcentagem) {
  return (valor * porcentagem) / 800;
}

console.log(calcularPorcentagem(800, 10)); // Saída: 10*/


/*function calcularPorcentagem(valor, porcentagem) {
  return (valor * porcentagem) / 100;
}

let valorTotal = prompt
let porcentagem = 5;
let resultado = calcularPorcentagem(valorTotal, porcentagem);
console.log(resultado); // Output: 20

// Para calcular 5% de 1418:
let resultado1 = calcularPorcentagem(50, 10);
console.log(resultado1); // Output: */

/*let idade =prompt("digite sua idade: ")
if(idade <12){
alert("Assista contéudo infantil")}
else if(idade >=12 && idade<=17){
alert("assista contéudo teen")}
else if(idade >=18 && idade <=60){
alert ("assista contéudo adulto")}
else{
alert("assista contéudo Sênior")}*/
/*var pontuacao =prompt("digite sua pontuação")
if(pontuacao <=1000){
alert("nível novato voce ganhou 100XP")
}else if(pontuacao >=1001 && pontuacao <=5000){
alert("nível Aprendiz ganhou 500XP")
}else if(pontuacao >=5001 && pontuacao <=10000){
alert("nível Expert ganhou 1000XP")
}else{
alert("nível Mestre ganhou 2000XP ")
}*/

let base =25;
let premium =40;
let ultra =60;
let tipodeassinatura =prompt("digite sua assinatura")
let quantitela =prompt("digite a quantidade de telas que deseja")
if(tipodeassinatura == "basico"){
 if(quantitela >=1 && quantitela <=2){
    alert("seu plano terá valor de "+base+" R$")
}
}
