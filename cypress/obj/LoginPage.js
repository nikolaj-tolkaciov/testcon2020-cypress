class LoginPageVariables {

    getRootPage(){
        cy.visit('/')
    }
    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }
    getSubmit(){
        return cy.get('[type="submit"]')
    }
    getLoginUserDropdown(){
        return cy.get('[id="loginForm.userId"]')
    }
    getLoginRoleIdList(){
        return cy.get('[id="loginForm.role"]')
    }
    getLoginUserName(userName){
        return cy.get('[aria-label="'+userName+'"]')
    }
    getLoginRoleName(role){
        return cy.get('[aria-label="'+role+'"]')
    }
}

export default LoginPageVariables