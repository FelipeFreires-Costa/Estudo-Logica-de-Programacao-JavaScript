const palavras = ['javaScript', 'programar', 'estudar', 'trabalhar']

const botaoAleatorio = document.getElementById('botao')
const lista = document.getElementById('lista')

function gerarNumero(){
  const indiceAleatorio = Math.floor(Math.random() * palavras.length)

  const palavraAleatoria = palavras[indiceAleatorio]

  lista.textContent = palavraAleatoria
}

botaoAleatorio.addEventListener('click', gerarNumero)