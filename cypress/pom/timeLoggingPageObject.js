class TimeLoggingPage {

    getCalendar(){
        return cy.get('.calendar')
    }

    getTileForm(){
        return cy.get('.tile.form')
    }

}

export default TimeLoggingPage