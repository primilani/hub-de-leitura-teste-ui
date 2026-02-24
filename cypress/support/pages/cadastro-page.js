//M.12 - A.4 - Page Objects

class CadastroPage {

    //Seletores
    campoNome() { return cy.get('#name') } // Dando nome para o seletor
    campoEmail() { return cy.get('#email') }
    campoTelefone() { return cy.get('#phone') }
    campoSenha() { return cy.get('#password') }
    campoConfirmarSenha() { return cy.get('#confirm-password') }
    checkTermos() { return cy.get('#terms-agreement') }
    botaoCriarConta() { return cy.get('#register-btn') }

    //Métodos
    visitarPaginaCadastro() {
        cy.visit('register.html')
    }

    preencherCadastro(nome, email, telefone, senha, confirmaSenha) {
    // if(nome) this.campoNome().clear().type(nome) //If para aceitar a string vazia
        this.campoNome().clear().type(nome)
        this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        this.campoSenha().clear().type(senha)
        this.campoConfirmarSenha().clear().type(confirmaSenha)
        this.checkTermos().check()
        this.botaoCriarConta().click()
    }

}
export default new CadastroPage()