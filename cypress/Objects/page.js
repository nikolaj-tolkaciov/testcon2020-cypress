class Page {
    getPageTitle(){
        return cy.get('.page__title')
    }

    getUrl() {
        return cy.url()
    }

}

export default Page