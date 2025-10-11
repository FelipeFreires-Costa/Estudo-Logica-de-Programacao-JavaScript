/*Crie um array de objetos, onde cada objeto é um aluno com nome e nota.
Crie uma função que percorra este array e exiba no console se o aluno foi "Aprovado" (nota >= 7) ou "Reprovado" (nota < 7).*/

let alunos = [
  { nome: 'felipe', nota: 7.5 },
  { nome: 'giselly', nota: 10 },
  { nome: 'joao', nota: 6 },
  { nome: 'maria', nota: 8 },
  { nome: 'cleber', nota: 5.6 }
]

function exibir() {
    alunos.forEach(aluno => {
    if (aluno.nota >= 7) {
      console.log(`o aluno ${aluno.nome} esta aprovado`)
    } else if (aluno.nota < 7) {
      console.log(`o aluno ${aluno.nome} esta reprovado`)
    }
  }
  )
}

exibir()

/*Desafio Prático:
Crie um array de objetos, onde cada objeto é um produto com nome, preco e categoria.
Crie uma função que receba um precoMaximo como parâmetro. Use o método .filter() para retornar um novo array contendo apenas os produtos que custam menos que o preço máximo.*/

let produtos = [
  {nome: 'Celular' ,preco: 1900 ,categoria: 'eletronico'},
  {nome: 'Computador' ,preco: 4000,categoria:'eletronico' },
  {nome: 'Teclado',preco: 200,categoria: 'periferico'},
  {nome: 'Mouse',preco: 120 ,categoria: 'periferico'},
  {nome: 'Controle',preco: 150,categoria: 'periferico'},
]

function mostrarMaiorPreco(produto, precoMaximo){
    return produto.preco < precoMaximo
}

const maisBarato = produtos.filter(produto => mostrarMaiorPreco(produto, 3000))

console.log(maisBarato)

