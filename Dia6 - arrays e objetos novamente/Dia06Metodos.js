let usuarios = [
  { nome: 'Felipe', idade: 23, salario: 3000, active: true, team: 'frontend' },
  { nome: 'Giselly', idade: 24, salario: 4000, active: false, team: 'frontend' },
  { nome: 'Joao', idade: 28, salario: 2000, active: true, team: 'backend' },
  { nome: 'Freires', idade: 33, salario: 1500, active: false, team: 'backend' },
  { nome: 'Maria', idade: 20, salario: 5000, active: true, team: 'frontend' }
]

//find
//para de percorrer ate achar apenas o PRIMEIRO item que encontrar
/*
const users = usuarios.find((user) => {
  return user.salario > 3000
})

console.log(users)*/
//vai devolver um array conforme a condiçao passada
/*
const users = usuarios.filter((user) => {
  return user.idade > 20 && user.team === 'frontend'
})

console.log(users)*/

//findIndex
//encontrar a posicao de um item dentro do array
/*
const users = usuarios.findIndex((user) =>{
  return user.nome === 'Maria'
})
console.log(users)
//manipulaçao de dados com o FindIndex
console.log(usuarios[users].salario = 3000)
console.log(usuarios)*/

//map

//ex1
/*const salario = usuarios.map((user) => {
  return `ola ${user.nome} seu salario é ${user.salario} R$`
})

console.log(salario)*/

//ex2 de map
/*const users = usuarios.map((user) => {
  if(user.salario <= 2000 && user.active === true){
    user.salario += 500
  }

  return {
    nome: user.nome,
    salario: user.salario,
    team: user.team,
    active: user.active
  }

})

console.log(users)*/

//some (nao é somar) - some(algum) verifica se tem pelomenos um item que condiz com a condiçao 
/*const userActive = usuarios.some((user) => {
  return user.active === false

})

console.log(userActive)

if (userActive === false) {
  console.log('tem pessoas inativas trabalhando')
} else {
  console.log('todo mundo esta ativo')
}*/

//every (todos os itens da lista tem que satisfazer a condiçao para que seja true)

/*const userActive = usuarios.every((user)=>{
  return user.active === true
})

console.log(userActive);*/

//reduce

const users = usuarios.reduce((acumulador, user) => {
  return acumulador += user.salario
}, 0)

console.log(`o total do salario de todos os usuarios é ${users}`)