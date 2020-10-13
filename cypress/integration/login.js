import LoginPage from '../obj/loginPageObject'

const loginPage = new LoginPage()

describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        loginPage.getLoginFormUserId().click({force:true})
        loginPage.getUserName("TestCon User 8").click()
        loginPage.getLoginFormRoleId().click({force:true})
        loginPage.getUserRole().click()
        loginPage.getSubmitButton().click()
 
        loginPage.getUrl()
        loginPage.getPageTitle() 
        loginPage.getCalendarIsVisible().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.getUserTitle().contains('TestCon User 8')
        loginPage.getMenuNumber().should('have.length', 2)
    })
})