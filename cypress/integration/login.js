import LoginPage from '../obj/loginPageObject'
import TimeLogging from '../obj/timeLoggingPageObject'

const loginPage = new LoginPage()
const timeLogging = new TimeLogging()

describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        
        loginPage.getUserIDIndicator().click({force:true})
        loginPage.getUserName("TestCon User 15").click()
        loginPage.getRoleIndicator().click({force:true})
        loginPage.getRoleName("Team Lead").click()
        loginPage.getSubminButton().click()

        
        cy.url().should('include', '/time-logging')
        timeLogging.getPageTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTitleForm().should('be.visible')
        timeLogging.getUserTitle().contains('TestCon User 15')
        timeLogging.getMainNavigationBar().find('li').should('have.length', 2)
    })

    it('Check if date is selected as today', function () {
        const todaysDate = Cypress.moment().format('DD')
        timeLogging.getCalenderToday().should('contain', todaysDate)
        timeLogging.getCalendarSelected().should('have.class', 'calendar--today')
    })


})