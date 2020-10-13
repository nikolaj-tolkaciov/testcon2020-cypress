import LoginPage from '../obj/loginPageObj';

const loginPage = new LoginPage();

describe('Login functionality', () => {
    
    it('Should display validation for empty user after attempted loggin', () => {
        loginPage.visit();
        loginPage.getValidationIndicator().should('not.visible');
        loginPage.getLoginButton().click();
        loginPage.getValidationIndicator().should('be.visible');
    });

    it('Should be able to login with role Team Lead', () => {
        const roles = [
            { username: 'Team Lead', length: 2 },
            { username: 'Manager', length: 5 },
            { username: 'Accountant', length: 5 },
            { username: 'Admin', length: 6 }
        ];

        roles.map(role => {
            loginPage.visit();
            loginPage.getLoginButton().click();
            loginPage.getLoginFormId('loginForm.userId').click({force:true});
            loginPage.getUserName('TestCon User 4').click();
            loginPage.getLoginFormId('loginForm.role').click({force:true});
            loginPage.getUserName(role.username).click();
            loginPage.getLoginButton().click();

            cy.url().should('include', '/time-logging');
            cy.get('.page__title').contains('Timesheets');
            cy.get('.calendar').should('be.visible');
            cy.get('.tile.form').should('be.visible');
            cy.get('.user-info__title').contains('TestCon User 4');
            cy.get('.main-nav').find('li').should('have.length', role.length);
            cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color','rgb(64, 76, 237)');
        });
    });

    it('Should show current date', () => {
        cy.get('.calendar--today').contains(new Date().getDate());
    });
})