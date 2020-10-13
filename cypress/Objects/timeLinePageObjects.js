class TimeLine{
    
   getCalendar(){
       return cy.get('.calendar')
   }
    
   getTitleForm(){
       return cy.get('.tile.form')
   }

   getUserInfo() {
       return cy.get('.user-info__title')
   }

   getNavigationElements(){
       return  cy.get('.main-nav').find('li')
   }
   
   getCalendarDate() {
        return cy.get('.calendar--selected .calendar__date')
   }

   getUserContextMenuButons () {
        return  cy.get('[type="button"]')
   }

   getTimeLogInID () {
    return cy.get('[aria-labelledby="timeLoggingId"]')
   }

}

export default TimeLine