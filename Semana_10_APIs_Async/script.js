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

  const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1')

  const dados = await resposta.json()

  console.log('usuario encontrado: ')

  console.log(`nome: ${dados.name} email: ${dados.email}`)
}

carregarUsuarioUnico()