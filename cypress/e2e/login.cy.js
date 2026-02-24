// M.12 - A.1 - Comandos Customizados

///<reference types="cypress"/>
import user from "../fixtures/usuario.json"
import loginPage from "../support/pages/login-page";

describe('Funcionalidade: Login', () => {
  beforeEach(() => {
    loginPage.visitarPaginaLogin()
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
it('Deve fazer login com sucesso, usando importação de massa de dados', () => {
     cy.login(user.email, user.senha)
  });

// Login importando da classe LoginPage
it.only('Deve fazer login, utilizando a LoginPage', () => {
  loginPage.preencherLogin('usuario@teste.com', 'user123')
});


});