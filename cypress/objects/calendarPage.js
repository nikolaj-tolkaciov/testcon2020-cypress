class CalendarPage{

    getPageTitle(){
        return cy.get('.page__title')
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    getForm(){
        return cy.get('.tile.form')
    }

    getCalendarHeader(){
        return cy.get('.calendar__header')
    }

    getTodayDate(){
        return cy.get('.calendar--today')
    }

    getUserInfo(){
        return cy.get('.user-info__title')
    }

    getMenuItemsCount(){
        return cy.get('.main-nav').find('li')
    }

    getTimeLoggingTitle(){
        return cy.get('[aria-labelledby="timeLoggingId"]')
    }

    getLogout(){
        return cy.get('.btn__list-item').contains('Log Out')
    }

}

export default CalendarPage