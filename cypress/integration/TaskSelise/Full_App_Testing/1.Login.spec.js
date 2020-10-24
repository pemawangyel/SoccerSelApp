//src > app > user > login > login.component.html
describe('Login Test Suite', () => {
    it('Test if the soccer app gets loaded successfully with login option', () => {
        cy.visit('http://localhost:4200/user/login')//Should load the app on the browser
        cy.url().should('contain', 'user')//Should keyword is use to assert
        cy.url().should('include', 'login')
    })
    it(`Test if by Entering Correct Email and Correct  Password, 
        the users is prompted to the home page.`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').type('admin@admin.com')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()
    })
    it(`Entering Correct Email and Wrong  Password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').type('admin@admin.com')
        cy.get('input[placeholder="Password"]').type('wrongpassword')
        cy.get('.btn').contains('login').click()//alerted with "Incorrect password"
        cy.pause()
    })
    it(`Entering Wrong Email and Correct Password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').type('wrong@admin.com')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()//alerted with "Cannot find user"
        cy.pause()
    })
    it(`Entering Invalid Email format with Correct Password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').type('pema.com@')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()//alerted with "Email format is invalid"
        cy.pause()
    })
    it(`Entering only numbers as email address with Correct Password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').type('1234567890')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()//alerted with "Email format is invalid"
        cy.pause()
    })
    it(`Login without Email address but with corrent password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').click()
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()//alerted with "Email and password are required"
        cy.pause()
    })
    it(`Login with valid Email address but without password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').type('admin@admin.com')
        cy.get('input[placeholder="Password"]').click()
        cy.get('.btn').contains('login').click()//alerted with "Email and password are required"
        cy.pause()
    })
    it(`Login with valid Email address but without password`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('input[placeholder="Email"]').click()
        cy.get('input[placeholder="Password"]').click()
        cy.get('.btn').contains('login').click()//alerted with "Email and password are required"
        cy.pause()
    })
    it(`Test Display of Register Page`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('a').contains('Register').should('be.visible').click()
    })
    it(`Test Display of Login Page from Register Page`, () => {
        cy.visit('http://localhost:4200/user/login')
        cy.get('a').contains('Register').should('be.visible').click()
        cy.get('a').contains('Login').should('be.visible').click()
    })
})