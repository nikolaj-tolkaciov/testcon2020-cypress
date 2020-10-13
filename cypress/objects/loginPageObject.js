class LoginPage {

    visit() { cy.visit('/') };
    getUserValidationIndicator = () => cy.get('.Select.not-valid');
    getLoginButton = () => cy.get('[type="submit"]');
    getLoginFormUserIdInput = () => cy.get('[id="loginForm.userId"]');
    getUserName = userName => cy.get(`[aria-label="${userName}"]`);
    getLoginFormUserRoleInput = () => cy.get('[id="loginForm.role"]');
    getUserRole = userRole => cy.get(`[aria-label="${userRole}"]`);
    getFormSubmitBtn = () => cy.get('[type="submit"]');

}

export default LoginPage;