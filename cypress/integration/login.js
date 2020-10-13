describe('User role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 17"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()

        cy.get('.user-info__title').contains('TestCon User 17')
        cy.get('.main-nav').find('li').should('have.length', 1)
        cy.get('.main-nav').find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Team Lead role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Team Lead', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 17"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.get('.user-info__title').contains('TestCon User 17')
        cy.get('.main-nav').find('li').should('have.length', 2)
        cy.get('.main-nav').find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Manager role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Manager', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 17"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Manager"]').click()
        cy.get('[type="submit"]').click()

        cy.get('.user-info__title').contains('TestCon User 17')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('.main-nav').find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Accountant role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Accountant', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 17"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Accountant"]').click()
        cy.get('[type="submit"]').click()

        cy.get('.user-info__title').contains('TestCon User 17')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('.main-nav').find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Admin role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Admin', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 17"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()

        cy.get('.user-info__title').contains('TestCon User 17')
        cy.get('.main-nav').find('li').should('have.length', 6)
        cy.get('.main-nav').find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})