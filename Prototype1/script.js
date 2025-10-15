// function Pessoa(nome, idade){
//   this.nome = nome;
//   this.idade = idade
// }

// Pessoa.prototype.andar = function(){
//   return  this.nome + ' Pessoa andou'
// }

// const felipe = new Pessoa('felipe', 23)

// console.log(Pessoa.prototype) 




//-----------------------------------------
//nodeList
// const lista = document.querySelectorAll('li')

// //transformar uma nodeList em array
// const listaArray = Array.from(lista)

// const Carro = {
//   marca: 'ford',
//   preco: 2000,
//   andar(){
//     return true
//   }
// }

//EXERCICIOS

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
class Pessoa1{
  constructor(nome, sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}

Pessoa1.prototype.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`
}

const felipePessoa = new Pessoa1 ('Felipe', 'Freires da costa', 23)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;//HTML Element
li.click;//Function
li.innerText;//string
li.value;//number
li.hidden;//boolean
li.offsetLeft;//
li.click();//undeffined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;//string motivo: a saida é 'boolean' uma string
