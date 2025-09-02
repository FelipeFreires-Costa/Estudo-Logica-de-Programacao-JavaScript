/* 
Desafio 1 – Função simples
Crie uma função chamada bomDia que não recebe parâmetros e apenas mostra "Bom dia!" no console.
Depois, chame a função 3 vezes.
*/

function bomDia(){
  console.log("bom dia")
}

bomDia();
bomDia();
bomDia();

/* Desafio 2 – Com parâmetros
Crie uma função chamada saudar que receba um nome e mostre:
Olá, [nome]!
Exemplo:
saudar("Maria") // Olá, Maria!*/

function saudar(nome){
  return "ola, " + nome
}

console.log(saudar("felipe"))

/* Desafio 3 – Com retorno
Crie uma função chamada dobrar que receba um número e retorne o dobro dele.
Teste no console.log.
*/

function dobrar(n){
  return n * 2
}

console.log(dobrar(3))

/*Desafio 4 – Função anônima
Crie uma função anônima que some dois números e guarde dentro de uma variável chamada somar.
Depois use essa função para somar 7 + 5. */

let soma = function(a, b){
  return a + b
}

console.log(soma(7, 5))

/*Desafio 5 – Arrow function
Transforme a função do desafio anterior (somar) em uma arrow function.*/
let soma1 = (x, y) => x + y;
console.log(soma1(7, 10))

/*Desafio 6 – Escopo
Crie uma variável global chamada mensagem = "Estou fora!".
Depois, crie uma função chamada mostrarMensagem que declare uma variável local chamada mensagem = "Estou dentro!" e mostre essa mensagem no console.
Chame a função e depois mostre a variável mensagem de fora dela.*/

let global = "estou fora"

function mostrarMensagem(){
  let mensagem = 'estou dentro'
  console.log(mensagem)
}

mostrarMensagem();
console.log(global)

/*Desafio 7 – Hoisting
Tente usar uma função antes de declará-la (usando function) e depois faça o mesmo com uma função anônima. Observe a diferença.*/

BoaNoite();//declaraçao de funçoes sofre hoisting(funciona antes de declarar)

function BoaNoite(){
  console.log('boa noite')
}

