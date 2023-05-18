
const tabelaAlunos = document.querySelector('#alunos tbody');
const imprimirPdfBtn = document.querySelector('.imprimir-pdf');


function scriptCadAluno() {
  const nome = document.querySelector('#nome').value;
  const rm = document.querySelector('#rm').value;
  const serie = document.querySelector('#serie').value;
  const data = document.querySelector('#data').value;
  const condutor = document.querySelector('#condutor').value;
  const professor = document.querySelector('#professor').value;
  const tipo = document.querySelector('#tipo').value;
  const pago = document.querySelector('#pago').checked;
  const recibo = document.querySelector('#recibo').value;
  const observacao = document.querySelector('#observacao').value;

  const novoAluno = {
    nome: nome,
    rm: rm,
    serie: serie,
    data: data,
    condutor: condutor,
    professor: professor,
    tipo: tipo,
    pago: pago,
    recibo: recibo,
    observacao: observacao
  };

  adicionarAlunoNaTabela(novoAluno);
  limparFormulario();
}

function adicionarAlunoNaTabela(aluno) {
  const linha = tabelaAlunos.insertRow();
  const colunaNome = linha.insertCell();
  const colunaRM = linha.insertCell();
  const colunaSerie = linha.insertCell();
  const colunaData = linha.insertCell();
  const colunaCondutor = linha.insertCell();
  const colunaProfessor = linha.insertCell();
  const colunaTipo = linha.insertCell();
  const colunaPago = linha.insertCell();
  const colunaRecibo = linha.insertCell();
  const colunaObservacao = linha.insertCell();

  colunaNome.textContent = aluno.nome;
  colunaRM.textContent = aluno.rm;
  colunaSerie.textContent = aluno.serie;
  colunaData.textContent = aluno.data;
  colunaCondutor.textContent = aluno.condutor;
  colunaProfessor.textContent = aluno.professor;
  colunaTipo.textContent = aluno.tipo;
  colunaPago.textContent = aluno.pago ? 'Sim' : 'Não';
  colunaRecibo.textContent = aluno.recibo;
  colunaObservacao.textContent = aluno.observacao;
}

function limparFormulario() {
  document.querySelector('#nome').value = '';
  document.querySelector('#rm').value = '';
  document.querySelector('#serie').value = '';
  document.querySelector('#data').value = '';
  document.querySelector('#condutor').value = '';
  document.querySelector('#professor').value = '';
  document.querySelector('#tipo').value = 'regular';
  document.querySelector('#pago').checked = false;
  document.querySelector('#recibo').value = '';
  document.querySelector('#observacao').value = '';
}
