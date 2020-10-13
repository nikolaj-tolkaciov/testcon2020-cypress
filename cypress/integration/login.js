const conf = require('../helpers/common');

describe('Login functionality', function() {
    let d = new Date();

    it('Should display validation for empty user after attempted loggin', function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.loginAsRole('User')

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains(`${conf.USER_NAME}`)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.attr', 'aria-current', 'true')
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.main-nav').find('li').should('have.length', 1)
        cy.get('.calendar--selected').should('have.class', 'calendar--today')
        cy.get('.calendar--today').find('span').contains(d.getDate())
        
        cy.logOut()
    })

    it('Should be able to login with role Team Lead', function () {
        cy.loginAsRole('Team Lead')

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains(`${conf.USER_NAME}`)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.attr', 'aria-current', 'true')
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.main-nav').find('li').should('have.length', 2)
        cy.get('.calendar--selected').should('have.class', 'calendar--today')
        cy.get('.calendar--today').find('span').contains(d.getDate())
        
        cy.logOut()
    })

    it('Should be able to login with role Manager', function () {
        cy.loginAsRole('Manager')

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains(`${conf.USER_NAME}`)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.attr', 'aria-current', 'true')
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('.calendar--selected').should('have.class', 'calendar--today')
        cy.get('.calendar--today').find('span').contains(d.getDate())
        
        cy.logOut()
    })

    it('Should be able to login with role Accountant', function () {
        cy.loginAsRole('Accountant')

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains(`${conf.USER_NAME}`)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.attr', 'aria-current', 'true')
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.main-nav').find('li').should('have.length', 5)
        cy.get('.calendar--selected').should('have.class', 'calendar--today')
        cy.get('.calendar--today').find('span').contains(d.getDate())
        
        cy.logOut()
    })

    it('Should be able to login with role Admin', function () {
        cy.loginAsRole('Admin')

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains(`${conf.USER_NAME}`)
        cy.get('.main-nav').find('li').should('have.length', 6)
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.attr', 'aria-current', 'true')
        cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.calendar--selected').should('have.class', 'calendar--today')
        cy.get('.calendar--today').find('span').contains(d.getDate())
        
        cy.logOut()
    })
})