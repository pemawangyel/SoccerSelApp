//Sign in as admin and add new fixtures.

describe('Add Fixxture', () => {
    it('to add new fixture', () => {
        cy.visit('http://localhost:4200/user/login')//telling the cy to open the url passed
        cy.url().should('contain', 'user')//Assert: should keyword is use to make sure expeted contains are displayed
        cy.url().should('include', 'login')
        cy.title().should('contain', 'FinalApp')
        cy.get('form input[placeholder="Email"]').type('admin@admin.com')
        cy.get('form input[placeholder="Password"]').type('123456')
        cy.get('form .btn').contains('login').click()
        cy.url().should('contain', 'fixtures/fixture')//Asserting the home page
        cy.get('div ul li a').contains('Add Fixture').click()//path: src > app > navbar > navbar.component.html
        cy.url().should('contain', 'addFixture')//path: src > app > fixtures > fixture-add > fixture-add.component.html
        cy.get('#referee').type('Pema Wangyel')
        cy.get('#linesman1').type('Sonam')
        cy.get('input[id=linesman2][placeholder="linesman2"]').type('Choki')
        cy.get('input[id="team"][placeholder="Home Team"]').type('MultiRatinal FC')
        cy.get('input[id="team"][placeholder="Away Team"]').type('Selise FC')
        cy.get('#Stadium').type('Changlimithang')
        cy.get('input[placeholder="Price"]').type('500')
        cy.get('input[placeholder="Time"]').type('10:33:56')
        cy.get('input[placeholder="Date"]').type('2020-10-30')
        cy.get('input[placeholder="Home Manager"]').type('Drugong')
        cy.get('input[placeholder="Away Manager"]').type('Pelden')
        cy.pause()

        //Adding player 1
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').first().type('test1')//Adding the players base on the index element as first
        cy.get('input[placeholder="No."][id="player"]').first().type('1')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').first().type('test1')
        cy.get('input[placeholder="No."][id="awayPlayers"]').first().type('1')

        //Adding player 2
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(1).type('test2')//Adding the players base on the index element which is equal to index 1 
        cy.get('input[placeholder="No."][id="player"]').eq(1).type('2')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(1).type('test2')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(1).type('2')

        //Adding player 3
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(2).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(2).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(2).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(2).type('3')

        //Adding player 4
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(3).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(3).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(3).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(3).type('3')

        //Adding player 5
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(4).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(4).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(4).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(4).type('3')

        //Adding player 6
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(5).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(5).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(5).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(5).type('3')

        //Adding player 7
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(6).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(6).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(6).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(6).type('3')

        //Adding player 8
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(7).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(7).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(7).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(7).type('3')

        //Adding player 9
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(8).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(8).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(8).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(8).type('3')

        //Adding player10
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').eq(9).type('test3')
        cy.get('input[placeholder="No."][id="player"]').eq(9).type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').eq(9).type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').eq(9).type('3')

        //Adding player 11
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[placeholder="player name"][id="player"]').last().type('test3')
        cy.get('input[placeholder="No."][id="player"]').last().type('3')
        cy.get('input[placeholder="player name"][id="awayPlayers"]').last().type('test3')
        cy.get('input[placeholder="No."][id="awayPlayers"]').last().type('3')
        cy.get('.btn').contains('Submit').click()//finally this will enabled and the fixture will be added successfully
    })
})