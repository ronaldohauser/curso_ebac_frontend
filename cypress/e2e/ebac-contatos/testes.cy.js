/// <reference types="cypress" />

describe('Testes da Agenda de Contatos', () => {
    
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.screenshot('pagina_inicial')
    })

    it('Teste de Sanidade', () => {
        cy.get('header > h1').should('have.length.greaterThan', 0)
        cy.get('form > input').should('have.length', 3)
        cy.screenshot('teste_sanidade')
    })

    it('Adicionar Novo Contato', () => {
        preencherFormulario('Ronaldo Dias', 'ronaldo.dias@teste.com.br', '11 123456789')
        cy.get('.adicionar').click()
        cy.screenshot('novo_contato_adicionado')
    })  
    
    it('Habilitar Edição', () => {
        editarPrimeiroContato()
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
        cy.screenshot('edicao_habilitada')
    })

    it('Alterar Primeiro Contato Relacionado', () => {
        editarPrimeiroContato()
        preencherFormulario('Aline Dias', 'aline.dias@ebac.com.br', '11 987654321')
        cy.get('.alterar').click()
        cy.screenshot('contato_alterado')
    })

    it('Deletar Contato', () => {
        cy.get('.delete').last().click()
        cy.screenshot('contato_deletado')
    })

    function preencherFormulario(nome, email, telefone) {
        cy.get('[type="text"]').type(nome)
        cy.get('[type="email"]').type(email)
        cy.get('[type="tel"]').type(telefone)
        cy.wait(1000)
    }

    function editarPrimeiroContato() {
        cy.get('.edit').first().click()
        cy.wait(1000)
    }
})
