let produtos = [
  { nome: 'Gabinete', marca: 'Pichau', preco: 199, quantidade: 3 },
  { nome: 'Placa de video RTX 3060', marca: 'Nvidia', preco: 1799, quantidade: 2 },
  { nome: 'Mouse gamer', marca: 'Attack shark', preco: 120, quantidade: 12 },
  { nome: 'Teclado Mecanico', marca: 'Attack shark', preco: 299, quantidade: 5 },
  { nome: 'Monitor', marca: 'AOC', preco: 899, quantidade: 1 }
]

function exibirListaDeCompras() {

const listaHTML = document.getElementById('lista-de-compras');

  listaHTML.innerHTML = '';

  produtos.forEach(produto => {
    const novoProduto = document.createElement('li')
    novoProduto.textContent =`${produto.nome} Quantidade: ${produto.quantidade}`
    listaHTML.appendChild(novoProduto)
  })
}

exibirListaDeCompras()

const campoDeTexto = document.getElementById('NovoItem')
const botaoAdicionar = document.getElementById('adicionarItem')

function adicionarItem(){
  const textoDigitado = campoDeTexto.value
  if(textoDigitado.trim() === ''){
    return
  }

  const verificar = produtos.find(item => {
    return item.nome.toLowerCase() === textoDigitado.trim().toLowerCase()
  })

  if(verificar){
    verificar.quantidade++
    console.log(`Quantidade de ${verificar.nome} aumentada para ${verificar.quantidade}`)
  }else{
      const NovoItem = {
    nome: textoDigitado,
    quantidade: 1
  }
  produtos.push(NovoItem)
  console.log(`${NovoItem.nome} adicionado a lista`)
  }
campoDeTexto.value = ''
exibirListaDeCompras()
}

botaoAdicionar.addEventListener('click', adicionarItem)

