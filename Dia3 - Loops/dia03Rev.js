/*REVISÃO
Desafio 1 – Números de 1 a 10
Use um for para imprimir os números de 1 a 10 no console.
*/

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

/*Desafio 2 – Números pares até 20
Com while, mostre apenas os números pares de 1 até 20.*/

let i = 1

while (i <= 20) {
  if (i % 2 === 0) {
    console.log(i)
  }
  i++
}

/*Desafio equivalente (pra fixar)
Agora, faça quase a mesma lógica, mas em vez de mostrar os pares, quero que você mostre os múltiplos de 3 de 1 até 30.*/

let x = 1

while (x <= 30) {
  if (x % 3 === 0) {
    console.log(x)
  }
  x++
}

/*Desafio 3 – Tabuada de um número
Peça um número com prompt e use um for para mostrar a tabuada desse número até 10.
Exemplo (se o número for 3):*/

let numero = 23

for(let j = 1; j <= 10; j++){
  let mult = j * numero
  console.log(`a tabuada de ${numero} é: ${numero} x ${j} : ${mult}`)
}

/*Desafio 4 – Adivinhar número (do...while)
O computador define um número secreto (por exemplo 7).
O usuário vai digitando números até acertar.
Use do...while para repetir até ele acertar.

let numCorreto = 7
let chute

do{
  chute = prompt("Tente adivinhas o numero entre 1 e 10")
  
  if(chute < numCorreto){
    console.log(`o numero é Maior que ${chute}`)
  }else if(chute > numCorreto){
    console.log(`o numero é menor que ${chute}`)
  }

}while(chute != numCorreto)

  console.log("acertou o numero")
*/
  /* 
Desafio 5 – Soma de 1 até N
Peça um número N e use um loop para calcular a soma de 1 até N.
Exemplo: se o usuário digitar 5, a soma será 1 + 2 + 3 + 4 + 5 = 15.
  */


let n = prompt("digite um numero")
let soma = 0

for(let f = 1; f <= n; f++){
  soma += f
}
console.log(`A soma de 1 até ${n} é ${soma}`)

