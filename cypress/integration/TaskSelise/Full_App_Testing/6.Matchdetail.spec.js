describe('MatchDetails Test Suite', () => {

    beforeEach(() => {
        cy.Login()
    })

    //src > app > fixture > fixture.component.html
    it('Test the display options of Match Details', () => {
        cy.get('tbody tr:nth-child(1) td:nth-child(5)').contains('Match Detail').should('be.visible').click()
        cy.get('.btn').contains('Delete').and('be.visible')//and is also used as an assertion
        cy.pause()
    })
    it('Test the display options of Match Details of fourth rows', () => {
        cy.get('tbody tr:nth-child(4) td:nth-child(5)').contains('Match Detail').should('be.visible').click()
        cy.get('.btn').contains('Delete').and('be.visible')//and is also used as an assertion
        cy.pause()
    })
    //src > app > fixture > fixture-detail > fixture-detail.componnent.html
    it('Test if by clicking on Go Back button the user is taken into home page', () => {
        cy.get('tbody tr:nth-child(1) td:nth-child(5)').contains('Match Detail').should('be.visible').click()
        cy.get('.btn').contains('Go back').and('be.visible').click()
        cy.get('div h2').contains('Match Fixtures').should('be.visible')
        cy.pause()
    })
    it('Test Delete Button', () => {
        cy.get('tbody tr:nth-child(1) td:nth-child(5)').contains('Match Detail').should('be.visible').click()
       // cy.get('.btn').contains('Delete').should('be.visible')
    })

})