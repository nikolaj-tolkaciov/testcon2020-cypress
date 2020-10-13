import LoginPage from '../objects/loginPageObject';
const loginPage = new LoginPage;

describe('Login functionality', function() {

    const userLogin = 'TestCon User 3';

    let currentDate = new Date();
    let day = currentDate.getDate();

    const roles = [
        {
            label: 'User',
            navItems: 1
        },
        {
            label: 'Team Lead',
            navItems: 2
        },
        {
            label: 'Manager',
            navItems: 5
        },
        {
            label: 'Accountant',
            navItems: 5
        },
        {
            label: 'Admin',
            navItems: 6
        }
    ];

    it('Should display validation for empty user after attempted loggin', function () {
        loginPage.visit();
        loginPage.getUserValidationIndicator().should('not.visible');
        loginPage.getLoginButton().click()
        loginPage.getUserValidationIndicator().should('be.visible')
    })

    roles.forEach((role) => {

        it(`Should be able to login with role ${role.label} and view role specific elements`, function () {
            loginPage.visit();
            loginPage.getLoginFormUserIdInput().click({force:true})
            loginPage.getUserName(userLogin).click()
            loginPage.getLoginFormUserRoleInput().click({force:true})
            loginPage.getUserRole(role.label).click()
            loginPage.getFormSubmitBtn().click()
            loginPage.getUrl().should('include', '/time-logging')
            loginPage.getTitle().contains('Timesheets')
            loginPage.getCalendar().should('be.visible')
            loginPage.getCurrentDay().should('be.visible')
            loginPage.getCurrentDay().contains(day)
            loginPage.getTileForm().should('be.visible')
            loginPage.getUserInfoTitle().contains(userLogin)
            loginPage.getMainNav().find('li').should('have.length', role.navItems)
            loginPage.getCurrentNav("timeLoggingId").should('have.css', 'color', 'rgb(64, 76, 237)')
        })
    });

})