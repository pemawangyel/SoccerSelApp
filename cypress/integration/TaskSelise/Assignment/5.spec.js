//src > app > fixtures > booking > booking.component.html
describe('matchbooking', ()=>{
    it('booking match by passing fixture name as an argument',
     (matchBook="Tottenham Hotspur VS Chelsea")=>{ //matchBook is passed as parameter which holds the value of fixture name
        cy.Login()
        cy.contains('Booking').should('be.visible').click()//src > app > navbar > navbar.component.html
            cy.get('#sel1').select(matchBook)//parameter passed to the function is called here
            cy.get('#email').type('pema@gmail.com')
            cy.get('#cardInfo').type('89')
            cy.get('.btn').contains('Book the ticket').click()

        })
    })
