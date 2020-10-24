describe('login', ()=>{
    it('login from fixture data',()=>{
        cy.visit('http://localhost:4200/user/login')
        cy.fixture('login').then((user=>{
            cy.get('input[placeholder="Email"]').type(user.email)
            cy.get('input[placeholder="Password"]').type(user.pwd)
            cy.get('.btn').contains('login').click()
        }))
    })
})