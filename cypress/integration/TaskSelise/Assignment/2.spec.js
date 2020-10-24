//Check for validations on booking tickets and betting pages

describe('Validations', () => {

    beforeEach(() => { // It will run this first before each test case is execution
        cy.visit('http://localhost:4200/user/login')
        cy.url().should('contain', 'login')
        cy.get('input[placeholder="Email"]').type('admin@admin.com')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()
    })

    //VALIDATION ON BOOKING TICKETS
    it('Validation on booking tickets WITHOUT PASSING any input values', () => {
        cy.get('li a').contains('Booking').click()//path: src > app > navbar > navbar.component.html
        cy.url().should('contain', '/fixtures/booking')//path: src > app > fixtures > booking > booking.component.html
        cy.get('.btn').contains('Book the ticket').click()//Message retured: invalid form
        cy.get('div .alert').contains('invalid Form').should('be.visible')//Assertng the validation message
        cy.pause()
    })
    it(`Validation on booking tickets by CLICKING ON INPUT FIELDS BUT 
        WITHOUT PASSING ANY VALUES`, () => {
        cy.get('li a').contains('Booking').click()
        cy.get('#sel1').select('3')
        cy.get('#email').click()//Message returned: Email is required
        cy.get('#cardInfo').click()//Message returned: Card Info is required
        cy.get('.btn').contains('Book the ticket').click()
        cy.get('#emailValidate').should('contain', 'Email is required')//Assertng the validation message
        cy.get('#validateCard').should('contain', 'Card Info is required')//Assertng the validation message
        cy.pause()
    })
    it('validation on booking ticket by by passing an INVALID EMAIL FORMAT', () => {
        cy.get('li a').contains('Booking').click()
        cy.get('#sel1').select('1')
        cy.get('#email').type('3sdsfd')//NO error message is displayed, booking was successfull
        cy.get('#cardInfo').type('12334')
        //cy.get('.btn').contains('Book the ticket').click()
        cy.pause()
    })

    //VALIDATION ON BETTING PAGE
    it('Validation on placing the bet WITHOUT PASSING any input values', () => {
        cy.get('td .btn').contains('Bet').first().click()//path: src > app > fixture > fixture.component.html
        cy.url().should('include', 'fixtures/bet')//path: src > app > bet > bet.component.html
        cy.get('.btn').contains('Place the bet').click()//Message retured: invalid form
        cy.pause()
    })
    it(`Validation on placing the bet by CLICKING ON INPUT 
        FIELDS BUT WITHOUT PASSING ANY VALUES`, () => {
        cy.get('td .btn').contains('Bet').first().click()
        cy.get('#cardInfo').click()//Message returned: Card Info is required
        cy.get('#homeScore').click()//Message returned: Home Score is required
        cy.get('#awayScore').click()//Message returned: Away Score is required
        cy.get('#amount').click()//Message returned: Amount is required
        cy.get('.btn').contains('Place the bet').click()
        cy.get('#card_validate').contains(' Card Info is required').should('be.visible')//Assertng the validation message
        cy.get('#hScore_validate').contains('Home Score is required').should('be.visible')//Assertng the validation message
        cy.get('#aScore_validate').contains('Away Score is required').should('be.visible')//Assertng the validation message
        cy.get('#amt_validate').contains(' Amount is required').should('be.visible')//Assertng the validation message
    })

})