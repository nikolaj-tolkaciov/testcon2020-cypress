class CalendarPage {
    getCalendar(){
        return cy.get('.calendar')
    }
    getCalendarBody(){
        return cy.get('.calendar__body')
    }
    getSelectedCalendarDay(){
        return cy.get('.calendar--selected')
    }
    
}
export default CalendarPage