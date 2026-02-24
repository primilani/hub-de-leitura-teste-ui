// M.12 - A.2 - Massa de dados em arquivo

/// <reference types="cypress"/> 
import catalogo from "../fixtures/livros.json" //onde criamos a massa de dados para a busca de livros
import catalogoPage from "../support/pages/catalogo-page";

describe('Funcionalidade: Busca no catálogo', () => {
    beforeEach(() => {
        catalogoPage.acessarCatalogo()
    });

    afterEach(()=> { //tirar print de todos os testes
        cy.screenshot()
    })

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title').should('contain', '1984')
    });

    // Teste positivo
    it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(catalogo[2].livro)
        cy.wait(1000)
        cy.get('.card-title').should('not.contain', catalogo[1].livro)
    });
    //Teste negativo
    it('Deve fazer a busca de um livro do arquivo de massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        cy.wait(1000)
        cy.get('.card-title').should('contain', catalogo[2].livro)
    });

    // A.3 - Massa de dados com fixture"
    it('Deve fazer a busca de um livro usando FIXTURE', () => {
        cy.fixture('livros').then((cat) => { //carrega a lista de 'livros' .then(entao) organizo a sequencia dentro de uma função..
            cy.get('#search-input').type(cat[0].livro) // Ações
            cy.wait(1000)
            cy.get('.card-title').should('contain', cat[0].livro)
        })
    });

    it('Deve validar todos os livros da lista', () => {
        cy.fixture('livros').then((cat) => { //carrega a lista de 'livros' .then(entao) organizo a sequencia 
            cat.forEach(item => { //loop
                cy.get('#search-input').clear().type(item.livro) 
            //Validação
                cy.wait(1000)
                cy.get('.card-title').should('contain', item.livro)
            }) // Busca um livro, faz a validação, limpa e repete o processo ate terminar todos os livros do arquivo
        })
    });


    // Pesquisa usando Page Objects
    it('Deve pesquisar por titulos de livros usando Catalogo-Page', () => {
        catalogoPage.pesquisarTitulo('cem anos de solidão')
        cy.get('.card-title').should('contain', 'Cem Anos de Solidão')
    });

    it('Deve pesquisar pelo nome do autor, usando Catalogo-Page', () => {
        catalogoPage.pesuisaAutor('machado')
        cy.get('.mb-1').should('contain','Machado de Assis')    
    });

     it('Deve pesquisar pelo código do livro, usando Catalogo-Page', () => { // Nao pesquisa por ISBN
        catalogoPage.pesuisaCodigo('978-85-AUTO-0015-0') //livro a metamorfose
        
    });
});