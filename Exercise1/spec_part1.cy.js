describe('IMDb Nicolas Cage Upcoming Movies Test', () => {
  
  
    beforeEach(() => {
      cy.visit('/');
      cy.contains('Accept').click({force:true})  // to accept cookies
    });
  
    
    it('Search for Nicolas Cage and navigate to his profile', () => {
      cy.get('#suggestion-search').type('Nicolas Cage{enter}');
      
      // Assert that the search results contain Nicolas Cage - I know I could have used "findbytext", but what if there is more than one Nicolas Cage? Can't risk. Sorry, pipeline!
      cy.contains('Nicolas Cage').should('be.visible');
      
      cy.contains('Nicolas Cage').click();
  
      // Assert that the URL includes his profile page ("/name/nm0000115")
      cy.url().should('include', '/name/nm0000115');
    });
  
    // Test case to find the first "Completed" movie in the upcoming section
    it('Unfold upcoming credits and click on the first completed movie', () => {

      cy.get('#suggestion-search').type('Nicolas Cage{enter}');
      cy.contains('Nicolas Cage').click();
  
      // Assert that we are on Nicolas Cage's profile page
      cy.url().should('include', '/name/nm0000115');
  
      // Scroll to the "Upcoming" tab in the Credits section, adding the Spanish version in case someone would have their browser configured in Spanish
      cy.contains(/Upcoming|Próximamente/).scrollIntoView().click();
  
      // Assert that the "Upcoming" section is visible
      cy.contains(/Upcoming|Próximamente/).should('be.visible');
  
      // Find the first movie with a "Completed" tag
      cy.get('[data-testid="unrel_cred_actor_1"]').within(() => {
        cy.contains(/Completed|Completada/).first().should('be.visible');
        
        // Click on the first movie with "Completed" tag
        cy.contains(/Completed|Completada/).first().parent().parent().find('a').first().click();
      });
  
    });
  });