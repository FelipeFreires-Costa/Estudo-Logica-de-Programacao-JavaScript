const formulario = document.getElementById('form-nota')
const containerNota = document.getElementById('container-de-notas')
const tituloInput = document.getElementById('titulo-nota')
const descricaoInput = document.getElementById('descricao-nota')

let notas = []


// funçao para salvar as notas no localStorage
function salvarNotas() {
  //converte o array de javaScript em uma string JSON e salva no localStorage
  localStorage.setItem('notasSalvas', JSON.stringify(notas))
}

//carregar as notas do localStorage
function carregarNotas() {
  const notasSalvas = localStorage.getItem('notasSalvas')

  if (notasSalvas) {
    notas = JSON.parse(notasSalvas)
  }

  renderizarNotas()
}

//funçao para exibir as notas na pagina
function renderizarNotas() {
  //limpa o container para evitar notas duplicadas na tela
  containerNota.innerHTML = '';

  //para cada nota do array, cria os elementos HTML
  notas.forEach(nota => {
    criarElementoNota(nota)
  })
}



function criarElementoNota(nota) {
  const novoContainer = document.createElement('div')
  novoContainer.className = 'container-tarefa'

  if (nota.concluida) { //adiciona a classe concluida se a nota tiver marcado como concluido
    novoContainer.classList.add('concluida')
  }

  const tituloElemento = document.createElement('h3')
  tituloElemento.textContent = nota.titulo
  const descricaoElemento = document.createElement('p')
  descricaoElemento.textContent = nota.descricao
  const checkbox = document.createElement('input')
  checkbox.className = 'checar'
  checkbox.type = 'checkbox'
  checkbox.checked = nota.concluida//define o estado atual do checkbox

  //adiciona o evento de 'change' ao check box
  checkbox.addEventListener('change', () => {
    nota.concluida = checkbox.checked

    //altera a classe do container
    novoContainer.classList.toggle('concluida')

    //salva a mudança no localStorage
    salvarNotas()
  })


  const botaoRemover = document.createElement('div')
  botaoRemover.className = 'remover-btn'

  const imagemRemover = document.createElement('img')
  imagemRemover.src = '/projeto com DOM, logica e LocalStorage/trash-3-svgrepo-com.svg'
  imagemRemover.alt = 'Remover'

  botaoRemover.addEventListener('click', () => {
    removerNota(nota.id)
  })

  botaoRemover.appendChild(imagemRemover)
  novoContainer.appendChild(checkbox)
  novoContainer.appendChild(tituloElemento)
  novoContainer.appendChild(descricaoElemento)
  novoContainer.appendChild(botaoRemover)

  containerNota.appendChild(novoContainer)
}

function adicionarNotas(e) {
  e.preventDefault()

  const titulo = tituloInput.value
  const descricao = descricaoInput.value

  if (titulo.trim() === '' || descricao.trim() === '') {
    return
  }

  //criar um novo objeto de nota com id unico (usando data para simplificar)
  const novaNota = {
    id: Date.now(),
    titulo: titulo,
    descricao: descricao
  }
  //adicionar a nova nota ao array
  notas.push(novaNota)

  //salvar o array nota ao array
  salvarNotas()

  //atualizar a exibiçao da pagina
  renderizarNotas()

  //limpar campo dos formularios
  tituloInput.value = ''
  descricaoInput.value = ''
}

//logica para remover uma nota
function removerNota(id) {
  notas = notas.filter(nota => nota.id !== id)

  //salvar o array atualizado no localStorage
  salvarNotas()

  //atualizar exibiçao
  renderizarNotas()
}

formulario.addEventListener('submit', adicionarNotas)

carregarNotas()