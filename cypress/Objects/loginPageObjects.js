class LoginPage{
    visit(){
        cy.visit('/')
    }

    getUserValidation () {
        return cy.get('.Select.not-valid')
    }

    getSubmitButton(){
        return cy.get('[type="submit"]')
    }

    getUserNameField (){
        return  cy.get('[id="loginForm.userId"]')
    }

    setUserName(user){
       return cy.get('[aria-label="'+user+'"]')
    }

    getRoleField(){
        return cy.get('[id="loginForm.role"]')
    }

    setRole (role) {
        return cy.get('[aria-label="'+role+'"]')
    }
}

export default LoginPage
