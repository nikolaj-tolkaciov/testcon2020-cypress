class LoginPage{

    visit(){
        cy.visit('/')
    }

    getvalidateInput(){
        return cy.get('.Select.not-valid')
    }

    getsubmitButton(){
        return cy.get('[type="submit"]')
    }

    getUserInput(){
        return cy.get('[id="loginForm.userId"]')
    }

    getUserSelect(){
        return cy.get('[aria-label="TestCon User 5"]')
    }

    getLoginRoleSelect(){
        return cy.get('[id="loginForm.role"]')
    }

    getRoleLead(){
        return cy.get('[aria-label="Team Lead"]')
    }

    getAnyRole(roleName){
        return cy.get(`[aria-label="${roleName}"]`)
    }
}

export default LoginPage