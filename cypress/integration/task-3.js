import LoginPage from '../pom/loginPageObject'

const loginPage = new LoginPage()

describe('Task 2', function() {

    it('T-2: Users should be able to log in with "Team Lead" role and see appropriate tabs', function () {

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
            loginPage.validateUrl()
            loginPage.validatePageTitle()
            loginPage.getCalendar().should('be.visible')
            loginPage.getTileForm().should('be.visible')
            loginPage.getUserInfo().contains(user)
            loginPage.getMainNavTab().find('li').should('have.length', nav_length[roles[i]])
            loginPage.getMainNavTab().contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')

            // Logout
            loginPage.getUserInfo().contains(user).click()
            loginPage.getUserMenu().contains("Log Out").click()

            i++

        }

    })

})