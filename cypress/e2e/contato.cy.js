
// AULA 03 - Primeiro Teste Automatizado **

describe('Funcionalidade: Contato', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/index.html');
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    // 'IT', são os cenários de testes
    cy.get('[name="name"]').type('Priscila Milani');
    cy.get('[name="email"]').type('priscila@teste.com');
    cy.get('[name="subject"]').select('Parcerias');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();

    // Resultado esperado
    cy.contains('Contato enviado com sucesso! ').should('exist');

  })

  // AULA 04 - Cenários Negativos **

  it('Deve validar mensagem de erro, ao enviar mensagem sem preencher o campo NOME', () => {
    cy.get('[name="email"]').type('priscila@teste.com');
    cy.get('[name="subject"]').select('Parcerias');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();

    // Resultado Esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome');
  });

  it('Deve validar mensagem de erro, ao enviar mensagem sem preencher o campo EMAIL', () => {
    cy.get('[name="name"]').type('Priscila Milani');
    cy.get('[name="email"]').clear();
    cy.get('[name="subject"]').select('Parcerias');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();

    //Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail');
  });

  it('Deve validar mensagem de erro, ao enviar mensagem sem selecionar o ASSUNTO', () => {
    cy.get('[name="name"]').type('Priscila Milani');
    cy.get('[name="email"]').type('priscila@teste.com');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();

    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto');
  });

  it('Deve validar mensagem de erro, sem preencher o campo de MENSAGEM', () => {
    cy.get('[name="name"]').type('Priscila Milani');
    cy.get('[name="email"]').type('priscila@teste.com');
    cy.get('[name="subject"]').select('Suporte Técnico');
    cy.get('#btn-submit').click();

    // Resultado esperado
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem');

  });

});