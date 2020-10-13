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

    getMyUserSelected(){
        return cy.get('[aria-label="TestCon User 5"]')
    }

    getRoleSelectorField(){
        return cy.get('[id="loginForm.role"]')
    }

    getAnyRole(roleName){
        return cy.get(`[aria-label="${roleName}"]`)
    }
}

export default LoginPage