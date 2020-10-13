class LoginPage{
    visit() {
        cy.visit('/')
    }

    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }

    getLoginButton(){
        return cy.get('[type="submit"]')
    }

    getLoginFormUserId(){
        return cy.get('[id="loginForm.userId"]')
    }

    getUserName(userName){
        return cy.get('[aria-label="'+ userName +'"]')
    }

    getLoginFormRoleId(){
        return cy.get('[id="loginForm.role"]')
    }

    getUserRole(){
        return  cy.get('[aria-label="Team Lead"]')
    }

    getSubmitButton(){
        return cy.get('[type="submit"]')
    }

    getUrl(){
        return cy.url().should('include', '/time-logging')
    }

    getPageTitle(){
       return cy.get('.page__title').contains('Timesheets')  
    }

    getCalendarIsVisible(){
        return cy.get('.calendar')
    }

    getTitleForm() {
        return cy.get('.tile.form')
    }

    getUserTitle(){
        return cy.get('.user-info__title')
    }

    getMenuNumber(){
        return cy.get('.main-nav').find('li')
    }
}

export default LoginPage 