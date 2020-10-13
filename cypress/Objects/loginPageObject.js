class LoginPage 
{
    visit() 
    {
        cy.visit('/')
    }

    getUserValidationIndicator() 
    {
        return cy.get('.Select.not-valid')
    }

    getLoginButton()
    {
        return cy.get('[type="submit"]')
    }

    getLoginForm() 
    {
        return cy.get('[id="loginForm.userId"]')
    }

    getUserName(userName) 
    {
        return cy.get('[aria-label="' + userName + '"]')
    }

    getLoginFormRole() 
    {
        return cy.get('[id="loginForm.role"]')
    }

    getLoginRole(loginRole) 
    {
        return cy.get('[aria-label="' + loginRole + '"]')
    }
    
}

export default LoginPage