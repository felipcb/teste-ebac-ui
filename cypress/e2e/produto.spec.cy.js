/// <reference types = "cypress"/>

describe('Funcionalida Pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(4) *a contagem de itens começa do 0. Nesse exemplo o '4' pega o Quinto item da lista
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it.only('Deve adicionar item ao carrinho', () => {
        cy.get('.product-block')
            .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()


    })


});