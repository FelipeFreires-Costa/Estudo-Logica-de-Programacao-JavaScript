function atualizarPerfil(){  
  const dadosPerfil = {
    nome: 'Felipe Freires',
    foto: 'https://via.placeholder.com/150',
    bio: 'Desenvolvedor apaixonado por tecnologia e café'
  }

  let nomeElemento = document.getElementById('nome')
  let bioElemento = document.getElementById('bio')
  let imgElemento = document.getElementById('img')

  nomeElemento.textContent = dadosPerfil.nome
  bioElemento.textContent = dadosPerfil.bio
  imgElemento.src = dadosPerfil.foto
  imgElemento.alt = `Foto de perfil de ${dadosPerfil.nome}`
}
atualizarPerfil()


const cores = ['red', 'blue', 'yellow', 'green']
let indiceAtual = 0

  const botaoContent = document.getElementById('caixa-de-cor')
  const botao = document.getElementById('mudar-cor-btn')

function mudarCor(){

botao.style.backgroundColor = cores[indiceAtual]
indiceAtual++

  if(indiceAtual >= cores.length){
    indiceAtual = 0
  }
}

botao.addEventListener('click', mudarCor)