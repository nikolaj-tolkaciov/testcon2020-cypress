class LoginPage {

  visit() {
    return cy.visit('/');
  };

  getLoginButton() {
    return cy.get('[type="submit"]');
  };

  getValidationIndicator() {
    return cy.get('.Select.not-valid');
  };

  getLoginFormId(id) {
    return cy.get(`'[id="${id}"]'`);
  };

  getUserName(name) {
    return cy.get(`[aria-label="${name}"]`);
  };
};

export default LoginPage;