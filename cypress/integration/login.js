describe('Login functionality', () => {
    
    it('Should display validation for empty user after attempted loggin', () => {
        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible');
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible');
    });

    it('Should be able to login with role Team Lead', () => {
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="TestCon User 4"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Team Lead"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets');
        cy.get('.calendar').should('be.visible');
        cy.get('.tile.form').should('be.visible');
        cy.get('.user-info__title').contains('TestCon User 4');
        cy.get('.main-nav').find('li').should('have.length', 2);
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color','rgb(64, 76, 237)');
    });

    it('Should be able to login with role Manager', () => {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="TestCon User 4"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Manager"]').click();
        cy.get('[type="submit"]').click();

        cy.get('.user-info__title').contains('TestCon User 4');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color','rgb(64, 76, 237)');
    });

    it('Should be able to login with role Accountant', () => {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="TestCon User 4"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Accountant"]').click();
        cy.get('[type="submit"]').click();

        cy.get('.user-info__title').contains('TestCon User 4');
        cy.get('.main-nav').find('li').should('have.length', 5);
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color','rgb(64, 76, 237)');
    });

    it('Should be able to login with role Admin', () => {
        cy.visit('/');
        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="TestCon User 4"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="Admin"]').click();
        cy.get('[type="submit"]').click();

        cy.get('.user-info__title').contains('TestCon User 4');
        cy.get('.main-nav').find('li').should('have.length', 6);
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color','rgb(64, 76, 237)');
    });

    it('Should show current date', () => {
        cy.get('.calendar--today').contains(new Date().getDate());
    });
})