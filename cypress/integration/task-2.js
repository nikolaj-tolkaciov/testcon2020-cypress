describe('Task 2', function() {

    it('T-2: Users should be able to log in with "User" role and see appropriate tabs', function () {

        const user = "TestCon User 6"
        const role = "User"

        cy.login(user, role)

        //"User" role asserts
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 6')
        cy.get('.main-nav').find('li').should('have.length', 1)
        cy.get('.main-nav').contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')
        
<<<<<<< Updated upstream
    })

    it('T-2: Users should be able to log in with "Team Lead" role and see appropriate tabs', function () {

=======
        let roles = ["User", "Team Lead", "Manager", "Accountant", "Admin"]

        const nav_length = {
            "User" : 1,
            "Team Lead" : 2,
            "Manager" : 5,
            "Accountant" : 5,
            "Admin" : 6,
        }
>>>>>>> Stashed changes
        const user = "TestCon User 6"
        const role = "Team Lead"

        cy.login(user, role)

        //"Team Lead" role asserts
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 6')
        cy.get('.main-nav').find('li').should('have.length', 2)
        cy.get('.main-nav').contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')
        
    })

    it('T-2: Users should be able to log in with "Manager" role and see appropriate tabs', function () {

        const user = "TestCon User 6"
        const role = "Manager"

        cy.login(user, role)

        //"Manager" role asserts
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 6')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('.main-nav').contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')
        
    })

    it('T-2: Users should be able to log in with "Accountant" role and see appropriate tabs', function () {

        const user = "TestCon User 6"
        const role = "Accountant"

        cy.login(user, role)

        //"Accountant" role asserts
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 6')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('.main-nav').contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')
        
    })

    it('T-2: Users should be able to log in with "Admin" role and see appropriate tabs', function () {

        const user = "TestCon User 6"
        const role = "Admin"

        cy.login(user, role)

        //"Admin" role asserts
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 6')
        cy.get('.main-nav').find('li').should('have.length', 6)
        cy.get('.main-nav').contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')
        
    })


})