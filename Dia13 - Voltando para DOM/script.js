const botao = document.getElementById('meuBotao')
const paragrafo = document.getElementById('mensagem')

function mudancas(){
  paragrafo.textContent = 'botao foi clicado'
  paragrafo.style.color = 'blue'
}

botao.addEventListener('click', mudancas )

//===================================================================

const botaoAdd = document.getElementById('adicionarBtn')
const ul = document.getElementById('lista')

function adicionarItem(){

  const novoItem = document.createElement('li')

  novoItem.textContent = 'Novo Item'

  const botaoRemover = document.createElement('button')
  botaoRemover.textContent = 'remover'


  botaoRemover.addEventListener('click', () => {
    novoItem.remove()
  })
  
  novoItem.appendChild(botaoRemover)
  ul.appendChild(novoItem)
}

botaoAdd.addEventListener('click', adicionarItem)