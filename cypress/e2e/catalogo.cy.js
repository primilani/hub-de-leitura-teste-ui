//AULA 7 - Elementos em listas

/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo de livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it.skip('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        // Resultado esperado
        cy.get('#cart-count').should('contain', 1)
    });

    it('Deve clicar em todos os botões e Adicionar à cesta', () => {
        cy.get('.btn-primary').click({ multiple: true })
    });

    it('Deve clicar no PRIMEIRO botão e Adicionar à cesta', () => {
        cy.get('.btn-primary').first().click()
    });

    it('Deve clicar no Último botão e Adicionar à cesta', () => {
        cy.get('.btn-primary').last().click()
    });

    it('Deve clicar no terceiro botão e Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(2).click()
    });

    it('Deve clicar no quinto botão e Adicionar à cesta', () => {
        cy.get('.btn-primary').eq(4).click()
        // Resultado esperado
        cy.get('#global-alert-container').should('contain', 'A Metamorfose')  
    });

    it('Deve clicar no nome do livro e direcionar para a tela do mesmo livro', () => {
        cy.contains('A Menina que Roubava Livros').click()
        cy.url().should('include', 'book-details')
        cy.get('#add-to-cart-btn').click()
        cy.get('#alert-container').should('contain', 'Livro adicionado')
    });



});