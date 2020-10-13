describe('Task 2', function() {

    it('T-2: All user roles can log in and see appropriate tabs', function () {
        
        let roles = ["User", "Team Lead", "Manager", "Accountant", "Admin"]
        const nav_length = {
            "User" : 1,
            "Team Lead" : 2,
            "Manager" : 5,
            "Accountant" : 5,
            "Admin" : 6,
        }
        const user = "TestCon User 6"
        let i = 0

        while (roles[i]){

            cy.login(user, roles[i])

            //"User" role asserts
            cy.url().should('include', '/time-logging')
            cy.get('.page__title').contains('Timesheets')
            cy.get('.calendar').should('be.visible')
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains(user)
            cy.get('.main-nav').find('li').should('have.length', nav_length[roles[i]])
            cy.get('.main-nav').contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')

            // Logout
            cy.get('.user-info__title').contains(user).click()
            cy.get('.main-header__menu-wrapper').contains("Log Out").click()

            i++

        }

    })

})