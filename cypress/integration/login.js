import LoginPage from '../obj/loginPageObject'

const loginPage = new LoginPage()

describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.loginAs("Admin")

        loginPage.visit()
        
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User')
        cy.get('.main-nav').find('li').should('have.length', 1)
    })
})