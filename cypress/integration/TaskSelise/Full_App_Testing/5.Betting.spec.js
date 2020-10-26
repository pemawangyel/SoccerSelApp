const { contains } = require("jquery")

describe('Betting Test Suite', () => {

    beforeEach(() => {
        cy.Login()
    })

    //src > app > fixture > fixture.component.html
    it('Test the display options of Bet', () => {
        cy.get('tbody tr:nth-child(1) td:nth-child(4)').contains('Bet').should('be.visible').click()
        cy.url().should('include', 'bet/2')//Assert
        cy.get('div h3').contains('Watford vs AFC Bournemouth').should('be.visible')//Assert
        cy.pause()
    })
    //src > app > bet > bet.component.html
    it('Test if by clicking on Go Back button the user is taken into home page', () => {
        cy.get('tbody tr:nth-child(1) td:nth-child(4)').contains('Bet').should('be.visible').click()
        cy.get('.btn').contains('Go back').click()//will direct the page to home page
        cy.get('div h2').contains('Match Fixtures').should('be.visible')//Making sure that we are on home page
        cy.pause()
    })
    it('Place the bet with an empty value for all the fields', () => {
        cy.get('tbody tr:nth-child(3) td:nth-child(4)').contains('Bet').should('be.visible').click()
        cy.url().should('include', 'bet/4')
        cy.get('.btn').contains('Place the bet').click()//Alerted with "Invalid Form"  
        cy.get('form div').contains('invalid Form').should('be.visible')
        cy.pause()      
    })
    it('Place the bet with valid value for all the fields', () => {
        cy.get('tbody tr:nth-child(5) td:nth-child(4)').contains('Bet').should('be.visible').click()
        cy.url().should('include', 'bet/6')
        cy.get('#matchId').should('be.visible')
        cy.get('#cardInfo').type('123')
        cy.get('#homeScore').type('3')
        cy.get('#awayScore').type(2)
        cy.get('#amount').type('300')
        cy.get('.btn').contains('Place the bet').click()//bet placed successful message pops up  
        cy.pause()    
    })
    it('Display of Validation message for mandatory field for the Bet', () => {
        cy.get('tbody tr:nth-child(2) td:nth-child(4)').contains('Bet').should('be.visible').click()
        cy.url().should('include', 'bet/3')
        cy.get('label').contains('Match ID:').should('be.visible')//Assert
        cy.get('#cardInfo').click()//Alerted with "Card Info is required"
        cy.get('#homeScore').click()//Alerted with "Home Score is required"
        cy.get('#awayScore').click()//Alerted with "Away Score is required"
        cy.get('#amount').click()//Alerted with "Amount is required"
        cy.get('.btn').contains('Place the bet').click()//Alerted with "invalid Form"
        cy.pause()
    })
    it('Test Reset Button', () => {
        cy.get('tbody tr:nth-child(2) td:nth-child(4)').contains('Bet').should('be.visible').click()
        cy.get('#matchId').should('be.visible')
        cy.get('#cardInfo').type('123')
        cy.get('#homeScore').type('3')
        cy.get('#awayScore').type(2)
        cy.get('#amount').type('300')
        cy.get('.btn').contains('Reset').click()//clears all the value passed to the textbox    
    })
})