/*Desafio 1 – Contagem simples
Use um for para imprimir os números de 1 até 10*/

for(let i = 1; i <= 10; i++){
  console.log(i)
}

/*Desafio 2 – Pares até N
Peça um número N e use um while para imprimir todos os números pares de 1 até N.

let n = parseInt(prompt("Digite um numero"))
let num = 1
while(num <= n){
  if(num % 2 === 0){
    console.log(num)
  }
  num++
}
*/
/*Desafio – Números ímpares até N
Objetivo:
Peça um número N ao usuário.
Use um while para imprimir todos os números ímpares de 1 até N.
💡 Dicas:
Crie um contador, por exemplo let i = 1.
Use while(i <= N) para controlar o loop.
Para saber se um número é ímpar, teste:

let numero = parseInt(prompt("Digite um numero"))

let num1 = 1

while(num1 <= numero){
  if(num1 % 2 !== 0){
    console.log(num1)
  }
  num1++
}
*/

/*Desafio 3 – Soma de 1 até N
Peça um número N e use um loop para somar todos os números de 1 até N.
Lembre-se: o acumulador precisa ficar fora do loop.*/

let n = parseInt(prompt("Digite um numero"))
let soma = 0

for(let i = 1; i <= n; i++){
  soma += i

}
  console.log(`a soma de 1 ate ${n} é ${soma}`)