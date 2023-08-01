const formulario = document.getElementById('meuFormulario');
const mensagemDiv = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtem os valores dos campos de entrada
  const campoA = parseInt(document.getElementById('campoA').value);
  const campoB = parseInt(document.getElementById('campoB').value);

  // Verifica se o número B é maior que o número A
  if (campoB > campoA) {
    // Se for válido, exibe mensagem de sucesso
    mensagemDiv.innerText = 'Formulário válido! B é maior que A.';
    mensagemDiv.classList.add('mensagem-sucesso');
    mensagemDiv.classList.remove('mensagem-erro');
  } else {
    // Se for inválido, exibe mensagem de erro
    mensagemDiv.innerText = 'Formulário inválido! B deve ser maior que A.';
    mensagemDiv.classList.add('mensagem-erro');
    mensagemDiv.classList.remove('mensagem-sucesso');
  }
});
