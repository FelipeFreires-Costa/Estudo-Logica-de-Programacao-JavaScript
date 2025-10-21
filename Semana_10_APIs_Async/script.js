// async function buscarPosts(){
//   console.log("iniciando a busca...")

//   const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')

//   const dados = await resposta.json()

//   console.log("posts Encontrados:")
//   dados.forEach(post => {
//     console.log(`Titulo: ${post.title}`)
//     console.log(`Corpo: ${post.body.substring(0, 20)}...`)//limita o corpo para nao ficar muito longo
//     console.log('----')
//   })
// }

//buscarPosts()

async function carregarUsuarioUnico(){
  console.log('iniciando a busca de usuario...')

  const usuario = document.getElementById('usuario-info')

  try{
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/3')

    if(!resposta.ok){
      throw new Error('Falha ao buscar dados: ' + resposta.statusText)
    }

    const dados = await resposta.json()

    usuario.innerHTML = `<h3>Nome: ${dados.name}</h3>
    <p>Email: ${dados.email}</p>
    <p>Cidade: ${dados.address.city}`

    console.log('dados exibidos na pagina com sucesso!')
  } catch (error){
    console.error('erro na requisição: ', error)
    usuario.textContent = 'Erro ao carregar dados'
  }

}

carregarUsuarioUnico()