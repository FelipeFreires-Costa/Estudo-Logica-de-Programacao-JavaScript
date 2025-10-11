
/*
Desafios do Dia 2
1. Notas de um aluno
Crie uma variável nota.
Se a nota for maior ou igual a 7, mostre "Aprovado".
Se for maior ou igual a 5 e menor que 7, mostre "Recuperação".
Caso contrário, mostre "Reprovado".
*/

let nota = 6

if (nota >= 7) {
  console.log("aprovado")
} else if (nota >= 5 && nota < 7) {
  console.log("recuperaçao")
} else {
  console.log("reprovado")
}

/*
Login simples
Crie duas variáveis: usuario e senha
Se usuario for "admin" e a senha for "1234", mostre "Login bem-sucedido".
Caso contrário, mostre "Usuário ou senha incorretos".
👉 Dica: use && (E lógico).
*/

let usuario = "admin"
let senha = "1234"

if (usuario === "admin" && senha === "1234") {
  console.log('Login bem-sucedido')
} else {
  console.log('usuario ou senha incorretos')
}

/*
Desconto em loja
Crie uma variável valorCompra.
Se o valor for maior ou igual a 100, dê 10% de desconto.
Mostre o valor final no console.
*/

let valorCompra = 78


if (valorCompra >= 100) {
  let valorDesconto = valorCompra * 0.9
  console.log(`Compra aprovada, voce teve 10% de desconto, valor final: ${valorDesconto}`)
} else {
  console.log("faça uma compra acima de 99R$ para ter desconto")
}

/* 
---EXTRA---
1. Verificação de idade
Crie um programa que recebe a idade de uma pessoa:
Se tiver menos de 12 anos → "Criança"
Se tiver entre 12 e 17 → "Adolescente"
Se tiver entre 18 e 59 → "Adulto"
Se tiver 60 ou mais → "Idoso"
*/

let idade = 78

if (idade < 12) {
  console.log('criança')
} else if (idade >= 12 && idade <= 17) {
  console.log("adolescente")
} else if (idade >= 18 && idade <= 59) {
  console.log("adulto")
} else {
  console.log("idoso")
}

/* 
2.Caixa eletrônico
Crie um programa que verifica o valor do saque:
Se o valor for menor que 20 → "Valor mínimo para saque é R$20"
Se for maior que 2000 → "Valor máximo de saque é R$2000"
Caso contrário → "Saque realizado com sucesso"
*/

let saque = 2002

if (saque < 20) {
  console.log("Valor minimo para saque é 20")
} else if (saque > 2000) {
  console.log('Valor maximo de saque é 2000')
} else {
  console.log("Saque realizado com sucesso")
}


/*
Acesso a cinema

Um cinema dá desconto em duas situações:

Pessoas com idade até 12 anos OU idade acima de 60

Caso contrário, paga inteira

Mostre na tela: "Desconto aplicado" ou "Ingresso inteiro".

*/

let idadePessoa = 17

if (idadePessoa <= 12 || idadePessoa >= 60) {
  console.log("Desconto aplicado")
} else {
  console.log("ingresso inteiro")
}

/*
4. Número par ou ímpar
Receba um número e diga se ele é par ou ímpar.
(Dica: use o operador % de resto da divisão).
*/

let num = 1489242

if (num % 2 === 0) {
  console.log("o numero é par")
} else {
  console.log("numero é impar")
}


/*
5. Sistema de notas (extra)
Receba uma nota entre 0 e 10:
9 ou 10 → "Excelente"
7 ou 8 → "Bom"
5 ou 6 → "Razoável"
Abaixo de 5 → "Insuficiente"  
*/

let nota2 = 2

if (nota2 === 9 || nota2 === 10) {
  console.log('Exelente')
} else if (nota2 === 7 || nota2 === 8) {
  console.log("bom")
} else if (nota2 === 5 || nota2 === 6) {
  console.log("razoavel")
} else if (nota2 < 5) {
  console.log("insuficiente")
}

/* 
Desafio Prático:
Crie um array de objetos, onde cada objeto é um aluno com nome e nota.
Crie uma função que percorra este array e exiba no console se o aluno foi "Aprovado" (nota >= 7) ou "Reprovado" (nota < 7).
*/


