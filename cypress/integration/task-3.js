import TimeLoggingPage from '../pom/timeLoggingPageObject'
import NavBar from '../pom/navBarObject'

const timeLoggingPage = new TimeLoggingPage()
const navBar = new NavBar()

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
            cy.validateUrl('/time-logging')
            cy.validatePageTitle('Timesheets')
            timeLoggingPage.getCalendar().should('be.visible')
            timeLoggingPage.getTileForm().should('be.visible')
            navBar.getUserInfo().contains(user)
            navBar.getListItems().should('have.length', nav_length[roles[i]])
            navBar.getMainNavTab().contains("Time Logging").should('have.css', 'color','rgb(64, 76, 237)')

            // Logout
            navBar.getUserInfo().contains(user).click()
            navBar.getUserMenu().contains("Log Out").click()

            i++

        }

    })

})