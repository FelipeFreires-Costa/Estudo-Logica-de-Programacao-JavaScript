const inputTarefa = document.getElementById('nova-tarefa')
const botaoAdicionar = document.getElementById('btn-adicionar')
const listaTarefas = document.getElementById('lista-tarefas')

let tarefas = []

function salvarTarefas() {
  localStorage.setItem('listaDeTarefas', JSON.stringify(tarefas))
}

function carregarTarefas() {
  const tarefasSalvas = localStorage.getItem('listaDeTarefas')
  if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas)
  }
  renderizarTarefas()
}

function adicionarTarefa() {
  let valorTexto = inputTarefa.value
  if (valorTexto.trim() === '') {
    return
  }

  //criar um objeto para os dados da tarefa
  const novaTarefa = {
    id: Date.now(),
    texto: valorTexto,
    concluido: false
  }

  tarefas.push(novaTarefa)

  salvarTarefas()

  //renderiza a tela para exibir a nova tarefa
  renderizarTarefas()

  inputTarefa.value = ''

}

function removerTarefa(id) {
  tarefas = tarefas.filter(tarefa => {
    return tarefa.id !== id
  })

  salvarTarefas()
  renderizarTarefas()
}

//funçao renderizarTarefas
function renderizarTarefas(id) {
  //peguei a listaTarefas e deixei vazio para evitar que tenha duplicatas
  listaTarefas.innerHTML = ''
  //percorrer o array tarefas para criar os itens na tela
  tarefas.forEach(tarefa => {
    const itemLista = document.createElement('li')
    if (tarefa.concluido) {
      itemLista.classList.add('concluida')
    }
    const textoTarefa = document.createElement('span')
    textoTarefa.textContent = tarefa.texto

    const remover = document.createElement('button')
    remover.textContent = 'remover'

    remover.addEventListener('click', () => {
      removerTarefa(tarefa.id)
    })

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = tarefa.concluido

    checkbox.addEventListener('change', () => {
      const tarefaConcluida = tarefas.find(t => t.id === tarefa.id)
      if (tarefaConcluida) {
        tarefaConcluida.concluido = checkbox.checked
      }

      salvarTarefas()
      renderizarTarefas()
    })
    itemLista.appendChild(checkbox)
    itemLista.appendChild(textoTarefa)
    itemLista.appendChild(remover)
    listaTarefas.appendChild(itemLista)
  })
}

botaoAdicionar.addEventListener('click', adicionarTarefa)

carregarTarefas();