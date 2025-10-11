function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade
}

Pessoa.prototype.andar = function(){
  return  this.nome + ' Pessoa andou'
}

const felipe = new Pessoa('felipe', 23)

console.log(Pessoa.prototype)