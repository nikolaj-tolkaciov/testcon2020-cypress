class TimeLoggingPage {
    getUrl(){
        return cy.url()
    }
    getPageTitle(){
        return cy.get('.page__title')
    }
    getTitleForm(){
        return cy.get('.tile.form')
    }
    getUserInfoTitle(){
        return cy.get('.user-info__title')
    }
    getMainNavigationBar(){
        return cy.get('.main-nav').find('li')
    }
    getMainHeaderUserName(){
        return cy.get('.main-header__user-info')
    }
    getActiveNavBarItem(){
        return cy.get('.main-nav__link--active')
    }
    getMainHeaderActionList(){
        return cy.get('.main-header__actions')
    }
}
export default TimeLoggingPage