let carrinho = []

const catalogo = [
  { id: 1, nome: 'Teclado mecanico', preco: 299.99 },
  { id: 2, nome: 'Mouse Attack skark', preco: 129.99 },
  { id: 3, nome: 'Mouse pad', preco: 69.99 },
  { id: 4, nome: 'Monitor AOC', preco: 799.99 },
]

function adicionarAoCarrinho(idDoProduto) {
  let produtoParaAdicionar = catalogo.find(produto => produto.id === idDoProduto)

  if (!produtoParaAdicionar) {
    console.log('Produto nao encontrado no catalogo.')
    return;
  }

  const itemJaNoCarrinho = carrinho.find(item => item.id === idDoProduto)


  if (itemJaNoCarrinho) {
    itemJaNoCarrinho.quantidade += 1
    console.log(`Quantidade do item ${itemJaNoCarrinho.nome} aumentada!`)
  } else {
    const novoItem = {
      id: produtoParaAdicionar.id,
      nome: produtoParaAdicionar.nome,
      preco: produtoParaAdicionar.preco,
      quantidade: 1
    }
    carrinho.push(novoItem);
    console.log(`${novoItem.nome} adicionado ao carrinho`)
  }
}

function removerDoCarrinho(idDoProduto) {
  carrinho = carrinho.filter(item => item.id !== idDoProduto)
  return carrinho
}

function calcularTotal(){
  const total = carrinho.reduce((acumulador, item) =>{
    const valorDoItem = item.preco * item.quantidade;
    return acumulador + valorDoItem
  }, 0)
  return total
}



function mostrarCarrinho(){
  console.log('\n--- CARRINHO DE COMPRAS ---')
  carrinho.forEach((item)=>{
    console.log(`${item.nome} (${item.quantidade}x) - R$ ${item.preco * item.quantidade}`)
  })
  const total = calcularTotal();

  console.log('-----------------')
  console.log(`Total: R$ ${total.toFixed(2)}`)
  console.log('-----------------')
}

adicionarAoCarrinho(1)
adicionarAoCarrinho(2)
adicionarAoCarrinho(2)

mostrarCarrinho()

removerDoCarrinho(2);
mostrarCarrinho();

removerDoCarrinho(1);
mostrarCarrinho();