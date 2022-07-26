/// <reference types="cypress" />

context('Funcionalidade Login', () =>{

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválidos', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('ste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error').should('contain', 'Erro:')
    
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario inválidos', () =>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('este@teste.com')
        cy.get('.woocommerce-form > .button').click ()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha')
    })    
        
})