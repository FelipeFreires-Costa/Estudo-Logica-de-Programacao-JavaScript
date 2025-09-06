/* Crie um array com 4 cores e mostre no console a primeira e a última cor.*/

let cores = ['preto', 'branco', 'verde', 'amarelo']
console.log(cores[0])
console.log(cores[3])

/* Contando elementos
Crie um array de animais e mostre no console quantos animais tem.*/
let animais = ['vaca', 'gato', 'cachorro', 'boi', 'urubu']

console.log(animais.length)

/*Adicionando
Crie um array vazio de carros e adicione 3 modelos nele (usando .push()). */
let carros = []
carros.push('honda', 'fiat', 'onix')
console.log(carros)

/*
Removendo
Crie um array de números e remova o último elemento. */

let numeros = [1, 3, 5, 32, 566, 12, 54]
numeros.pop()

console.log(numeros)

/* Crie um array com nomes e mostre todos eles usando um for...of.*/

let nomes = ['felipe', 'giselly', 'maria', 'joao']
for( let nome of nomes){
  console.log(nome)
}