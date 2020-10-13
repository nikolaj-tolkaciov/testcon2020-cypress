class LoginPage {
    visit() {
        cy.visit('/')
    }

    getUserValidationIndicator() {
        return  cy.get('.Select.not-valid')
    }

    getLoginButton() {
        return cy.get('[type="submit"]')
    }

    getUserName(userName) {
        return cy.get('[aria-label="' + userName + '"]') 
    }

    openUserDropdown() {
        return cy.get('[id="loginForm.userId"]').click({force:true})
    }

    openRoleDropdown() {
        return cy.get('[id="loginForm.role"]').click({force:true})
    }

    getRole(role) {
        return cy.get('[aria-label="' + role + '"]')
    }
}

export default LoginPage