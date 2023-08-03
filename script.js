$(document).ready(function() {
    // Adicionar a tarefa à lista
    function adicionarTarefa(nomeTarefa) {
      const itemLista = $('<li></li>').text(nomeTarefa);
      $('#listaTarefas').append(itemLista);
    }
  
    // Marcar uma tarefa como concluída
    function marcarTarefaConcluida() {
      $(this).toggleClass('concluida');
      verificarTodasTarefasConcluidas();
    }
  
    // Verificar se todas as tarefas foram concluídas
    function verificarTodasTarefasConcluidas() {
      const totalTarefas = $('#listaTarefas li').length;
      const tarefasConcluidas = $('#listaTarefas li.concluida').length;
  
      if (totalTarefas === tarefasConcluidas) {
        $('#botaoNovaLista').show();
        alert('Parabéns! Todas as tarefas foram concluídas!');
      }
    }
  
    //Adicionar a tarefa ao formulário
    $('#formTarefa').submit(function(event) {
      event.preventDefault();
      const nomeTarefa = $('#nomeTarefa').val().trim();
  
      if (nomeTarefa !== '') {
        const tarefasExistentes = $('#listaTarefas li').map(function() {
          return $(this).text().trim().toLowerCase();
        }).get();
  
        if (tarefasExistentes.includes(nomeTarefa.toLowerCase())) {
          alert('Essa tarefa já foi adicionada anteriormente!');
        } else {
          adicionarTarefa(nomeTarefa);
          $('#nomeTarefa').val('');
        }
      }
    });
  
    // Marcar a tarefa como concluída ao clicar nela
    $(document).on('click', 'li', marcarTarefaConcluida);
  
    // Criar uma nova lista (apagar todas as tarefas)
    $('#botaoNovaLista').click(function() {
      $('#listaTarefas').empty();
      $(this).hide();
    });
  });
  