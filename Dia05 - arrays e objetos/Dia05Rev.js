/* Atividade 1: Calculadora de Compras
Usando o Array de Objetos listaDeCompras que criei acima, calcule o preço total da lista.
Use um laço de repetição (for ou for...of) para percorrer o array.
Em cada iteração, some o valor da propriedade preco de cada objeto a uma variável chamada total.
No final, exiba o valor total no console.

Atividade 2: Adicionando e Removendo Itens
Crie uma função chamada adicionarItem que recebe um nome, um preco e um tipo como parâmetros.
Dentro da função, crie um novo objeto com essas informações.
Use o método .push() para adicionar esse novo objeto ao array listaDeCompras.
Teste a função adicionando um novo item, por exemplo, um "Café".
Em seguida, crie uma função chamada removerUltimoItem que usa o método .pop() para remover o último item do array.
Chame a função para remover o café que você acabou de adicionar.
No final, exiba a lista completa no console para ver o resultado.*/

let listaDeCompras = [
  { nome: 'arroz', preco: 12, tipo: 'integral' },
  { nome: 'Pao', preco: 5, tipo: 'integral' },
  { nome: 'bolacha', preco: 2.50, tipo: 'salgado' },
  { nome: 'carne', preco: 20, tipo: 'picanha' }
]

function adicionarItem(nome, preco, tipo) {
  let novoItem = {
    nome: nome,
    preco: preco,
    tipo: tipo
  }
  listaDeCompras.push(novoItem)
}

adicionarItem('cafe', 19, 'torrado')

console.log(listaDeCompras)

function removerUltimoItem() {
  listaDeCompras.pop()
}
removerUltimoItem()
console.log(listaDeCompras)

let item = listaDeCompras

/* 1. Desafio com .map()
Crie um novo array de strings que contenha a frase "O produto [nome do produto] custa R$ [preço]." para cada item da lista.*/
let nomeDosProdutos = listaDeCompras.map(item => {
  return `O produto ${item.nome} custa ${item.preco} R$ `;
})

console.log(nomeDosProdutos)

/*Desafio com .filter()
Crie um novo array contendo apenas os produtos que tenham o tipo igual a 'integral'.*/

let produtosIntegral = listaDeCompras.filter(item => {
  return item.tipo == 'integral'
})

console.log(produtosIntegral)

/* Desafio com .reduce()
Calcule o valor total dos produtos que custam mais de R$ 10,00. (Dica: você pode combinar .filter() e .reduce() para resolver este desafio em uma única linha).*/

let precoFiltro = listaDeCompras.filter(item => {
  return item.preco > 10
})

console.log("produtos com preço maior que 10 reais ", precoFiltro)

let totalPreco = precoFiltro.reduce((acumulador, item) => {
  console.log(`acumulador ${acumulador} preco atual: ${item.preco}`)
  return acumulador + item.preco
}, 0)

console.log("preco total: " + totalPreco)