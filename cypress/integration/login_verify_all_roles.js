import LoginPage from '../obj/loginPageObject'
import TimeLogging from '../obj/timeLoggingPageObject'

const loginPage = new LoginPage()
const timeLogging = new TimeLogging()

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
            loginPage.visit()
            loginPage.getUserIDIndicator().click({force:true})
            loginPage.getUserName("TestCon User 15").click()
            loginPage.getRoleIndicator().click({force:true})
            loginPage.getRoleName(role.roleName).click()
            //cy.get(`[aria-label="${role.roleName}"]`).click()
            loginPage.getSubminButton().click()

            cy.url().should('include', '/time-logging')
            timeLogging.getPageTitle().contains('Timesheets')
            timeLogging.getCalendar().should('be.visible')
            timeLogging.getTitleForm().should('be.visible')
            timeLogging.getUserTitle().contains('TestCon User 15')
            timeLogging.getMainNavigationBar().find('li').should('have.length', role.length)
            timeLogging.getTimeLoggingID().should('have.css', 'color', 'rgb(64, 76, 237)')
        })
    });
})