describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 1"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 1')
        cy.get('.main-nav').find('li').should('have.length', 2)
    })

    it('Should select the current date', function () {
        var d = new Date();
        cy.get('.calendar--selected .calendar__date').contains(d.getDate()).should('be.visible')  
        cy.get('.user-info__title').click({force:true});
        cy.get('[type="button"]').contains('Log Out').click()
    })


    it('T2 - Verify all user roles can log in and should see appropriate tabs', function () {
        const roles = [
            {
                name: 'User',
                tabsNumber: 1
            },
            {
                name: 'Team Lead',
                tabsNumber: 2
            },
            {
                name: 'Manager',
                tabsNumber: 5
            },
            {
                name: 'Accountant',
                tabsNumber: 5
            },
            {
                name: 'Admin',
                tabsNumber: 6
            }
        ]

        roles.forEach(role => {
            cy.get('[id="loginForm.userId"]').should('be.visible')
            cy.get('[id="loginForm.userId"]').click({force: true})
            cy.get('[aria-label="TestCon User 1"]').click({force: true})
            cy.get('[id="loginForm.role"]').click({force:true})
            cy.get(`[aria-label="${role.name}"]`).click()
            cy.get('[type="submit"]').click()
    
            cy.url().should('include', '/time-logging')
            cy.get('.page__title').should('be.visible')
            cy.get('.calendar').should('be.visible')
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains('TestCon User 1')
            cy.get('.main-nav').find('li').should('have.length', role.tabsNumber)
            cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
            cy.get('.user-info__title').click({force:true});
            cy.get('[type="button"]').contains('Log Out').click()
        })
    })  


})