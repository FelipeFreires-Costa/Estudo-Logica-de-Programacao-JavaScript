const comida = 'pizza'
const agua = new String('Agua')


//pega o ultimo index da string, saida: a
console.log(comida[comida.length -1])

console.log(comida.charAt(2))


//Concatena as strings e retorna o resultado.
const frase = 'A melhor linguagem é '
const linguagem = 'JavaScript'

const fraseFianl = frase.concat(linguagem, 'ola mundo')


//Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = 'banana'
const listaFrutas = 'melancia, banana, laranja'

console.log(listaFrutas.includes(fruta))


//Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';

listaItens = listaItens.replace(/[ ]+/g, ', ')

//Divide a string de acordo com o padrão passado e retorna uma array.
//com minhas palavras, dentro do split é para selecionar onde o array vai ser dividido, por exemplo a ', ' remove a ', ' e separa cada item
const arrayLista = listaItens.split(', ')
console.log(arrayLista)


const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';

const htmlArray = htmlText.split('div')
console.log(htmlArray)

//.trim() remove os espaços