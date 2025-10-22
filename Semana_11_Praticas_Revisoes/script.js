let itens = ['pizza', 'hamburguer', 'pizza', 'suco', 'hamburguer', 'pizza']


function contarFrequencia(itens){
  let contador = {}

  itens.forEach(item => {
    if(contador[item]){
      contador[item] = contador[item] + 1
    }else{
      contador[item] = 1
    }
  })
  return contador
}

const resultado = contarFrequencia(itens)

console.log(resultado)

//Desafio 1: Mapeamento de Dados Complexos (.map() e Objetos)

const usuarios = [
  {primeiroNome: 'felipe', ultimoNome: 'freires', email: 'felipefreires@email.com'},
  {primeiroNome: 'giselly', ultimoNome: 'ferreira', email: 'gisellyferreira@email.com'},
  {primeiroNome: 'joao', ultimoNome: 'gomes', email: 'joaogomes@email.com'},
  {primeiroNome: 'maria', ultimoNome: 'silva', email: 'mariasilva@email.com'}
]

function formatarParaRelatorio(){
  const usuarioFormatado = usuarios.map(usuario => {
    return{
      nomeCompleto: `${usuario.primeiroNome.toUpperCase()} ${usuario.ultimoNome.toUpperCase()}`,
      emailFormatado: usuario.email.toUpperCase()
}
  })
  return usuarioFormatado
}

const resultadoformatado = formatarParaRelatorio()

console.log(resultadoformatado)

//Desafio 2: Filtrando por Múltiplos Critérios (Combinando .filter() e Lógica)

const catalogo = [
    { nome: 'Notebook', categoria: 'Eletronicos', preco: 2500 },
    { nome: 'Mouse', categoria: 'Perifericos', preco: 150 },
    { nome: 'Teclado', categoria: 'Perifericos', preco: 400 }
];


function buscarItens(categoriaParametro, precoMaximoParametro){
  const buscarItensFilter = catalogo.filter(produto =>{
    const categoriaCorrespondente = produto.categoria === categoriaParametro
    const precoCorrespondente = produto.preco <= precoMaximoParametro

    return categoriaCorrespondente && precoCorrespondente
  })
  return buscarItensFilter
}

const resultadoitens = buscarItens('Eletronicos', 2500)

console.log(resultadoitens)

//Desafio 3: Redução de Dados Complexos (.reduce() para Objetos)

const notas = [8, 7, 9, 7, 6, 8, 9, 9];

function resumoDeNotas(arrayDeNotas){
  return arrayDeNotas.reduce((acc, nota) =>{
    if(acc[nota]){
      acc[nota] = acc[nota] + 1
    }else{
      acc[nota] = 1
    }
    return acc;
  }, {})
}

const resultadoContagem = resumoDeNotas(notas)

console.log(resultadoContagem)