// M.12 - A.2 - Massa de dados em arquivo

/// <reference types="cypress"/> 
import catalogo from "../fixtures/livros.json" //onde criamos a massa de dados para a busca de livros

describe('Funcionalidade: Busca no catálogo', () => {
    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title').should('contain', '1984')
    });

    // Teste positivo
     it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(catalogo[2].livro)
        cy.wait(1000)
        cy.get('.card-title').should('not.contain',catalogo[1].livro)
    });

    //Teste negativo
     it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        cy.wait(1000)
        cy.get('.card-title').should('contain',catalogo[2].livro)
    });
});