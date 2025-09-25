//SEPARAR OS NUMEROS POR PARES E IMPARES

//criei um array de numeros
const numeros = [1, 5, 8, 12, 45, 87, 234, 676, 10, 65, 23]

//fiz dois arrays vazios para receber os numeros
const pares = []
const impares = []

//percorri o array de numeros
  numeros.forEach((numero) => {
    //verifiquei se os numeros do array numeros sao igual a o resto da divisao por 2
    if (numero % 2 === 0) {
      //se sim, o array pares recebe os numeros pares para dentro dele
      pares.push(numero)
    } else {
      //os que nao for par, o array impares recebe os numeros que sobraram
      impares.push(numero)
    }
  })

console.log(pares, impares)