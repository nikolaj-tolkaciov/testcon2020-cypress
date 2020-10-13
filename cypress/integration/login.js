import LoginPage from '../objects/loginPage'
import CalendarPage from '../objects/calendarPage'

const loginPage = new LoginPage()
const calendarPage = new CalendarPage()
const todaysDate = Cypress.moment().format('MMMM YYYY')
const day = Cypress.moment().format('D')
const roles= [['User',1],['Team Lead',2], ['Manager',5], ['Accountant',5],['Admin',6]]


describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getValidateInput().should('not.visible')
        loginPage.getSubmitButton().click()
        loginPage.getValidateInput().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        loginPage.getUserInputField().click({force:true})
        loginPage.getMyUserSelected().click()
        loginPage.getRoleSelectorField().click({force:true})
        loginPage.getAnyRole('Team Lead').click()
        loginPage.getSubmitButton().click()
        cy.url().should('include', '/time-logging')
        calendarPage.getPageTitle().contains('Timesheets')
        calendarPage.getCalendar().should('be.visible')
        calendarPage.getForm().should('be.visible')
        calendarPage.getCalendarHeader().contains(todaysDate)
        calendarPage.getTodayDate().contains(day)
        calendarPage.getUserInfo().contains('TestCon User 5')
        calendarPage.getMenuItems().should('have.length', 2)
        calendarPage.getUserInfo().click()
        calendarPage.getLogout().click()
    })

    it('Should be able to login with all roles', function () {
        for (let i = 0; i < roles.length; i++) {
            loginPage.getUserInputField().click({force:true})
            loginPage.getMyUserSelected().click()
            loginPage.getRoleSelectorField().click({force:true})
            loginPage.getAnyRole(roles[i][0]).click()
            loginPage.getSubmitButton().click()
            calendarPage.getUserInfo().contains('TestCon User 5')
            calendarPage.getMenuItems().should('have.length', roles[i][1])
            calendarPage.getTimeLoggingTitle().should('have.css', 'color', 'rgb(64, 76, 237)')
            calendarPage.getUserInfo().click()
            calendarPage.getLogout().click()
        }
    })
})