// M.12 - A.1 - Comandos Customizados

///<reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    cy.visit('index.login');
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
    cy.url().should('include', 'dashboard')
  });

  it('Deve fazer login com seucesso, usando comando customizado', () => {
    cy.login('usuario@teste.com', 'user123')  
  });

  it('Deve fazer login com sucesso, com a conta ADMIN', () => {
    cy.login('admin@biblioteca.com', 'admin123')   
  });

// M.12 - A.2 - Massa de dados em arquivo
it.only('Deve fazer login com sucesso, usando importação de massa de dados', () => {
     cy.login(user.email, user.senha)
  });



});