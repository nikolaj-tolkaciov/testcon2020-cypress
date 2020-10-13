import Variables from '../obj/variables'


const variables= new Variables()
describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        variables.rootPage()
        variables.getUserValidationIndicator().should('not.visible')
        variables.submit().click()
        variables.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        const date = new Date()

        variables.loginFormIdList().click({force:true})
        variables.loginUserName("TestCon User 10").click()
        variables.loginRoleIdList().click({force:true})
        variables.loginRoleName("Team Lead").click()
        variables.submit().click()
        variables.getUrl().should('include', '/time-logging')
        variables.getPageTitle().contains('Timesheets')
        variables.getCalendar().should('be.visible')
        variables.getTitleForm().should('be.visible')
        variables.getUserInfoTitle().contains('TestCon User 10')
        variables.getMainNavigationBar().find('li').should('have.length', 2)
        variables.getCalendarBody().should('be.visible')
        variables.getSelectedCalendarDay().contains(date.getDate())
    })
    it('Should verify each user role', function (){
        
        let roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin']
        let tabs = [1, 2, 5, 5, 6]

        variables.rootPage()
        roles.forEach (function(item, index) {
            
        variables.loginFormIdList().click({force:true})
        variables.loginUserName("TestCon User 10").click()
        variables.loginRoleIdList().click({force:true})
        variables.loginRoleName(item).click()
        variables.submit().click()
        variables.getMainNavigationBar().find('li').should('have.length', tabs[index])
        variables.getMainHeaderUserName().click()
        variables.getActiveNavBarItem().contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
        variables.getMainHeaderActionList().contains('Log Out').click()
    })
    })
})