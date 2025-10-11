/*Crie uma função chamada soma que recebe dois números como parâmetros e retorna a soma deles.
*/

function soma(n1, n2) {
  return n1 + n2
}

console.log(soma(4, 3))

//Escreva uma função chamada encontrarMaior que recebe um array de números e retorna o maior número presente no array.


function encontrarMaior(numeros) {
  let maior = numeros[0]

  for (let i = 1; i < numeros.length; i++) {
    const numeroAtual = numeros[i]

    if (numeroAtual > maior) {
      maior = numeroAtual
    }
  }
  return maior
}

const lista1 = [1, 3, 54, 67, 234, 65, 7]
console.log(encontrarMaior(lista1))

//Desenvolva uma função chamada verificarParidade que recebe um número como argumento e retorna a string "Par" se o número for par e "Ímpar" se for ímpar.

function verificarParidade(numero) {

  if (numero % 2 === 0) {
    return 'par'
  } else {
    return 'impar'
  }
}
console.log(verificarParidade(65745))

//Crie uma função chamada inverterString que recebe uma string e retorna a mesma string, mas invertida.

function inverterString(palavra) {
  const inverter = palavra.split('').reverse().join('')

  console.log(`${inverter} esta invertida`)
}

console.log(inverterString('cachorro'))

//Escreva uma função fatorial que calcula o fatorial de um número inteiro não negativo. O fatorial de n (representado por n!) é o produto de todos os inteiros positivos menores ou iguais a n. O fatorial de 0 é 1.

function fatorial(n) {
  if (n === 0) {
    return 1
  }
  let resultado = 1

  for (let i = 1; i <= n; i++) {
    resultado = resultado * i
  }
  return resultado
}

console.log(fatorial(5))

//Crie uma função ehPalindromo que verifica se uma dada string é um palíndromo (lê-se da mesma forma de trás para frente), ignorando maiúsculas/minúsculas e espaços.

function ehPalindromo(frase){
  const limpar = frase.toLowerCase().replaceAll(' ', '')

  const inverte = limpar.split('').reverse().join('')

  if(limpar === inverte){
    console.log(`${frase} é um palindromo`)
  }else{
    console.log(`${frase} nao é um palindromo`)
  }
}
ehPalindromo('arara')

//Você recebe um array nums contendo n números distintos retirados da sequência 0, 1, 2, ..., n. Crie uma função encontrarFaltante que encontre o único número que está faltando na sequência.


function encontrarFaltante(nums){
  nums.sort((a, b) => a - b)

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i){
      return i
    }
    return nums.length
  }
}
const array1 = [0, 1, 2]


console.log(encontrarFaltante(array1))

function twoSum(nums, target) {

  for (let i = 0; i < nums.length; i++) {
    const primeiroNumero = nums[i];
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      
      const segundoNumero = nums[j];

      if (primeiroNumero + segundoNumero === target) {
        return [i, j];
      }
    }
  }
  return [];
}
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2));


/**
 *
 * @param {Array} arr - O array de entrada a ser ordenado.
 * @returns {Array} Um novo array ordenado.
 */

function mergeSort(arr) {

  if (arr.length <= 1) {
    return arr;
  }


  const meio = Math.floor(arr.length / 2);
  
  const esquerda = arr.slice(0, meio);
  const direita = arr.slice(meio);

  return merge(mergeSort(esquerda), mergeSort(direita));
}

/**
 * @param {Array} esquerda
 * @param {Array} direita
 * @returns {Array}
*/
function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

const numeros = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(numeros));