//definir a chave para o local storage
const CHAVE_STORAGE = 'dadosFinanceiros'

const formulario = document.getElementById('form-transacao')
const inputDescricao = document.getElementById('descricao')
const inputValor = document.getElementById('valor')
const listaHTML = document.getElementById('lista-transacoes')
const resumoHTML = document.getElementById('resumo-financeiro')
const inputTipo = document.getElementById('tipo-transacao');

//array vazio para receber os dados, usar o let pq vai ser modificado
let transacoes = []

function salvarTransacoes() {
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(transacoes))
}

function carregarTransacoes() {
  const dadosSalvos = localStorage.getItem(CHAVE_STORAGE)

  if (dadosSalvos) {
    transacoes = JSON.parse(dadosSalvos)
  }
  renderizarTransacoes()
}

function adicionarTransacao(e) {
  e.preventDefault()

  //correçao: aqui eu usei o .value() so que value nao recebe parametro, a forma correta é so .value
  const valorDescricao = inputDescricao.value
  const valorValor = parseFloat(inputValor.value)// parseFloat garante que seja numero
  const tipoSelecionado = inputTipo.value
  //se os valores forem 0 ou vazios, nao faz nada, o !valor é como se o valor é diferente da existencia 
  if (!valorDescricao || !valorValor || !tipoSelecionado) {
    alert('por favor, preencha a descricao e o valor valido')
    return
  }

  //correçao: eu tinha usado o id: id.Datenow() o correto é id: Date.now()
  const novaTransacao = {
    id: Date.now(),
    descricao: valorDescricao,
    valor: valorValor,
    tipo: tipoSelecionado
  }
  transacoes.push(novaTransacao)
  salvarTransacoes()
  renderizarTransacoes()

  inputDescricao.value = ''
  inputValor.value = ''
  inputDescricao.focus();

}

function removerTransacao(id) {
  transacoes = transacoes.filter(transacao => transacao.id !== id)
  salvarTransacoes()
  renderizarTransacoes()
}

formulario.addEventListener('submit', adicionarTransacao)

function renderizarTransacoes() {
  listaHTML.innerHTML = ''

  let saldoAtual = 0

  transacoes.forEach(transacao => {
    const itemLista = document.createElement('li')
    const textoDescricao = document.createElement('p')
    textoDescricao.textContent = `Descrição: ${transacao.descricao}`

    const valorElemento = document.createElement('span')
    valorElemento.textContent = `R$: ${transacao.valor.toFixed(2)}`

    const tipoDespesa = document.createElement('p')
    tipoDespesa.textContent = `Tipo: ${transacao.tipo}`

    const botaoRemover = document.createElement('button')
    botaoRemover.textContent = 'Remover'

    if (transacao.tipo === 'receita') {
      saldoAtual += transacao.valor;
    } else if (transacao.tipo === 'despesa') {
      saldoAtual -= transacao.valor;
    }


    botaoRemover.addEventListener('click', () => {
      removerTransacao(transacao.id)
    })

    itemLista.appendChild(textoDescricao);
    itemLista.appendChild(valorElemento);
    itemLista.appendChild(tipoDespesa)
    itemLista.appendChild(botaoRemover)

    listaHTML.appendChild(itemLista);

  })

  if (resumoHTML) {
    resumoHTML.textContent = `Saldo Atual: R$ ${saldoAtual.toFixed(2)}`
  }

}



carregarTransacoes()
renderizarTransacoes()