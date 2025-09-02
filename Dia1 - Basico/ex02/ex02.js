/*
Desafio 2 — Condicional simples
Crie uma variável chamada idade.
Se a idade for maior ou igual a 18, mostre "Você é maior de idade."
Caso contrário, mostre "Você é menor de idade.".
👉 Dica: use if e else.
*/

let idade = 17

if(idade >= 18){
  console.log("voce é maior de idade")
}else{
  console.log("voce é menor de idade")
}

/*
Desafio 3 — Calculadora básica
Crie duas variáveis com números.
Calcule e mostre no console: soma, subtração, multiplicação e divisão.
Monte frases explicando cada resultado.
Exemplo de saída:
A soma de 5 e 3 é 8
*/

let n1 = 20
let n2 = 3
let soma = n1 + n2
let sub  = n1 - n2
let mult = n1 * n2
let div  = n1 / n2

console.log(`a soma de ${n1} e ${n2} é ${soma}`)
console.log(`a subtraçao de ${n1} e ${n2} é ${sub}`)
console.log(`a multiplicaçao de ${n1} e ${n2} é ${mult}`)
console.log(`a divisao de ${n1} e ${n2} é ${div}`)

/*
Desafio 4 — Verificando número par ou ímpar
Crie uma variável chamada numero.
Se for par, mostre "O número X é par".
Se for ímpar, mostre "O número X é ímpar".
👉 Dica: use o operador % (resto da divisão).
*/

let num = 2

if(num % 2 === 0){
  console.log(`o numero ${num} é par`)
}else{
  console.log(`o numero ${num} é impar`)
}

/* 
Tente fazer esse mesmo código mas pedindo três números diferentes e mostrando se cada um é par ou ímpar.
👉 Exemplo de saída:
O número 10 é par
O número 7 é ímpar
O número 22 é par
*/

let num1 = 3
let num2 = 25
let num3 = 78

if(num1 % 2 === 0){
  console.log(`o numero ${num1} é par`)
}else{
  console.log(`o numero ${num1} é impar`)
}

if(num2 % 2 === 0){
  console.log(`o numero ${num2} é par`)
}else{
  console.log(`o numero ${num2} é impar`)
}

if(num3 % 2 === 0){
  console.log(`o numero ${num3} é par`)
}else{
  console.log(`o numero ${num3} é impar`)
}