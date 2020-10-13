class LoginPage {

    visit(){
        cy.visit('/')
    }

    getLoginButton(){
        return cy.get('[type="submit"]')
    }

    getUserName(userName){
        return cy.get('[aria-label="'+userName+'"]')
    }

    getRole(role){
        return cy.get('[aria-label="'+role+'"]')
    }

    getLoginFormForUser(){
        return cy.get('[id="loginForm.userId"]')
    }

    getLoginFormForRole(){
        return cy.get('[id="loginForm.role"]')
    }

    getCalendar(){
        return cy.get('.calendar')
    }

    getTileForm(){
        return cy.get('.tile.form')
    }

    getUserInfo(){
        return cy.get('.user-info__title')
    }

    getMainNavTab(){
        return cy.get('.main-nav')
    }

    getUserMenu(){
        return cy.get('.main-header__menu-wrapper')
    }

    validateUrl(){
        cy.url().should('include', '/time-logging')
    }

    validatePageTitle(){
        cy.get('.page__title').contains('Timesheets')
    }

}

export default LoginPage