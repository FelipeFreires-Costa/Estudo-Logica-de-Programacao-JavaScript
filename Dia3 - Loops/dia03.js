/*
Desafio 1 – Contagem simples
👉 Imprima os números de 1 a 10 no console usando for.
Explicação: aqui você já sabe o começo (1) e o fim (10).
*/

for(let i = 1; i <= 10; i++){
  console.log(i)
}

/*
Desafio 2 – Apenas números pares
👉 Mostre os números pares de 0 até 20 usando for.
Dica: use i % 2 === 0 pra saber se um número é par.
*/

for(let i = 0; i <= 20; i++){
  if(i % 2 === 0){
    console.log(i)
  }
}

/*
Desafio 3 – Tabuada
👉 Peça a tabuada do número 7 no console, mostrando de 1 até 10.
Exemplo esperado:
*/

for (let i = 1; i <= 10; i++){
  let resultado = 7 * i
  console.log(`7 x ${i} = ${resultado}`)
}

/*
Some todos os números de 1 até 100 usando um loop.
Explicação: você precisa de uma variável acumuladora (let soma = 0) e ir somando dentro do loop.
*/
let soma = 0

for (let i = 1; i <= 100; i++) {
  soma = soma + i
}

console.log("A soma de 1 até 100 é:", soma)

/*
Desafio 5 – Login com tentativas
👉 Simule um login que dá 3 tentativas para o usuário acertar a senha (senha123).
Se errar as 3 vezes → mostrar "Acesso bloqueado".
Se acertar antes das 3 → mostrar "Bem-vindo".
Aqui você vai precisar de while ou for.


let usuarioCorreto = "admin"
let senhaCorreta = "1234"
let tentativas = 0

while(tentativas < 3){
  let usuario = prompt()
  let senha = prompt()

  if(usuario === usuarioCorreto && senha === senhaCorreta){
    console.log('login bem sucedido')
    break
  } else{
    console.log("usuario ou senha incorretos")
    tentativas++
  }

  if(tentativas === 3){
    console.log("conta bloqueada")
  }
}
*/

/*
“Peça ao usuário para adivinhar um número secreto entre 1 e 10. Ele tem no máximo 3 tentativas. Se acertar, mostre uma mensagem de vitória, se não, mostre que perdeu.”


let numeroCorreto = "4"
let tentativa = 0

while(tentativa < 3){
  let numero = "1234"
  
  if(numero === numeroCorreto){
    console.log('vitoria')
    break
  }else{
    console.log(`derrota, tente denovo` )
    tentativa++
  }
}  
if(tentativa === 3){
    console.log("voce perdeu")
  }
*/

/* 
Você vai criar um sistema de login mais realista, com essas regras:

Usuário correto: "admin"
Senha correta: "1234"

O usuário tem no máximo 3 tentativas para acertar login e senha.

Além disso, não pode deixar usuário ou senha vazios (se estiver vazio, mostrar mensagem e não contar tentativa).

Mensagens:

Se acertar → "Login bem-sucedido!"

Se errar → "Usuário ou senha incorretos"

Se ficar sem tentativas → "Conta bloqueada"

Se algum campo estiver vazio → "Preencha todos os campos"
*/

let usuarioCorreto = "admin"
let senhaCorreta = "1234"
let tentativas = 0

while(tentativas < 3){
  let usuario = "1234"
  let senha = "1234"
  if(usuario === "" || senha === ""){
    console.log("Preencha todos os campos")
  }else if(usuario === usuarioCorreto && senha === senhaCorreta){
    console.log("login bem sucedido")
    break
  }else{
    console.log("Tente novamente")
    tentativas++
  }
}

if(tentativas === 3){
  console.log("Conta bloqueada")
}

