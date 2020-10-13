class TimeLoggingPage {
    calendarShouldbeVisible(){
        cy.get('.calendar').should('be.visible')
    }

    getTileForm() {
        return  cy.get('.tile.form')
    }

    getUserTitle() {
        return cy.get('.user-info__title')
    }

    getHeaderMenu() {
        return  cy.get('.main-nav').find('li')
    }

    getSelectedDay(){
        return  cy.get('.calendar--selected')
    }
}

export default TimeLoggingPage