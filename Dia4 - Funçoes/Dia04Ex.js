/*
Desafio 1 – Dobro e Triplo
Crie duas funções:
Uma que retorna o dobro de um número.
Outra que retorna o triplo.
*/

function dobro(num1) {
  return num1 * 2
}
console.log(dobro(4))

function triplo(num2){
  return num2 * 3
}

console.log(triplo(20))

/*Desafio 2 – Maior número
Função que recebe dois números e retorna o maior deles.*/

function maiorNumero(n1, n2){
  if(n1 > n2){
    return n1
  }else if(n2 > n1){
    return n2
  }
}

console.log(maiorNumero(5, 56))

/* Desafio 3 – Média
Função que recebe 3 notas e retorna a média.
Se a média for maior ou igual a 7, retornar "Aprovado", senão "Reprovado".*/
function notas(nota1, nota2, nota3){
  let media = (nota1 + nota2 + nota3) / 3
  if(media >= 7){
    return 'aprovado'
  }else{
    return 'reprovado'
  }
}

console.log(notas(7, 8, 6))

/* 
Desafio 4 – Contador de Letras
Função que recebe uma palavra e retorna quantas letras ela tem.
*/

function quantLetras(nome){
  return nome.length;
}

console.log(quantLetras('felipe'))

/*Função que verifica se uma palavra é palíndromo
(ex: "arara", "ovo", "radar").*/


function palindromo(texto){
  // deixa tudo minúsculo e sem espaços extras
  let palavra = texto.toLowerCase().replace(/\s+/g, "");

  // inverte a palavra
  let invertida = palavra.split("").reverse().join("")

  if(palavra === invertida){
    return `${texto} é um palindromo` 
  }else{
    return `${texto} nao é um palindromo`
  }
}

console.log(palindromo("arara"));
console.log(palindromo("ovo"));
console.log(palindromo("cachorro"));