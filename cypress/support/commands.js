//create a custom command
Cypress.Commands.add('Login', ()=>{
    cy.visit('http://localhost:4200/user/login')
    cy.location('protocol').should('eq', 'http:')
    cy.url().should('contain', 'user')
    cy.url().should('include', 'login')
    cy.get('form').within(()=>{
        cy.get('input[placeholder="Email"]').type('admin@admin.com')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.root().submit()
    })
   
})