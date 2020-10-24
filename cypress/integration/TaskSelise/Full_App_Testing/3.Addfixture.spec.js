describe('AddFixture Test Suite', () => {

    beforeEach(() => {
        cy.Login()//custome command;details is defined in support folder
    })

    //src > app > navbar > navbar.component.html
    it(`Test the display and options of Add Fixture.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()//Add fixture page is displayed
        cy.pause()
    })

    //src > app > fixtures > fixture-add > fixture-add.component.html
    it(`Test if by clicking on Go Back button the user is taken into home page.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()
        cy.get('.btn').contains('Go back').click()//page is redirected to home page
        cy.pause()
    })
    it(`Display of Validation message for input options in the Match Officials.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()
        cy.get('#referee').click()//Alerted with "Referee is required"
        cy.get('#linesman1').click()//Alerted with "linesman is required"
        cy.get('#linesman2').click()//Alerted with "Linesman is required"
        cy.get('#linesman1').click()
        cy.pause()
    })
    it(`Display of Validation message for input options in the Match Details.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()
        cy.get('input[placeholder="Home Team"]').click()//Alerted with "Home team is required"
        cy.get('input[placeholder="Away Team"]').click()//Alerted with "Away team is required"
        cy.get('#Stadium').click()//Alerted with "Stadium is required"
        cy.get('#Price').click()//Alerted with "Price is required"
        cy.get('#Time').click()//Alerted with "Time is required"
        cy.get('#date').click()//Alerted with "Date is required"
        cy.get('input[placeholder="Home Manager"]').click()//Alerted with "Home Manager is required"
        cy.get('input[placeholder="Away Manager"]').click()//Alerted with "Away Manager is required"
        cy.get('input[placeholder="Home Manager"]').click()
        cy.pause()
    })
    it(`Test Add Players and check if the required text boxes are displayed.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()
        cy.get('.btn').contains(' + player ').click()//Two textbox appeared both for Home Player and Away Player 
        cy.pause()
    })
    it(`Test Reset Button and check if it clears the values passed to the fields.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()
        cy.get('#referee').type('test')
        cy.get('#linesman1').type('test')
        cy.get('#linesman2').type('test')
        cy.get('input[placeholder="Home Team"]').type('test')
        cy.get('input[placeholder="Away Team"]').type('test')
        cy.get('#Stadium').type('test')
        cy.get('#Price').type('500')
        cy.get('#Time').type('12:30:00')
        cy.get('#date').type('2020-12-30')
        cy.get('input[placeholder="Home Manager"]').type('test')
        cy.get('input[placeholder="Away Manager"]').type('test')
        cy.get('input[placeholder="Home Manager"]').type('test')
        cy.get('.btn').contains('Reset').click()//The Reset button clears the value passed to the textboxes
        cy.pause()
    })
    it(`Test Add new fixture.`, () => {
        cy.get('div ul li a').contains('Add Fixture').click()
        cy.get('#referee').type('test')
        cy.get('#linesman1').type('test')
        cy.get('#linesman2').type('test')
        cy.get('input[placeholder="Home Team"]').type('test')
        cy.get('input[placeholder="Away Team"]').type('test')
        cy.get('#Stadium').type('test')
        cy.get('#Price').type('500')
        cy.get('#Time').type('12:30:00')
        cy.get('#date').type('2020-12-30')
        cy.get('input[placeholder="Home Manager"]').type('test')
        cy.get('input[placeholder="Away Manager"]').type('test')
        cy.get('input[placeholder="Home Manager"]').type('test')

        //Adding 1 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').first().type('test1')//added player based on index
        cy.get('input[id="player"][placeholder="No."]').first().type('1')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').first().type('test1')
        cy.get('input[id="awayPlayers"][placeholder="No."]').first().type('1')

        //Adding 2 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(1).type('test2')
        cy.get('input[id="player"][placeholder="No."]').eq(1).type('2')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(1).type('test2')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(1).type('2')

        //Adding 3 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(2).type('test3')
        cy.get('input[id="player"][placeholder="No."]').eq(2).type('3')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(2).type('test3')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(2).type('3')

        //Adding 4 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(3).type('test4')
        cy.get('input[id="player"][placeholder="No."]').eq(3).type('4')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(3).type('test4')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(3).type('4')

        //Adding 5 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(4).type('test5')
        cy.get('input[id="player"][placeholder="No."]').eq(4).type('5')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(4).type('test5')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(4).type('5')

        //Adding 6 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(5).type('test6')
        cy.get('input[id="player"][placeholder="No."]').eq(5).type('6')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(5).type('test6')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(5).type('6')

        //Adding 7 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(6).type('test7')
        cy.get('input[id="player"][placeholder="No."]').eq(6).type('7')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(6).type('test7')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(6).type('7')

        //Adding 8 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(7).type('test8')
        cy.get('input[id="player"][placeholder="No."]').eq(7).type('8')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(7).type('test8')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(7).type('8')

        //Adding 9 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(8).type('test9')
        cy.get('input[id="player"][placeholder="No."]').eq(8).type('9')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(8).type('test9')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(8).type('9')

        //Adding 10 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').eq(9).type('test10')
        cy.get('input[id="player"][placeholder="No."]').eq(9).type('10')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').eq(9).type('test10')
        cy.get('input[id="awayPlayers"][placeholder="No."]').eq(9).type('10')

        //Adding 11 Player
        cy.get('.btn').contains(' + player ').click()
        cy.get('input[id="player"][placeholder="player name"]').last().type('test11')
        cy.get('input[id="player"][placeholder="No."]').last().type('11')
        cy.get('input[id="awayPlayers"][placeholder="player name"]').last(11).type('test11')
        cy.get('input[id="awayPlayers"][placeholder="No."]').last().type('11')

        // cy.get('.btn').contains('Submit').click()//will successfuly add new fixture
    })
})