//Write a function where it takes a fixture name as an argument and it will book the ticket for that fixture.

//src > app > fixtures > booking > booking.component.html
describe('matchbooking', ()=>{
    it('booking match by passing fixture name as an argument',
     (matchBook="Everton VS Aston Villa")=>{ //matchBook is passed as parameter which holds the value of fixture name
        cy.Login()
        cy.contains('Booking').should('be.visible').click()//src > app > navbar > navbar.component.html
            cy.get('#sel1').select(matchBook)//parameter passed to the function is called here
            cy.get('#email').type('pema@gmail.com')
            cy.get('#cardInfo').type('89')
            cy.get('.btn').contains('Book the ticket').should('be.visible').click()
        })
    //  it.only('take a fixture name from fixture', ()=>{
    //      cy.Login()
    //      cy.contains('Booking').should('be.visible').click()
    //      cy.fixture('fixturename.json').then((name)=>{
    //         cy.get('#sel1').select(name.fixturename)
    //         cy.get('#email').type('test@gmail.com')
    //         cy.get('#cardInfo').type('660')
    //         cy.get('.btn').contains('Book the ticket').should('be.visible').click()
    //      })
    //  })   
})
