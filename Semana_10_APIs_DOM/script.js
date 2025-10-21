// o 'async' é fundamental. Ele avisa o javaScript que esta funçao fará operaçoes de 'espera' (await)'
async function carregarPosts(){
  console.log('iniciando busca de posts')


  //selecionar o container no HTML onde os posts serao exebidos
  const infoPosts = document.getElementById('posts-container')

  //O bloco 'try' contem o codigo que pode falhar (a comunicaçao de rede)
  try{
    // ----------------------------------------------------
    // 1. REQUISIÇÃO (O PEDIDO)
    // ----------------------------------------------------
    // 'await fetch': Pausa a execução e envia o pedido para a URL.
    // A URL pede os primeiros 10 posts (?_limit=10).
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')


    //verifica se a resposta foi bem-sucedida (status 200-299)
    //se nao for 'ok' usamos 'throw' para forçar o erro e ir para o bloco 'catch'
    if(!resposta.ok){
      throw new Error('Falha ao buscar dados...')//manda o programa para o catch
    }

    //----------------------------------------------------
    // 2. CONVERSÃO (PROCESSANDO OS DADOS)
    // ----------------------------------------------------
    // 'await resposta.json()': Pausa novamente, esperando a conversão da resposta para um array/objeto JavaScript.
    const dados = await resposta.json()

    console.log('posts encontrados')

    // ----------------------------------------------------
    // 3. RENDERIZAÇÃO (EXIBINDO NA TELA)
    // ----------------------------------------------------
    // Percorre o array 'dados' (posts) que acabamos de receber da API.

    dados.forEach(post => {
      //cria um novo container (cartao) para o post
      const card = document.createElement('div')

      //cria o titulo (h3) e insere o 'title' do objeto
      const text = document.createElement('h3')
      text.textContent = `titulo: ${post.title}`

      //cria o corpo do texto (p) e insere o 'body' do objeto post
      const body = document.createElement('p')
      body.textContent =  `comentario: ${post.body}`

      //anexa os elementos filhos ao cartao principal
      card.appendChild(text)
      card.appendChild(body)

      //anexa o cartap complet ao conteiner principal do HTML, tornando visivel
      infoPosts.appendChild(card)
    })

  }catch(error){
    // ----------------------------------------------------
    // 4. TRATAMENTO DE ERROS
    // ----------------------------------------------------
    // Este bloco é executado se o 'fetch' falhar ou se o 'throw new Error' for ativado.
    console.error('erro na requisição', error)

    //exibir uma mensagem amigavel na tela do usuario
    infoPosts.textContent = 'Erro ao carregar dados. tente novamente'
  }
}

//chama a funçao assincrona para iniciar
carregarPosts()