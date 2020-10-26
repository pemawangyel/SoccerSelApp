describe('FailCase', ()=>{
    it('check how it appears on report', ()=>{
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="wrong name"]').type('admin@admin.com')//passed wrong input for email on purpose to check how it appears while generating report
        cy.get('input[placeholder="Password"]').click()
        cy.get('.btn').contains('login').click()
    })
})