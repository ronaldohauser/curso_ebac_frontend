$(document).ready(function () {
  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00', { reverse: true });
  $('#cep').mask('00000-000');

  $('#cadastroForm').submit(function (event) {
    event.preventDefault();

    const form = event.target;
    if (form.checkValidity()) {
      alert('Cadastro realizado com sucesso!');
      form.reset();
    }
  });
});
