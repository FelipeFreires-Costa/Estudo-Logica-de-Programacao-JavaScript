// class Carro2{
//   constructor(marca, precoInicial){
//   this.taxa = 1.2
//   const precoFinal = precoInicial * this.taxa
//   this.marca = marca
//   this.preco = precoFinal
//   }

// }

// const honda = new Carro2('pisma', 5000)


// const Dom = {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor);
//   },
//   ativar(){
//   this.element().classList.add('ativar')
//   }
// }


// class Dom {
//   constructor(seletor) {
//     this.element = function () {
//       return document.querySelector(this.seletor);
//     }
//       this.ativar = function () {
//         this.element().classList.add('ativar')
//       }
//   }
// }

// const li = new Dom('li')

//---------------------------------------------------------------

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

class Pessoa {
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
      console.log(this.nome + this.idade + ' andou')
    }
  }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('João ', 20)
joao.andar()

const maria = new Pessoa('Maria ', 25)
maria.andar()

const bruno = new Pessoa('Bruno ', 15)
bruno.andar()

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

class Dom{
  constructor(seletor){
    const elementList = document.querySelectorAll(seletor)
    this.elements = elementList
    this.addClass = function(classe){
      elementList.forEach((element) =>{
        element.classList.add(classe)
      })
    }
    this.removeClass = function(classe){
      elementList.forEach((element) =>{
        element.classList.remove(classe)
      })
    }
  }
}

const listaItens = new Dom('li')
listaItens.addClass('ativar')

const removerItens = new Dom('li')
removerItens.removeClass('ativar')