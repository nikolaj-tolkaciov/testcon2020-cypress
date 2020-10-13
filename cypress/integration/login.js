import LoginPageVariables from '../obj/LoginPage'
import CalendarPage from '../obj/CalendarPage'
import TimeLoggingPage from '../obj/TimeLoggingPage'

const loginVariables= new LoginPageVariables()
const calendarVariables= new CalendarPage()
const timeLoggingVariables= new TimeLoggingPage()
describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginVariables.rootPage()
        loginVariables.getUserValidationIndicator().should('not.visible')
        loginVariables.submit().click()
        loginVariables.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        const date = new Date()

        loginVariables.loginFormIdList().click({force:true})
        loginVariables.loginUserName("TestCon User 10").click()
        loginVariables.loginRoleIdList().click({force:true})
        loginVariables.loginRoleName("Team Lead").click()
        loginVariables.submit().click()
        timeLoggingVariables.getUrl().should('include', '/time-logging')
        timeLoggingVariables.getPageTitle().contains('Timesheets')
        calendarVariables.getCalendar().should('be.visible')
        timeLoggingVariables.getTitleForm().should('be.visible')
        timeLoggingVariables.getUserInfoTitle().contains('TestCon User 10')
        timeLoggingVariables.getMainNavigationBar().should('have.length', 2)
        calendarVariables.getCalendarBody().should('be.visible')
        calendarVariables.getSelectedCalendarDay().contains(date.getDate())
    })
    it('Should verify each user role', function (){
        
        let roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin']
        let tabs = [1, 2, 5, 5, 6]

        loginVariables.rootPage()
        roles.forEach (function(item, index) {
            
            loginVariables.loginFormIdList().click({force:true})
            loginVariables.loginUserName("TestCon User 10").click()
            loginVariables.loginRoleIdList().click({force:true})
            loginVariables.loginRoleName(item).click()
            loginVariables.submit().click()
            timeLoggingVariables.getMainNavigationBar().should('have.length', tabs[index])
            timeLoggingVariables.getMainHeaderUserName().click()
            timeLoggingVariables.getActiveNavBarItem().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
            timeLoggingVariables.getMainHeaderActionList().contains('Log Out').click()
    })
    })
})