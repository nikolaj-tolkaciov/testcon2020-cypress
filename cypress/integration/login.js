const todaysDate = Cypress.moment().format('MMMM YYYY')
const day = Cypress.moment().format('D')


describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 5"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.calendar__header').contains(todaysDate)
        cy.get('.calendar--today').contains(day)
        cy.get('.user-info__title').contains('TestCon User 5')
        cy.get('.main-nav').find('li').should('have.length', 2)
    })
})