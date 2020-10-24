//stub match fixtures in the home page and feed it with your own data from fixture
 describe('Stub', ()=>{
     it('Enter data from fixtures', ()=>{
         cy.server()
         cy.route('GET', 'fixtures', 'fixture:./MatchFixture/matchFixture')
         cy.route('GET', 'fixtures/1', 'fixture:./MatchFixture/test1Detail')
         cy.Login()
     })
 })