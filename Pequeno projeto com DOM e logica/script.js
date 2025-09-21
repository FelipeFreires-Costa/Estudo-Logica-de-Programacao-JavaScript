const formulario = document.getElementById('form-nota')
const containerNota = document.getElementById('container-de-notas')
const tituloInput = document.getElementById('titulo-nota')
const descricaoInput = document.getElementById('descricao-nota')



function adicionarNotas(e) {
  e.preventDefault()

  const tituloNota = document.getElementById('titulo-nota').value
  const descricaoNota = document.getElementById('descricao-nota').value

  if (tituloNota.trim() === '' || descricaoNota.trim() === '') {
    return
  }


  const novoContainer = document.createElement('div')
  novoContainer.className = 'container-tarefa'

  const tituloElemento = document.createElement('h3')
  const descricaoElemento = document.createElement('p')

  tituloElemento.textContent = tituloNota
  descricaoElemento.textContent = descricaoNota

  const botaoRemover = document.createElement('button')
  botaoRemover.textContent = 'Remover'
  botaoRemover.className = 'remover-btn'

  botaoRemover.addEventListener('click', () => {
    novoContainer.remove()
  })

  novoContainer.appendChild(tituloElemento)
  novoContainer.appendChild(descricaoElemento)
  novoContainer.appendChild(botaoRemover)

  containerNota.appendChild(novoContainer)

  document.getElementById('titulo-nota').value = ''
  document.getElementById('descricao-nota').value = ''
}

formulario.addEventListener('submit', adicionarNotas)


