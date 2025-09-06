/* 
Desafio 1 – Saudação personalizada
Crie uma função que receba um nome e retorne:
"Bem-vindo(a), [nome]!"
*/

function SeuNome(nome) {
  console.log(`Bem vindo ${nome}`)
}

SeuNome('felipe')

/*
Desafio 2 – Calculadora simples
Crie uma função que receba 3 parâmetros: dois números e a operação (+, -, *, /) e retorne o resultado.
*/

function calculadora(n1, n2, op){
  if(op === '+'){
    return n1 + n2
  }else if(op === '*'){
    return n1 * n2
  }else if( op === "-"){
    return n1 - n2
  }else if(op === '/'){
    return n1 / n2
  }else{
    return null
  }
}

console.log(calculadora(3, 4, '/'))

/*Desafio 3 – Maior número

Crie uma função que receba 2 números e retorne o maior deles.*/

function maiorNumero(num1, num2){
  if(num1 > num2){
    return num1
  }else if(num2 > num1){
    return num2
  }else{
    return num1 && num2
  }
}

console.log(maiorNumero(6, 6))

/*Desafio 4 – Contador de vogais
Crie uma função que receba uma palavra e conte quantas vogais (a, e, i, o, u) ela tem.*/
function contVogal(palavra){
  let contador = 0
  const vogais = 'aeiou'
  for(let caractere of palavra.toLowerCase()){
    if(vogais.includes(caractere)){
      contador++
    }
  }
  return contador
}

console.log(contVogal("felipe"))

/* Crie uma função que receba uma palavra ou frase.
Conte quantas consoantes ela tem (ou seja, todas as letras que não são vogais).
Retorne esse número.*/

function texto1(texto){
  let cont = 0
  let minusculo = texto.toLowerCase()
  const consoantes = "aeiou"

  for(let letra of minusculo){
    if(!consoantes.includes(letra)){
      cont++
    }
  }
  return cont
}

console.log(texto1("aeiou"))

/* 
Desafio 5 – Função anônima
Crie uma função anônima que calcule o quadrado de um número.
(Ex.: 4 → 16, 7 → 49)
*/

let quadrado = function(x){
  return x * x;
};

console.log(quadrado(7))

/* Desafio 6 – Arrow function
Crie uma arrow function que receba um número e diga se ele é par ou ímpar.*/

let parImpar = (pi) => {
  if(pi % 2 === 0){
    return 'par'
  }else{
    return 'impar'
  }
}

console.log(parImpar(6))
console.log(parImpar(7))