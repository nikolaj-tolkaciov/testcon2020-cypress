describe('User roles', function() {
        
    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role Test Lead', function () {
        var roles = ["User", "Team Lead", "Manager", "Accountant", "Admin" ];        
        var tabs = [1,2,5,5,6];        
        roles.forEach(myFunction);

        function myFunction(value, index, array) {

        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 7"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="' + value + '"').click()

        // log in
        cy.get('[type="submit"]').click()
        cy.contains('Time Logging').click()

        cy.get('[title="TestCon User 7"]').click()

        // check tab count
        cy.get('.main-nav').find('li').should('have.length', tabs[index])

        cy.get('[title="TestCon User 7"]').click()
        cy.contains('Log Out').click()
        }
    })
})