let itens = [
  {nome: 'Teclado', quantidade: 2},
  {nome: 'mouse', quantidade: 3},
  {nome: 'monitor', quantidade: 5}
]

const listaHTML = document.getElementById('lista-de-compras')

listaHTML.innerHTML = '';

itens.forEach(item => {
  const novoItemDaLista = document.createElement('li')

  novoItemDaLista.textContent = `${item.nome} - Quantidade: ${item.quantidade}`

  listaHTML.appendChild(novoItemDaLista)
})