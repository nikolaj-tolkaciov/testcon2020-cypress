class LoginPageVariables {

    rootPage(){
        cy.visit('/')
    }
    getUserValidationIndicator(){
        return cy.get('.Select.not-valid')
    }
    submit(){
        return cy.get('[type="submit"]')
    }
    loginFormIdList(){
        return cy.get('[id="loginForm.userId"]')
    }
    loginRoleIdList(){
        return cy.get('[id="loginForm.role"]')
    }
    loginUserName(userName){
        return cy.get('[aria-label="'+userName+'"]')
    }
    loginRoleName(role){
        return cy.get('[aria-label="'+role+'"]')
    }
}

export default LoginPageVariables