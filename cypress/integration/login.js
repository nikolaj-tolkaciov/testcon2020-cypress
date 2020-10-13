import LoginPageVariables from '../obj/LoginPage'
import CalendarPage from '../obj/CalendarPage'
import TimeLoggingPage from '../obj/TimeLoggingPage'

const loginVariables= new LoginPageVariables()
const calendarVariables= new CalendarPage()
const timeLoggingVariables= new TimeLoggingPage()
describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginVariables.getRootPage()
        loginVariables.getUserValidationIndicator().should('not.visible')
        loginVariables.getSubmit().click()
        loginVariables.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        const date = new Date()

        loginVariables.getLoginUserDropdown().click({force:true})
        loginVariables.getLoginUserName("TestCon User 10").click()
        loginVariables.getLoginRoleIdList().click({force:true})
        loginVariables.getLoginRoleName("Team Lead").click()
        loginVariables.getSubmit().click()
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
        
        let roles = [
            ['User',1],
            ['Team Lead',2], 
            ['Manager',5], 
            ['Accountant',5], 
            ['Admin',6]
        ]

        loginVariables.getRootPage()
        for(let i = 0; i < roles.length; i++) {
            
            loginVariables.getLoginUserDropdown().click({force:true})
            loginVariables.getLoginUserName("TestCon User 10").click()
            loginVariables.getLoginRoleIdList().click({force:true})
            loginVariables.getLoginRoleName(roles[i][0]).click()
            loginVariables.getSubmit().click()
            timeLoggingVariables.getMainNavigationBar().should('have.length', roles[i][1])
            timeLoggingVariables.getMainHeaderUserName().click()
            timeLoggingVariables.getActiveNavBarItem().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
            timeLoggingVariables.getMainHeaderActionList().contains('Log Out').click()
    }
    })
})