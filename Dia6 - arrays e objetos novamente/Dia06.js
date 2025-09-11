/*Desafio 1: Gerenciador de Tarefas (.forEach() e Objetos)
Crie um array chamado tarefas que armazene objetos. Cada objeto deve ter as seguintes propriedades:
id: um número único para a tarefa.
descricao: uma string com o que deve ser feito.
concluida: um booleano (true ou false).
Adicione 3 objetos de tarefas ao seu array.
Crie uma função marcarComoConcluida(idDaTarefa) que use o .find() para encontrar a tarefa com o ID fornecido e mude a propriedade concluida para true.
Crie outra função, mostrarTarefas(), que use o .forEach() para percorrer o array e exibir a descrição de cada tarefa. Se a tarefa estiver concluída, adicione o texto "[CONCLUÍDA]".*/

let tarefas = [
  { id: 1, desc: 'Estudar', conc: true },
  { id: 2, desc: 'comer', conc: false },
  { id: 3, desc: 'exercicios', conc: false },
  { id: 4, desc: 'tomar banho', conc: true }
]

function marcarComoConcluida(idDaTarefa) {
  const tarefaEncontrada = tarefas.find(tarefa => tarefa.id === idDaTarefa);

  if (tarefaEncontrada) {
    tarefaEncontrada.conc = true;
    console.log(`Tarefa com o id ${idDaTarefa} marcado como comcluido`)
  } else {
    console.log(`tarefa com o id ${idDaTarefa} nao encontrada`)
  }
}

function mostrarTarefas() {
  console.log('\n--- minhas tarefas ---')
  tarefas.forEach(tarefa => {
    const status = tarefa.conc ? "[CONCLUIDA]" : "[PENDENTE]"
    console.log(`${status} ${tarefa.desc}`)
  });
  console.log('-----------------------')
}

mostrarTarefas();
marcarComoConcluida(3);
mostrarTarefas();

/*Desafio 1: Boletim de Notas (com .map())
Usando o array alunos, crie um novo array que contenha apenas strings no formato "O(a) aluno(a) [nome do aluno] tirou nota [nota]". Use o método .map() para transformar cada objeto do array original em uma nova string.
Dica: Use o template literal (a crase `) para facilitar a criação da string.*/

let alunos = [
  {nome: 'Felipe', nota: 6, aprovado: false},
  {nome: 'Giselly', nota: 8, aprovado: false},
  {nome: 'Joao', nota: 5, aprovado: false},
  {nome: 'Maria', nota: 7, aprovado: false}
]

let boletim = alunos.map(aluno => `O(a) aluno(a) ${aluno.nome} tirou nota ${aluno.nota}`)
console.log(boletim)

/*Desafio 2: Atualizando o Status dos Alunos (com .forEach() e .filter())
Crie uma função chamada aprovarAlunos(). Dentro dela, use o método .forEach() para percorrer o array alunos.
Para cada aluno, verifique se a nota é maior ou igual a 7. Se for, mude a propriedade aprovado para true.
Depois de executar a função aprovarAlunos(), use o método .filter() para criar um novo array chamado alunosAprovados que contenha apenas os alunos com aprovado: true.
Exiba o array alunosAprovados no console. */

function aprovarAluno(){
  alunos.forEach(aluno =>{
    if(aluno.nota >= 7){
      aluno.aprovado = true
    }
  });
}

aprovarAluno()

let alunosAprovados = alunos.filter(aluno => aluno.aprovado === true);

console.log(alunosAprovados)

/*Desafio 3: Análise de Notas (com .reduce() e .some())
Este é um desafio duplo para testar seu conhecimento.
Parte A: Média da Turma (com .reduce())
Usando o método .reduce(), calcule a média das notas de todos os alunos. Lembre-se que a média é a soma de todas as notas dividida pelo número de alunos.
Parte B: Verificador de Aluno (com .some())
O método .some() é como o .find(), mas em vez de retornar o item, ele apenas verifica se pelo menos um item atende à sua condição e retorna um booleano (true ou false).
Use o método .some() para verificar se existe algum aluno com nota menor que 6. Exiba o resultado no console.*/

const mediaNotas = alunos.reduce((acumulador, aluno) => {
  return acumulador + aluno.nota
}, 0)

const media = mediaNotas / alunos.length;
console.log(media)

const alunoReprovado = alunos.some(aluno =>{ return aluno.nota < 6})

if(alunoReprovado){
  console.log("tem aluno reprovado")
}else{
  console.log('tem aluno aprovado')
}

