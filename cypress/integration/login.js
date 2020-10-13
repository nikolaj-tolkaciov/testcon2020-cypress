
describe('Login functionality', function() {

    //
    // vars and test data
    //

    // user login
    const user_login = 'TestCon User 3';

    // current date
    let currentDate = new Date();
    let day = currentDate.getDate();


    // available roless
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

    //
    // test cases
    //


    roles.forEach((role) => {

        it('Should display validation for empty user after attempted loggin', function () {
            cy.visit('/')
            cy.get('.Select.not-valid').should('not.visible')
            cy.get('[type="submit"]').click()
            cy.get('.Select.not-valid').should('be.visible')
        })

        it('Should be able to login with role User and a calendar should display the current day', function () {
            cy.get('[id="loginForm.userId"]').click({force:true})
            cy.get(`[aria-label="${user_login}"]`).click()
            cy.get('[id="loginForm.role"]').click({force:true})
            cy.get(`[aria-label="${role.label}"]`).click()
            cy.get('[type="submit"]').click()
    
            cy.url().should('include', '/time-logging')
            cy.get('.page__title').contains('Timesheets')
            cy.get('.calendar').should('be.visible')
            cy.get('.calendar--today.calendar--selected').should('be.visible')
            cy.get('.calendar--today.calendar--selected').contains(day)
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains(user_login)
            cy.get('.main-nav').find('li').should('have.length', role.navItems)
            cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
        })
    });

})