class TimeLoggingPage {

    getUrl = () => cy.url();
    getTitle = () => cy.get('.page__title');
    getCalendar = () => cy.get('.calendar');
    getCurrentDay = () => cy.get('.calendar--today');
    getTileForm = () => cy.get('.tile.form');
    getUserInfoTitle = () => cy.get('.user-info__title');
    getMainNavItems = () => cy.get('.main-nav').find('li');
    getCurrentNav = navLabel => cy.get(`[aria-labelledby="${navLabel}"]`);

}

export default TimeLoggingPage;