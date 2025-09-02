/*Desafio 1 – Contagem simples
Mostre os números de 1 até 10 usando for, while e do...while.*/

let i = 1
while(i <= 10){
  console.log(i);
  i++
}

/* Desafio 2 – Números pares
Peça um número N e mostre todos os números pares de 1 até N.
Exemplo: Se N = 10 → saída: 2, 4, 6, 8, 10.*/

let x = 1
let n = 3
while(x <= n){
  if(x % 2 === 0){
    console.log(x)
  }
  x++
}

/*
🔹 Desafio 3 – Soma até N
Peça um número N e calcule a soma de 1 até N.
(Se N = 5, resultado = 15).
let soma = 0
let num = parseInt(prompt("DIgite um numero"))

for(let i = 1; i <= num; i++){
  soma += i
}
console.log(`a some de 1 ate ${num} é: ${soma}`)

*/

/*🔹 Desafio 4 – Tabuada
Peça um número e mostre a tabuada dele de 1 até 10.
Exemplo: Se o usuário digitar 3:*/

let num = 3

for(let i = 1; i <= 10; i++){
  let soma = num * i
  console.log(`${num} x ${i} = ${soma}`)
}

/*
🔹 Desafio 5 – Adivinhação (com do...while)
O computador escolhe um número (por exemplo, 7).
O usuário deve tentar adivinhar, e só sai do loop quando acertar.
let numeroCorreto = 7
let chute
do{
  chute = prompt("adivinhe um numero")
  if(chute == numeroCorreto){
    console.log("vitoria")
  }else{
    console.log("tente novamente")
  }
}while(chute != numeroCorreto)
*/

/* 
🎯 Desafio equivalente (Senha correta com do...while)
Peça que o usuário digite a senha "1234".
O programa deve continuar pedindo até que ele acerte.
*/

let senhaCorreta = "1234"
let tentativas
do{
  tentativas = prompt("Digite a senha")
  if(tentativas === senhaCorreta){
    console.log("Senha correta, login com sucesso")
  }else{
    console.log("Senha invalida, tente denovo")
  }
}while(tentativas != senhaCorreta)