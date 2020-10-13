class TimeLogging {

    getPageTitle(){
        return cy.get('.page__title')
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    getTitleForm(){
        return cy.get('.tile.form')
    }

    getUserTitle(){
        return  cy.get('.user-info__title')
    }

    getMainNavigationBar(){
        return cy.get('.main-nav').find('li')
    }

    getCalenderToday(){
        return cy.get('.calendar--today')
    }

    getCalendarSelected(){
        return cy.get('.calendar--selected')
    }

    getTimeLoggingLabel(){
        return cy.get('[aria-labelledby="timeLoggingId"]')
    }

}

export default TimeLogging