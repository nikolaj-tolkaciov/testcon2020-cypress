class Variables {

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
    getUrl(){
        return cy.url()
    }
    getPageTitle(){
        return cy.get('.page__title')
    }
    getTitleForm(){
        return cy.get('.tile.form')
    }
    getCalendar(){
        return cy.get('.calendar')
    }
    getUserInfoTitle(){
        return cy.get('.user-info__title')
    }
    getMainNavigationBar(){
        return cy.get('.main-nav')
    }
    getCalendarBody(){
        return cy.get('.calendar__body')
    }
    getSelectedCalendarDay(){
        return cy.get('.calendar--selected')
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

export default Variables