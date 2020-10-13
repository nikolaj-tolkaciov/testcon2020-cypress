describe('user is able to ligin with his role and have the apropriate admitions ', function() {
    it('Check tabs for Team Lead', function () {
        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 11"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()


        cy.get('.user-info__title').contains('TestCon User 11')
        cy.get('.main-nav').find('li').should('have.length', 2)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Check tabs for User', function () {

        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 11"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()


        cy.get('.user-info__title').contains('TestCon User 11')
        cy.get('.main-nav').find('li').should('have.length', 1)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Check tabs for Manager', function () {
        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 11"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Manager"]').click()
        cy.get('[type="submit"]').click()


        cy.get('.user-info__title').contains('TestCon User 11')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Check tabs for Accountant', function () {
        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 11"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Accountant"]').click()
        cy.get('[type="submit"]').click()


        cy.get('.user-info__title').contains('TestCon User 11')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
    })

    it('Check tabs for Administrator', function () {
        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 11"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()


        cy.get('.user-info__title').contains('TestCon User 11')
        cy.get('.main-nav').find('li').should('have.length', 6)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})