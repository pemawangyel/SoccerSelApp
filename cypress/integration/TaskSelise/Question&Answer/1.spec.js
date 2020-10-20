//Sign in as admin and add new fixtures.

describe('Testing_Socc_App', ()=>{
    it('sign in as admin and add new fixtures', ()=>{
        //Sign in as admin
        cy.visit('http://localhost:4200/user/login')
        cy.url().should('include', 'user/login')
        cy.get('input[placeholder="Email"]').type('admin@admin.com')
        cy.get('input[placeholder="Password"]').type('123456')
        cy.get('.btn').contains('login').click()

        //Add fixture
        cy.get('ul li a').contains('Add Fixture').click()
        cy.get('#referee').click().type('Pema')
        cy.get('#linesman1').click().type('test')
        cy.get('#linesman2').click().type('test')
        cy.get('input[placeholder="Home Team"]').type('test')
        cy.get('input[placeholder="Away Team"]').type('test')
        cy.get('#Stadium').type('test')
        cy.get('#Price').type('200')
        cy.get('#Time').type('12:30:00')
        cy.get('#date').type('2020-12-30')
        cy.get('input[placeholder="Home Manager"]').type('test')
        cy.get('input[placeholder="Away Manager"]').type('test')

        //Add home and away players 1
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').first().click().type('test')
        cy.get('input[id="player"][placeholder="No."]').first().click().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').first().click().type('test')
        cy.get('input[id="awayPlayers"][placeholder="No."]').first().click().type('1')

         //Add home and away players 2
         cy.get('.btn').contains(' + player ').click()
         cy.get('input[id="player"][placeholder="player name"]').eq(1).click().type('test')
         cy.get('input[id="player"][placeholder="No."]').eq(1).click().type('1')
         cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(1).click().type('test')
         cy.get('input[id="awayPlayers"][placeholder="No."]').eq(1).click().type('1')
         
        //Add home and away players 3
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(2).click().type('test')
        cy.get('input[id="player"][placeholder="No."]').eq(2).click().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(2).click().type('test')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(2).click().type('1')

         //Add home and away players 4
         cy.get('.btn').contains(' + player ').click()
         cy.get('input[id="player"][placeholder="player name"]').eq(3).click().type('test')
         cy.get('input[id="player"][placeholder="No."]').eq(3).click().type('1')
         cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(3).click().type('test')
         cy.get('input[id="awayPlayers"][placeholder="No."]').eq(3).click().type('1')

        //Add home and away players 5
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(4).click().type('test')
        cy.get('input[id="player"][placeholder="No."]').eq(4).click().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(4).click().type('test')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(4).click().type('1')

         //Add home and away players 6
         cy.get('.btn').contains(' + player ').click()
         cy.get('input[id="player"][placeholder="player name"]').eq(5).click().type('test')
         cy.get('input[id="player"][placeholder="No."]').eq(5).click().type('1')
         cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(5).click().type('test')
         cy.get('input[id="awayPlayers"][placeholder="No."]').eq(5).click().type('1')

        //Add home and away players 7
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(6).click().type('test')
        cy.get('input[id="player"][placeholder="No."]').eq(6).click().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(6).click().type('test')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(6).click().type('1')

         //Add home and away players 8
         cy.get('.btn').contains(' + player ').click()
         cy.get('input[id="player"][placeholder="player name"]').eq(7).click().type('test')
         cy.get('input[id="player"][placeholder="No."]').eq(7).click().type('1')
         cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(7).click().type('test')
         cy.get('input[id="awayPlayers"][placeholder="No."]').eq(7).click().type('1')

        //Add home and away players 9
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(8).click().type('test')
        cy.get('input[id="player"][placeholder="No."]').eq(8).click().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(8).click().type('test')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(8).click().type('1')

         //Add home and away players 10
         cy.get('.btn').contains(' + player ').click()
         cy.get('input[id="player"][placeholder="player name"]').eq(9).click().type('test')
         cy.get('input[id="player"][placeholder="No."]').eq(9).click().type('1')
         cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(9).click().type('test')
         cy.get('input[id="awayPlayers"][placeholder="No."]').eq(9).click().type('1')

        //Add home and away players 11
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').last().click().type('test')
        cy.get('input[id="player"][placeholder="No."]').last().click().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').last().click().type('test')
        cy.get('input[id="awayPlayers"][placeholder="No."]').last().click().type('1')
    })
})