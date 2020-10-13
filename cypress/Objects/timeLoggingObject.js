class TimeLogging 
{
    getUserTitle()
    {
        return cy.get('.user-info__title')
    }

    getMainNavigationTab()
    {
        return cy.get('.main-nav')
    }

}

export default TimeLogging
