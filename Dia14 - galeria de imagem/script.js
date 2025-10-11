const imagemInput = document.getElementById('url-img')
const botaoAdicionar = document.getElementById('adicionar-btn')
const ElementoImg = document.getElementById('container-img')

function adicionarImagem() {
  const urlDaImagem = imagemInput.value;
  if (urlDaImagem.trim() !== '') {
    const contemImg = document.createElement('div')
    contemImg.className = 'item-galeria'

    const imagem = document.createElement('img')
    imagem.src = urlDaImagem
    imagem.alt = 'imagem da galeria'
    imagem.className = 'item-imagem'

    const botaoRemover = document.createElement('button')
    botaoRemover.className = 'botao-remover'
    botaoRemover.textContent = 'Remover'

    botaoRemover.addEventListener('click', (e) => {
      e.target.parentElement.remove()
    })

    contemImg.appendChild(imagem)
    contemImg.appendChild(botaoRemover)

    ElementoImg.appendChild(contemImg)

    imagemInput.value = ''
  } else {
    alert('Por favor, insira uma URL de Imagem.')
  }
}

botaoAdicionar.addEventListener('click', adicionarImagem)