describe('Login functionality verify all roles', function() {

    const roles = [
            {
                roleName: 'User',
                length: 1
            },

            {
                roleName: 'Team Lead',
                length: 2
            },

            {
                roleName: 'Manager',
                length: 5
            },

            {
                roleName: 'Accountant',
                length: 5
            },

            {
                roleName: 'Admin',
                length: 6
            }


    ];


    roles.forEach((role) => {

        it(`Should be able to login with role: ${role.roleName}`, function () {
            cy.visit('/')
            cy.get('[id="loginForm.userId"]').click({force:true})
            cy.get('[aria-label="TestCon User 15"]').click()
            cy.get('[id="loginForm.role"]').click({force:true})
            cy.get(`[aria-label="${role.roleName}"]`).click()
            cy.get('[type="submit"]').click()

            
            cy.url().should('include', '/time-logging')
            cy.get('.page__title').contains('Timesheets')
            cy.get('.calendar').should('be.visible')
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains('TestCon User 15')
            cy.get('.main-nav').find('li').should('have.length', role.length)
            cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')

        })
    });

})