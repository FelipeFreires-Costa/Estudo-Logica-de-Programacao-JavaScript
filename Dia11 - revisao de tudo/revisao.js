const desejos = ['Monitor', 'Teclado Mecanico', 'Mouse Gamer']
let indiceAtual = 0

const itemElemento = document.getElementById('item-atual')

function mudarDesejo(){

  //inicia com a opacidade 0 (item invisivel) 
  itemElemento.style.opacity = '0'

  //usao setTimeout para dar um atraso antes de mudar o texto
  setTimeout(() =>{
  itemElemento.textContent = desejos[indiceAtual]
  
  //inicia o texto com opacidade 1 (deixa visivel novamete)
  itemElemento.style.opacity = '1'

  indiceAtual++

  if(indiceAtual >= desejos.length){
    indiceAtual = 0
  }
  }, 400)//400ms de atraso para a animaçao
  
}

setInterval(mudarDesejo, 2000)

//fazer um botao que muda a cor quando clicado

//fiz um arrays de cores
const cores = ['blue', 'green', 'red']
//defini um indice para usar no array mais tarde
let indice = 0

//peguei os elementos do html
const botao = document.getElementById('mudar-cor')
const background = document.getElementById('caixa')

/*
function mudarCorAleatiria(){
  const cor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0') 
  return cor;
}

function mudarCor(){
  const corAleatoria = mudarCorAleatiria()
  botao.style.background = corAleatoria
}
*/

function mudarCor(){

  //peguei o estilo do botao e coloquei as cores mais o inicio do indice do array
  botao.style.background = cores[indice]

  //fiz o incremendo
  indice++

  //condiçao para reetornar ao inicio
  if(indice >= cores.length){
    indice = 0
  }
}

//evento de click para o botao
botao.addEventListener('click', mudarCor)


//selecionei o elemento que vai exibir o contador
const contadorElemento = document.getElementById('contador-visitas')

//tenta pegar o valor salvo no localStorage
const visitasSalvas = localStorage.getItem('visitas')

//se o valor existe salvo existir use o valor salvo, se nao, comece com 0
let numeroDeVisitas = visitasSalvas ? parseInt(visitasSalvas) : 0

numeroDeVisitas += 1


//atualiza o texto da tela com o valor
contadorElemento.textContent = `Visitas: ${numeroDeVisitas}`

//salva o valor no localStorage (converte o numero devolta para string)
localStorage.setItem('visitas', numeroDeVisitas.toString())