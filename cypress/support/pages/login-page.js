class LoginPage {

    // Seletores
    campoEmail() { return cy.get('#email') }
    campoSenha() { return cy.get('#password') }
    botaoEntrar() { return cy.get('#login-btn') }

    // Métodos
    visitarPaginaLogin() {
        cy.visit('login.html')
    }

    preencherLogin(email, senha) {
        this.campoEmail().clear().type(email)
        this.campoSenha().clear().type(senha)
        this.botaoEntrar().click()
    }
}
export default new LoginPage()