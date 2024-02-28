/// <reference types="cypress" />

describe('Testes da Agenda de Contatos', () => {
    
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.screenshot('pagina_inicial')
    })

    // Executando o teste de sanidade
    it('Deve teste a sanidade da página', () => {
        // Verificando a presença dos elementos na página
        cy.get('header > h1').should('have.length.greaterThan', 0)
        cy.get('form > input').should('have.length', 3)
        cy.screenshot('teste_sanidade')
    })

    // Adicionando novo contato
    it('Deve adicionar um novo contato', () => {
        // Sinalizando a quantidade inicial de contatos
        cy.get('.contato').then(contatos => {
            const quantidadeContatosInicial = contatos.length
    
            // Preenchendo o formulário e então clicar no botão de adicionar
            preencherFormulario('Ronaldo Dias', 'ronaldo.dias@teste.com.br', '11 123456789')
            cy.get('.adicionar').click()
    
            // Aguardando a adição do novo contato
            cy.get('.contato').should('have.length', quantidadeContatosInicial + 1).last().as('novoContato')
    
            // Validando os detalhes do novo contato adicionado
            cy.get('@novoContato').contains('Ronaldo Dias')
            cy.get('@novoContato').contains('ronaldo.dias@teste.com.br')
            cy.get('@novoContato').contains('11 123456789')
    
            cy.screenshot('novo_contato_adicionado')
        })
    })
    
    // Habilitanto a edição
    it('Deve habilitar edição', () => {
        // Chamando a função para habilitar a edição do primeiro contato
        editarPrimeiroContato()
        // Verificando se os campos estão habilitados para edição
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
        cy.screenshot('edicao_habilitada')
    })

    // Alterando o primeiro contato relacionado
    it('Deve alterar o primeiro contato relacionado', () => {
        // Chamando a função para editar o primeiro contato
        editarPrimeiroContato()
    
        // Preenchendo o formulário com novos os valores
        preencherFormulario('Aline Dias', 'aline.dias@ebac.com.br', '11 987654321')
    
        // Clicando no botão de alterar
        cy.get('.alterar').click()
    
        // Obtendo o primeiro contato após a alteração e validando os campos
        cy.get('.contato').first().contains('Aline Dias')
        cy.get('.contato').first().contains('aline.dias@ebac.com.br')
        cy.get('.contato').first().contains('11 987654321')
    
        cy.screenshot('contato_alterado')
    })

// Deletando o contato
it('Deve deletar o contato', () => {
    // Obtendo a quantidade inicial de contatos
    cy.get('.contato').then(contatos => {
        const quantidadeContatosInicial = contatos.length

        // Clicando no botão de deletar do último contato
        cy.get('.delete').last().click()

        // Aguardando até que o último contato seja removido
        cy.get('.contato').should('have.length', quantidadeContatosInicial - 1)
        cy.screenshot('contato_deletado')
    })
})

    // Preenchendo o formulário
    function preencherFormulario(nome, email, telefone) {
        cy.get('[type="text"]').clear().type(nome)
        cy.get('[type="email"]').clear().type(email)
        cy.get('[type="tel"]').clear().type(telefone)
        cy.wait(1000)
    }    

    // Habilitando a edição do primeiro contato
    function editarPrimeiroContato() {
        cy.get('.edit').first().click()
        cy.wait(1000)
    }
})
