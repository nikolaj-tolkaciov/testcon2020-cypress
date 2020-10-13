const conf = require('../helpers/common');

const USER_ROLES_MAP = {
    "User": "",
    "Team Lead": "role=leads",
    "Manager": "role=managers",
    "Accountant": "role=accountants",
    "Admin": "role=admins"
}

Cypress.Commands.add('loginAs', (role) => {
    window.localStorage.setItem('USER_INFO', '{"id":1,"firstName":"Demo","lastName":"User"}')
    window.localStorage.setItem('ACCESS_TOKEN', `userId=1&${USER_ROLES_MAP[role]}`)
})

Cypress.Commands.add('loginAsRole', (role) => {
    cy.get('[id="loginForm.userId"]').click({force:true})
    cy.get(`[aria-label="${conf.USER_NAME}"]`).click()
    cy.get('[id="loginForm.role"]').click({force:true})
    cy.get(`[aria-label="${role}"]`).click()
    cy.get('[type="submit"]').click()
    cy.wait(500)
})

Cypress.Commands.add('logOut', () => {
    cy.get('.user-info__title').click()
    cy.wait(500)
    cy.get('[type="button"]').contains('Log Out').click()
})

