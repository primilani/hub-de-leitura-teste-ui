// AULA 5/6 - Massa de dados Fake


// Biblioteca do cypress
/// <reference types="cypress"/> 
import { faker, Faker } from "@faker-js/faker";  // Biblioteca para dados fakes
import cadastroPage from "../support/pages/cadastro-page";

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    it('Deve fazer cadastro com sucesso , usando funcao JS', () => {
        let email = `teste${Date.now()}@teste.com` // variavel para geral um numero aleatoriamente
        cy.get('#name').type('Priscila Milani')
        cy.get('#email').type(email)
        cy.get('#phone').type('51999990067')
        cy.get('#password').type('Senha@123')
        cy.get('#confirm-password').type('Senha@123')
        cy.get('#terms-agreement').check() // Tambem da certo com 'Click'
        cy.get('#register-btn').click()
        // Rsultado esperado
        cy.url().should('include', 'dashboard')
    });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('51999990067')
        cy.get('#password').type('Senha@123')
        cy.get('#confirm-password').type('Senha@123')
        cy.get('#terms-agreement').check() // Tambem da certo com 'Click'
        cy.get('#register-btn').click()
        // Rsultado esperado
        cy.url().should('include', 'dashboard')
        cy.get('#user-name').should('contain', nome)
    });

    it('Deve preencher cadastro com sucesso - Usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({ sex: "female" })
        cy.preencherCadastro(
            nome,
            email,
            '5138698567',
            'Teste@123',
            'Teste@123'
        )
        cy.url().should('include', 'dashboard')
    });

    //M.12 - A.4 - Page Objects

    it('Deve fazer cadastro com sucesso usando Page Objects', () => {
        let email = `teste${Date.now()}@teste.com`
        cadastroPage.preencherCadastro('Priscila Milani', email, '5138698567', 'pri@123', 'pri@123')
        cy.url().should('include', 'dashboard')
    });

    it('Deve validar mensagem ao tentar cadastrar, sem preencher nome', () => {
        let email = faker.internet.email()
        cadastroPage.preencherCadastro('', email, '5133448672', 'Teste@teste1', 'Teste@teste1')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

    it.only('Deve validar mensagem de senha fraca', () => {
        let email = faker.internet.email()
        let nome = faker.person.fullName()
        cadastroPage.preencherCadastro(nome, email, '5133448672', 't1', 't1')
        cy.get('#password-feedback').should('contain', 'Senha fraca - use letras maiúsculas e números')
    });


    //cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
});
