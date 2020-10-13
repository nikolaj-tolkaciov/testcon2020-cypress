class LoginPage {

    visit(){
        cy.visit('/')
    }

    getLoginButton(){
        return cy.get('[type="submit"]')
    }

    getUserName(userName){
        return cy.get('[aria-label="'+userName+'"]')
    }

    getRole(role){
        return cy.get('[aria-label="'+role+'"]')
    }

    getLoginFormForUser(){
        return cy.get('[id="loginForm.userId"]')
    }

    getLoginFormForRole(){
        return cy.get('[id="loginForm.role"]')
    }

}

export default LoginPage