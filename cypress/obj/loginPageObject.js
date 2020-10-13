class LoginPage{
    visit(){
        cy.visit('/')
    }

    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }

    getLoginButton(){
        return cy.get('[type="submit"]')
    }

    getUserIDInputField(){
        return cy.get('[id="loginForm.userId"]')
    }

    getUserName(userName){
        return cy.get('[aria-label="' + userName +'"]')
    }

    getRoleIndicator(){
        return  cy.get('[id="loginForm.role"]')
    }

    getRoleName(roleName){
        return cy.get(`[aria-label="${roleName}"]`)
    }

    getSubminButton(){
        return cy.get('[type="submit"]')
    }
}

export default LoginPage