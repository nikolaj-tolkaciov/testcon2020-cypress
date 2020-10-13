class LoginPage {

    visit() { cy.visit('/') };
    getUserValidationIndicator = () => cy.get('.Select.not-valid');
    getLoginButton = () => cy.get('[type="submit"]');
    getLoginFormUserIdInput = () => cy.get('[id="loginForm.userId"]');
    getUserName = userName => cy.get(`[aria-label="${userName}"]`);
    getLoginFormUserRoleInput = () => cy.get('[id="loginForm.role"]');
    getUserRole = userRole => cy.get(`[aria-label="${userRole}"]`);
    getFormSubmitBtn = () => cy.get('[type="submit"]');
    getUrl = () => cy.url();
    getTitle = () => cy.get('.page__title');
    getCalendar = () => cy.get('.calendar');
    getCurrentDay = () => cy.get('.calendar--today');
    getTileForm = () => cy.get('.tile.form');
    getUserInfoTitle = () => cy.get('.user-info__title');
    getMainNav = () => cy.get('.main-nav');
    getCurrentNav = navLabel => cy.get(`[aria-labelledby="${navLabel}"]`);

}

export default LoginPage;