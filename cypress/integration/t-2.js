describe('t-2 User role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')

        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 22"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 22')
        cy.get('.main-nav').find('li').should('have.length', 1)
    })

    it('check time logging tab', function () {
        cy.get('.main-nav').find('li').find('a').should('have.class', 'main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Team lead', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 22"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 22')
        cy.get('.main-nav').find('li').should('have.length', 2)
    })

    it('check time logging tab', function () {
        cy.get('.main-nav').find('li').find('a').should('have.class', 'main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Manager role', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 22"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Manager"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 22')
        cy.get('.main-nav').find('li').should('have.length', 5)
    })

    it('check time logging tab', function () {
        cy.get('.main-nav').find('li').find('a').should('have.class', 'main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Admin', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 22"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 22')
        cy.get('.main-nav').find('li').should('have.length', 6)
    })

    it('check time logging tab', function () {
        cy.get('.main-nav').find('li').find('a').should('have.class', 'main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Accountant', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 22"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Accountant"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 22')
        cy.get('.main-nav').find('li').should('have.length', 5)
    })

    it('check time logging tab', function () {
        cy.get('.main-nav').find('li').find('a').should('have.class', 'main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})