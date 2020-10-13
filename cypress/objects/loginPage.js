class LoginPage{

    visit(){
        cy.visit('/')
    }

    getValidateInput(){
        return cy.get('.Select.not-valid')
    }

    getSubmitButton(){
        return cy.get('[type="submit"]')
    }

    getUserInputField(){
        return cy.get('[id="loginForm.userId"]')
    }

    getMyUserSelected(user){
        return cy.get(`[aria-label="${user}"]`)
    }

    getRoleSelectorField(){
        return cy.get('[id="loginForm.role"]')
    }

    getAnyRole(roleName){
        return cy.get(`[aria-label="${roleName}"]`)
    }
}

export default LoginPage