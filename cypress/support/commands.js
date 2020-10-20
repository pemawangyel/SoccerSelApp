//create a custom command
Cypress.Commands.add('ProgramaticSingnIn', ()=>{
    cy.visit('http://localhost:4200/user/login')
    cy.url().should('include', 'user')
    cy.url().should('contain', 'login')
    cy.location('protocol').should('eq', 'http:')
    cy.get('input[placeholder=Email]').type('admin@admin.com')
    cy.get('input[placeholder=Password]').type('123456')
    cy.get('.btn').contains('login').click()
})