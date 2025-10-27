let despesas = []

function adicionarDespesa(descricao, valor) {
  despesas.push({
    descricao,
    valor
  })
}

adicionarDespesa('feira do mes', 500)
adicionarDespesa('jantar fora', 100)
adicionarDespesa('shopee', 300)
console.log(despesas)

const inputTexto = document.getElementById('campoTexto');
const paragrafo = document.getElementById('resultadoTexto');

inputTexto.addEventListener('keyup', ()=> {
  const valorDigitado = inputTexto.value
  paragrafo.textContent = valorDigitado
})

function calcularTotal(arrayDepesas) {
  const valorTotal = arrayDepesas.reduce((acc, item) => {
    return acc + item.valor
  }, 0)
  return valorTotal
}

let resultado = calcularTotal(despesas)
console.log(resultado)

const body = document.body
const botaoToggle = document.getElementById('mudarTema')

const CHAVE_TEMA = 'temaUsuario'

function salvarTema(tema) {
  localStorage.setItem(CHAVE_TEMA, tema)
  console.log(`tema salvo ${tema}`)
}

function carregarTema() {
  //tenta pegar a string salva
  const temaSalvo = localStorage.getItem(CHAVE_TEMA)

  if (temaSalvo) {
    body.classList.add(temaSalvo)
    console.log(`tema carregado ${temaSalvo}`)
  } else {
    //se nao encontrou nada (primeira vez entrando no site), define um padrao
    body.classList.add('light-mode')//garente que comece claro
    salvarTema('light-mode')//salvar o padrao
  }
}

function alternarTema() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode')
    body.classList.add('light-mode')
    salvarTema('light-mode')
  } else {
    body.classList.remove('light-mode')
    body.classList.add('dark-mode')
    salvarTema('dark-mode')
  }
}

carregarTema()

botaoToggle.addEventListener('click', alternarTema)