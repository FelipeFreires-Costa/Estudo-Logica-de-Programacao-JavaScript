const produtos = [
  { id: 1, nome: 'Teclado', preco: 299.99, desconto: true, quantidade: 2 },
  { id: 2, nome: 'mouse pad', preco: 79.50, desconto: false, quantidade: 6 },
  { id: 3, nome: 'controle ps5', preco: 199.70, desconto: true, quantidade: 10 },
  { id: 4, nome: 'Braço articulado', preco: 99.50, desconto: false, quantidade: 1 },
  { id: 5, nome: 'placa de video', preco: 1599.99, desconto: true, quantidade: 8 }
]


//MAP
// const novosProdutos = produtos.map(produto => {

//   //se produto desconto for true, produto preco recebe 10% de desconto, se nao, produto preco continua igual
//   const novoPreco = produto.desconto ? produto.preco * 0.9 : produto.preco

//   return {
//     id: produto.id,
//     nome: produto.nome,
//     preco: novoPreco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
//     quandidade: produto.quantidade
//   }
// })

// console.log(novosProdutos)

// //REDUCE
// const totalVendas = produtos.reduce((acumulador, produto) =>{
//   return acumulador + (produto.preco * produto.quantidade)
// }, 0)

// console.log(totalVendas.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}))

// //FILTER

// const promocao = produtos.filter(produto => produto.desconto)

//adicionar mais + 10 em cada produto
//filtrar so os que tem desconto true
//saber qual é o faturamento total se vender apenas os que estao com desconto true

const faturamentoTotal = produtos.map(produto => {
  return { ...produto, quantidade: produto.quantidade + 10 }
}).filter(produto => produto.desconto).reduce((acumulador, produto) => acumulador + (produto.quantidade * produto.preco), 0)

console.log(faturamentoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))


//verificador de palindromo
/*Desafio 1: O Verificador de Palíndromo
(Nível de Dificuldade: Básico-Intermediário)

Um palíndromo é uma palavra ou frase que pode ser lida da mesma forma de trás para frente (ex: "ovo", "reviver", "arara").

O objetivo: Crie uma função que recebe uma string como parâmetro e retorna true se a string for um palíndromo e false caso contrário.

Dica: Você pode converter a string para um array, reverter a ordem dos elementos e depois juntá-los novamente.
O método .split(), .reverse() e .join() podem ser muito úteis.
Lembre-se de ignorar espaços e maiúsculas/minúsculas.*/
function verificarPalindromo(frase) {
  const limpar = frase.toLowerCase().replaceAll(' ', '')

  const inverter = limpar.split('').reverse().join('')
  if (limpar === inverter) {
    console.log(`${limpar} é um palindromo`)
  } else {
    console.log(`${limpar} nao é um palindromo`)
  }
}

console.log(verificarPalindromo('socorram me subi no onibus em marrocos'))


/*Desafio 2: Encontrando o Valor Único
(Nível de Dificuldade: Intermediário)

O objetivo: Crie uma função que recebe um array de números inteiros. Todos os números aparecem duas vezes, exceto um. A função deve retornar o número que aparece apenas uma vez.

Exemplo: [1, 2, 2, 3, 3] deve retornar 1.

Dica: Você pode usar um loop (for) e o operador de xor (^), ou pode usar a lógica que você já domina: criar um objeto para contar as ocorrências de cada número e depois encontrar o que tem contagem 1. */



function encontrarValor(numeros) {
  let contador = {}
  numeros.forEach((numero) => {
    if (contador[numero]) {
      contador[numero]++
    } else {
      contador[numero] = 1
    }
  })

  for (const numero in contador) {
    if (contador[numero] === 1) {
      return parseInt(numero)
    }
  }
}

const meuArray = [7, 2, 2, 3, 3]

console.log(encontrarValor((meuArray)))
