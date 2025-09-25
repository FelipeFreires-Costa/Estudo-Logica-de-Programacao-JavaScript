const produtos = [
  {nome: 'Teclado' , preco: 299 , categoria: 'eletronico'},
  {nome: 'mouse pad' , preco: 79, categoria: 'acessorio'},
  {nome: 'controle ps5' , preco: 199, categoria: 'eletronico'},
  {nome: 'Braço articulado', preco:99 , categoria:'acessorio' },
  {nome: 'placa de video', preco: 1599, categoria: 'eletronico'}
]

function buscarProduto(termoDeBusca, precoMaximo){

  //uma boa pratica em busca é converter o valor da busca em minusculas usando toLowerCase()
  const buscaFormatada = termoDeBusca.toLowerCase()

  const resultados = produtos.filter(produto => {

    //primeira condiçao: o nome do produto inclui o termo de busca?
    const nomeIncluiTermo = produto.nome.toLowerCase().includes(buscaFormatada)

    const precoMenorIgual = produto.preco <= precoMaximo

    return nomeIncluiTermo && precoMenorIgual
  })

  return resultados
}

function exibirResultados(resultados){
  if(resultados.length === 0){
    console.log('nenhum produto encontrado')
    return
  }

  console.log('--- Produtos Encontrados ---')
  resultados.forEach(produto => {
    console.log(`Produto: ${produto.nome} - Preço: R$ ${produto.preco}`)
  })
  console.log('----------------------------')
}

const resultado1 = buscarProduto('m' , 200)
exibirResultados(resultado1)

const resultado2 = buscarProduto('t', 200)
exibirResultados(resultado2)