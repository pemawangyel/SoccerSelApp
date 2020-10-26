describe('Logout', ()=>{
    it('Test logout', ()=>{
        cy.Login()
        cy.get('ul li .btn').contains('Logout').and('be.visible').click()//src > app > navbar > navbar.component.html
        cy.pause()
       // cy.get('ul li .btn').contains('Logout').and('be.visible').click()
    })   
    
    // after(()=>{
    //     cy.get('ul li .btn').contains('Logout').and('be.visible').click()
    // })
})