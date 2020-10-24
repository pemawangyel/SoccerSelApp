//src > app > user > register > register.component.html
describe('Register Test Suite', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200/user/login')
    })

    it(`Test to register with an empty value for All available fields.`, () => {
        cy.get('.register').contains('Register').should('be.visible').click()
        cy.get('.btn').contains('register').click()//Alerted with "Email and password are required"
        cy.pause()
    })

    it(`Test to Register by passing only Email and Password.`, () => {
        cy.get('.register').contains('Register').should('be.visible').click()
        cy.get('input[placeholder="E-mail"]').type('pema@gmail.com')
        cy.get('input[placeholder="Password"]').type('1qazsw2')
        cy.get('.btn').contains('register').click()//Alerted with "Email and password are required"
        cy.pause()
    })

    it(`Test to Register with All valid inputs.`, () => {
        cy.get('.register').contains('Register').should('be.visible').click()
        cy.get('input[placeholder="E-mail"]').type('testing@gmail.com')
        cy.get('input[placeholder="Password"]').type('1qaz')
        cy.get('input[placeholder="First Name"]').type('test')
        cy.get('input[placeholder="Last Name"]').type('test')
        cy.get('.btn').contains('register').click()
        cy.pause()
    })
    it(`Test to Register with password less than six character`, () => {
        cy.get('.register').contains('Register').should('be.visible').click()
        cy.get('input[placeholder="E-mail"]').type('three@gmail.com')
        cy.get('input[placeholder="Password"]').type('123')//alerted with messgae "Password is too short"
        cy.get('input[placeholder="First Name"]').type('test')
        cy.get('input[placeholder="Last Name"]').type('test')
        cy.get('.btn').contains('register').click()
        cy.pause()
    })

    it(`Test to Register with already existing email address but with different
         password, firstname and lastname.`, () => {
        cy.get('.register').contains('Register').should('be.visible').click()
        cy.get('input[placeholder="E-mail"]').type('testing@gmail.com')
        cy.get('input[placeholder="Password"]').type('1qaz')
        cy.get('input[placeholder="First Name"]').type('test')
        cy.get('input[placeholder="Last Name"]').type('test')
        cy.get('.btn').contains('register').click()//Alerted with "Email already exists"
        cy.pause()
    })

    it(`Display of Validation message for options in the Register.`, () => {
        cy.get('.register').contains('Register').should('be.visible').click()
        cy.get('input[placeholder="E-mail"]').click()//Alerted with "Email is required"
        cy.get('input[placeholder="Password"]').click()//Alerted with "Password is required"
        cy.get('input[placeholder="First Name"]').click()//Alerted with "First Name is required"
        cy.get('input[placeholder="Last Name"]').click()//Alerted with "Last Name is required"
        cy.get('.btn').contains('register').click()//Alerted with "Email and password are required
    })
})