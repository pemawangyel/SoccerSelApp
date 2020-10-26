describe('Booking Test Suite', () => {

    beforeEach(() => {
        cy.Login()
    })

    //src > app > navbar > navbar.component.html
    it('Test the display options of Booking', () => {
        cy.get('li a').contains('Booking').should('be.visible').click()//Booking page is displayed
        cy.url().should('include', 'booking')//To assert the url of booking
        cy.pause()
    })

    //src > app > fixtures > booking > booking.component.html
    it(`Test if by clicking on Go Back button the user 
        is taken into home page.`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()//Booking page is displayed
        cy.get('.btn').contains('Go back').click()
        cy.get('div h2').should('contain', 'Match Fixtures')//To assert that the page in a home page
        cy.pause()
    })
    it(`Place the booking with an empty value for all the fields.`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()
        cy.get('.btn').contains('Book the ticket').click()//Alerted with "invalid Form"
        cy.pause()
    })
    it(`Place the booking with  valid values and check if it is saved successfully.`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()
        cy.get('#sel1').select('3')//This is the select element, so here we are selecting the based on its index from the dropdown list
        cy.get('#email').type('wangyel@gmail.com')
        cy.get('#cardInfo').type('123')
        cy.get('.btn').contains('Book the ticket').should('be.visible').click()
        cy.get('.btn').contains('Save changes').should('be.visible').click()//will successfully place the booking
        cy.pause()
    })
    it(`Place the booking with  valid value and check when Closed 
        no booking will be made/no successful message is displayed.`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()
        cy.get('#sel1').select('3')
        cy.get('#email').type('wangyel@gmail.com')
        cy.get('#cardInfo').type('123')
        cy.get('.btn').contains('Book the ticket').should('be.visible').click()
        cy.get('.btn').contains('Close').should('be.visible').click()//Will close the Booking Summary and no booking will be placed
        cy.pause()
    })
    it(`Display of Validation message for mandatory field in booking page.`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()
        cy.get('#sel1').select('Wolves VS Burnley')//Can select by direcly passing the fixture name from the dropdown list
        cy.get('#email').click()//Alerted with "Email is required"
        cy.get('#cardInfo').click()//Alerted with "Card Info is required"
        cy.get('#email').click()
        cy.pause()
    })
    it(`Test Booking by passing an email as number only`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()
        cy.get('#sel1').select('3')
        cy.get('#email').type('12345')
        cy.get('#cardInfo').type('123')
        cy.get('.btn').contains('Book the ticket').should('be.visible').click()
        cy.pause()
    })
    it(`Test Reset Button for booking`, () => {
        cy.get('li a').contains('Booking').should('be.visible').click()
        cy.get('#sel1').select('5')
        cy.get('#email').type('12345')
        cy.get('#cardInfo').type('123')
        cy.get('.btn').contains('Reset').should('be.visible').click()//clears all the value passed
    })
})