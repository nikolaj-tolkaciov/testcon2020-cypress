import LoginPage from '../obj/loginPageObject'
import TimeLoggingPage from '../obj/timeLoggingPageObject'
import Header from '../obj/HeaderPageObject'

const loginPage = new LoginPage()
const timeLoggingPage = new TimeLoggingPage();
const header = new Header(); 

describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role Team Lead', function () {
        loginPage.openUserDropdown()
        loginPage.getUserName("TestCon User 25").click()
        loginPage.openRoleDropdown()
        loginPage.getRole("Team Lead").click()
        loginPage.getLoginButton().click()

        cy.url().should('include', '/time-logging')
        header.getPageTitle().contains('Timesheets')
        timeLoggingPage.calendarShouldbeVisible() // m?:)
        timeLoggingPage.getTileForm().should('be.visible')
        timeLoggingPage.getUserTitle().contains('TestCon User 25')
        timeLoggingPage.getHeaderMenu().should('have.length', 2)
    })
    
    it('Shoud be selected today', function (){
        const todaysDay = Cypress.moment().format('DD')

        timeLoggingPage.getSelectedDay()
            .should('have.class','calendar--today')
            .should('have.text', todaysDay)
    })
})