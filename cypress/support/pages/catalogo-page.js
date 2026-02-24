class CatalogoPage {

    //Seletor
    campoPesquisa(){return cy.get('#search-input')}

// Metodo

acessarCatalogo(){
    cy.visit('catalog.html')
}

pesquisarTitulo(titulo){
this.campoPesquisa().clear().type(titulo)
}
pesuisaAutor(autor){
    this.campoPesquisa().clear().type(autor)
}
pesuisaCodigo(codigo){
    this.campoPesquisa().clear().type(codigo)
}

}
export default new CatalogoPage()