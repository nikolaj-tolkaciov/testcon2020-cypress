import LoginPage from '../Objects/LoginpageOpjects'

const loginPage = LoginPage()

describe('Login functionality', function() {
    
    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit()
        loginPage.getUserValidationIndicator().should('not.visible')
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('not.visible')
    })

    it('Should be able to login with role User', function () {
        loginPage.getLoginFormRoleId()({force:true})
        loginPage.getUserName(userName).click()
        loginPage.getLoginFormRoleId().click({force:true})
        loginPage.getUserRole().click()
        loginPage.getSubmitButton().click()

        loginPage.getUrl()
        loginPage.getPageTitle()
        loginPahe.getCalendarIsVisible().should('be.visible')
        loginPage.getTitleForm().should('be.visible')
        loginPage.getUserTitle().contains('TestCon User 11')
        loginPage.getMenuNumber().should('have.length', 2)
    })
})