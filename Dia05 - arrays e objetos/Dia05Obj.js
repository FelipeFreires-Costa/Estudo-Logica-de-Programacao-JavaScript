/*1. Lista de compras
Crie um array de 3 objetos, cada objeto representando um item com: nome e preco.
Mostre todos os nomes dos itens no console.*/
let produtos = [
  { nome: 'Teclado', preco: 299 },
  { nome: 'Mouse', preco: 99 },
  { nome: 'Monitor', preco: 899 }
]

for (let produto of produtos) {
  console.log(produto.nome)
}
/*Soma de preços
Usando a mesma lista de compras, calcule a soma total dos preços.*/

function soma(produtos) {
  let total = 0;
  for (let produto of produtos) {
    total += produto.preco
  }
  return total;
}

console.log('Total: R$' + soma(produtos))

/*Desafio – Média das idades
Crie um array de objetos representando pessoas (cada pessoa tem nome e idade).
Depois, faça uma função que calcule a média das idades.*/

let pessoas = [
  { nomes: 'felipe', idade: 23 },
  { nomes: 'giselly', idade: 24 },
  { nomes: 'Joao', idade: 35 }
];

function somaIdade(pessoas) {
  let somaI = 0;
  for (let pessoa of pessoas) {
    somaI += pessoa.idade
  }
  return somaI;
}
console.log('soma das idades ' + somaIdade(pessoas));

function mediaIdade(pessoas) {
  let soma = somaIdade(pessoas)
  return soma / pessoas.length;
}

console.log('media das idades: ' + mediaIdade(pessoas))

/*Idade mínima
Crie um array de objetos pessoas (com nome e idade).
Mostre no console quem é a pessoa mais nova. */

let idadeMinima = pessoas[0].idade
let pessoaNova = pessoas[0].nomes

for (let pessoa of pessoas) {
  if (pessoa.idade < idadeMinima) {
    idadeMinima = pessoa.idade
    pessoaNova = pessoa.nomes
  }
}

console.log(`a pessoa mais nome é ${pessoaNova} com a idade de ${idadeMinima}`)

/*Desafio – Maior preço de produto
Você tem um array de objetos chamado produtos, cada objeto tem nome e preco.
Seu objetivo é descobrir qual é o produto mais caro e mostrar o nome dele junto com o preço.*/

let produtos2 = [
  { id: 'Processador', custo: 899 },
  { id: 'placa de video', custo: 2999 },
  { id: 'water cooler', custo: 399 }
]

let menorPreco = produtos2[0].custo
let maisBarato = produtos2[0].id

for (let produto2 of produtos2) {
  if (produto2.custo < menorPreco) {
    menorPreco = produto2.custo
    maisBarato = produto2.id
  }
}

console.log(`O produto mais barato é ${maisBarato} com o preço de ${menorPreco}R$`)