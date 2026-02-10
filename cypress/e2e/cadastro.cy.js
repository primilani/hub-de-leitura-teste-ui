// AULA 5/6 - Massa de dados Fake


// Biblioteca do cypress
/// <reference types="cypress"/> 
import { faker, Faker } from "@faker-js/faker";  // Biblioteca para dados fakes

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('register.html')
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
});