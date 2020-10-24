describe('Logout', ()=>{
    it('Test logout', ()=>{
        cy.Login()
       // cy.get('ul li .btn').contains('Logout').and('be.visible').click()
    })
    //src > app > navbar > navbar.component.html
    after(()=>{
        cy.get('ul li .btn').contains('Logout').and('be.visible').click()
    })
})