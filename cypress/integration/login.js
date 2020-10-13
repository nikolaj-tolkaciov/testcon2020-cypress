import LoginPage from '../Objects/loginPageObjects'
import TimeLine from '../Objects/timeLinePageObjects'
import Page from '../Objects/page'

const loginPage = new LoginPage()
const timeLine = new TimeLine()
const page = new Page()
describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidattionIntidation().should('not.visible')
        loginPage.getSubmitButton().click()
        loginPage.getUserValidattionIntidation().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        loginPage.getUserNameField().click({force:true})
        loginPage.setUserName('TestCon User 1').click()
        loginPage.getRoleField().click({force:true})
        loginPage.setRole('Team Lead').click()
        loginPage.getSubmitButton().click()

        page.getUrl().should('include', '/time-logging')
        page.getPageTitle().contains('Timesheets')
        timeLine.getCalendar().should('be.visible')
        timeLine.getTitleForm().should('be.visible')
        timeLine.getUserInfo().contains('TestCon User 1')
        timeLine.getNavigationElements().should('have.length', 2)
    })

    it('Should select the current date', function () {
        var d = new Date();
        timeLine.getCalendarDate().contains(d.getDate()).should('be.visible')  
        timeLine.getUserInfo().click({force:true});
        timeLine.getUserContextMenuButons().contains('Log Out').click()
    })


    it('T2 - Verify all user roles can log in and should see appropriate tabs', function () {
        const roles = [
            {
                name: 'User',
                tabsNumber: 1
            },
            {
                name: 'Team Lead',
                tabsNumber: 2
            },
            {
                name: 'Manager',
                tabsNumber: 5
            },
            {
                name: 'Accountant',
                tabsNumber: 5
            },
            {
                name: 'Admin',
                tabsNumber: 6
            }
        ]

        roles.forEach(role => {
            loginPage.getUserNameField().click({force:true})
            loginPage.setUserName('TestCon User 1').click()
            loginPage.getRoleField().click({force:true})
            loginPage.setRole(role.name).click()
            loginPage.getSubmitButton().click()
    
            page.getUrl().should('include', '/time-logging')
            page.getPageTitle().should('be.visible')
            timeLine.getCalendar().should('be.visible')
            timeLine.getTitleForm().should('be.visible')
            timeLine.getUserInfo().contains('TestCon User 1')
            timeLine.getNavigationElements().should('have.length', role.tabsNumber)
            timeLine.getTimeLogInID().should('have.css', 'color', 'rgb(64, 76, 237)')
            timeLine.getUserInfo().click({force:true});
            timeLine.getUserContextMenuButons().contains('Log Out').click()
        })
    })  

})