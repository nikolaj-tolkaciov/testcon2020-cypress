class NavBar {

    getUserInfo(){
        return cy.get('.user-info__title')
    }

    getMainNavTab(){
        return cy.get('.main-nav')
    }

    getUserMenu(){
        return cy.get('.main-header__menu-wrapper')
    }

}

export default NavBar