/*Crie um array chamado vendas.
Adicione objetos a este array. Cada objeto deve representar uma venda e ter as seguintes propriedades:
id: um número único.
produto: uma string com o nome do produto.
valor: um número.
quantidade: um número.
mes: uma string representando o mês (ex: 'janeiro', 'fevereiro').
Adicione pelo menos 5 vendas diferentes ao seu array. Inclua vendas do mesmo produto ou em meses diferentes para ter dados para analisar.*/

let vendas = [
  { id: 1, produto: 'controle xbox', valor: 300, quantidade: 3, mes: 'agosto' },
  { id: 2, produto: 'gabinete', valor: 150, quantidade: 5, mes: 'novembro' },
  { id: 3, produto: 'Hidratante', valor: 15, quantidade: 10, mes: 'julho' },
  { id: 4, produto: 'garrafga termica', valor: 45, quantidade: 4, mes: 'julho' },
  { id: 5, produto: 'teclado', valor: 299, quantidade: 3, mes: 'novembro' }
]

/*a) Vendas de um Mês Específico:
Crie uma função chamada calcularTotalDoMes(mes) que recebe o nome de um mês como parâmetro.
Dentro da função, use o método .filter() para selecionar apenas as vendas que ocorreram naquele mês.
Use o método .reduce() no array filtrado para somar o valor total de todas as vendas (o valor da venda é valor * quantidade).
A função deve retornar o valor total.*/

function calcularTotalDoMes(mes) {
  const vendasDoMes = vendas.filter(venda => venda.mes === mes)

  let total = vendasDoMes.reduce((acumulador, venda) => {
    return acumulador + (venda.valor * venda.quantidade)
  }, 0)
  return total
}

const totalNovembro = calcularTotalDoMes('novembro')
console.log(`o total de vendas em novembro foi ${totalNovembro} R$`)

/*Crie uma função chamada encontrarProdutoMaisVendido().
Use o método .reduce() para percorrer o array vendas e contar a quantidade total de cada produto. O .reduce() deve retornar um objeto onde as chaves são os nomes dos produtos e os valores são as quantidades vendidas.
Dica: Comece o reduce() com um objeto vazio {} como valor inicial do acumulador.
Depois de ter o objeto de contagem, encontre o produto com o maior valor de quantidade.*/

function encontrarProdutoMaisVendido() {
  const contagem = vendas.reduce((acumulador, venda) => {
    if (!acumulador[venda.produto]) {
      acumulador[venda.produto] = 0
    }
    acumulador[venda.produto] += venda.quantidade
    return acumulador
  }, {})

  let produtoMaisVendido = null
  let maiorQuantidade = 0

  for (let produto in contagem) {
    if (contagem[produto] > maiorQuantidade) {
      maiorQuantidade = contagem[produto]
      produtoMaisVendido = produto
    }
  }
  return produtoMaisVendido
}

const resultado = encontrarProdutoMaisVendido()
console.log(`o produto mais vendido é ${resultado}`)
