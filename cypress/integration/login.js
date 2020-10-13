describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        const date = new Date()
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 10"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 10')
        cy.get('.main-nav').find('li').should('have.length', 2)

        cy.get('.calendar__body').should('be.visible')
        cy.get('.calendar--selected').contains(date.getDate())
    })
    it('Should verify each user role', function (){
        
        let roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin']
        let tabs = [1, 2, 5, 5, 6]

        cy.visit('/')
        roles.forEach (function(item, index) {
            
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 10"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get("[aria-label="+'"'+item+'"'+"]").click()
        cy.get('[type="submit"]').click()
        cy.get('.main-nav').find('li').should('have.length', tabs[index])
        cy.get('.main-header__user-info').click()
        cy.get('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.main-header__actions').contains('Log Out').click()
    })
    })
})