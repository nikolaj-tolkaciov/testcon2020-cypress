class LoginPage {
    visit() {
        cy.visit('/')
    }

    getUserValidationIndicator() {
        return cy.get('.Select.not-valid')
    }

    getLoginButton() {
        return cy.get('[type="submit"]')
    }

    getUserName(userName) {
        return cy.get('[aria-label="' + userName + '"]')
    }
}

export default LoginPage