import LoginPage from '../Objects/loginPageObject'
import TimeLogging from '../Objects/timeLoggingObject'
 
const loginPage = new LoginPage()
const timeLogging = new TimeLogging()

describe('Logging in with User role', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        loginPage.visit()
        loginPage.getLoginForm().click({force:true})
        loginPage.getUserName("TestCon User 17").click()
        loginPage.getLoginFormRole().click({force:true})
        loginPage.getLoginRole("User").click()
        loginPage.getLoginButton().click()

        timeLogging.getUserTitle().contains('TestCon User 17')
        timeLogging.getMainNavigationTab().find('li').should('have.length', 1)
        timeLogging.getMainNavigationTab().find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Logging in with Team Lead role', function() {

    it('Should be able to login with role Team Lead', function () {
        loginPage.visit()
        loginPage.getLoginForm().click({force:true})
        loginPage.getUserName("TestCon User 17").click()
        loginPage.getLoginFormRole().click({force:true})
        loginPage.getLoginRole("Team Lead").click()
        loginPage.getLoginButton().click()

        timeLogging.getUserTitle().contains('TestCon User 17')
        timeLogging.getMainNavigationTab().find('li').should('have.length', 2)
        timeLogging.getMainNavigationTab().find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Logging in with Manager role', function() {

    it('Should be able to login with role Manager', function () {
        loginPage.visit()
        loginPage.getLoginForm().click({force:true})
        loginPage.getUserName("TestCon User 17").click()
        loginPage.getLoginFormRole().click({force:true})
        loginPage.getLoginRole("Manager").click()
        loginPage.getLoginButton().click()

        timeLogging.getUserTitle().contains('TestCon User 17')
        timeLogging.getMainNavigationTab().find('li').should('have.length', 5)
        timeLogging.getMainNavigationTab().find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Logging in with Accountant role', function() {

    it('Should be able to login with role Accountant', function () {
        loginPage.visit()
        loginPage.getLoginForm().click({force:true})
        loginPage.getUserName("TestCon User 17").click()
        loginPage.getLoginFormRole().click({force:true})
        loginPage.getLoginRole("Accountant").click()
        loginPage.getLoginButton().click()

        timeLogging.getUserTitle().contains('TestCon User 17')
        timeLogging.getMainNavigationTab().find('li').should('have.length', 5)
        timeLogging.getMainNavigationTab().find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})

describe('Logging in with Admin role', function() {

    it('Should be able to login with role Admin', function () {
        loginPage.visit()
        loginPage.getLoginForm().click({force:true})
        loginPage.getUserName("TestCon User 17").click()
        loginPage.getLoginFormRole().click({force:true})
        loginPage.getLoginRole("Admin").click()
        loginPage.getLoginButton().click()

        timeLogging.getUserTitle().contains('TestCon User 17')
        timeLogging.getMainNavigationTab().find('li').should('have.length', 6)
        timeLogging.getMainNavigationTab().find('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    })
})