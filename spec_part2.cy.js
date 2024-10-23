describe('IMDb Top Box Office Rating Test', () => {
  
  // Access baseUrl before each test
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Accept').click({force:true}) // to accept cookies
  });

  it('Navigate to Top Box Office, select the 2nd movie, and set a 5-star rating', () => {
    // Unfold the Menu
    cy.get('#imdbHeader-navDrawerOpen')
      .should('be.visible')
      .click();

    // Click on "Top Box Office" from the menu
    cy.get('[href="/chart/boxoffice/?ref_=nv_ch_cht"] > .ipc-list-item__text')
      .contains('Top Box Office')
      .click({force: true}); // we need to force the click because the visibility is "hidden" 

    // Wait for the Top Box Office list to load and click on the 2nd movie
    cy.get('.ipc-metadata-list-summary-item__c')
      .should('be.visible');
    
    // Click on the 2nd item in the list (index 1)
    cy.get(':nth-child(2) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .sc-732ea2d-0 > .ipc-title > .ipc-title-link-wrapper > .ipc-title__text')
      .click();

    // Click on the IMDb Rating button, which is an iframe
    cy.get('[data-testid="hero-rating-bar__user-rating__unrated"]')
      .contains(/Rate|Puntuar/)
      .click({force: true});

    // Check that the iframe is loaded
    cy.frameLoaded()
    
      // Set 5-star rating, I continuously got the error message that 7 iframes were found and I needed to specify which one I wanted to use, but I couldn't
      cy.iframe('iframe's name which I can't find')
      .contains('Rate 5')
      .click();

    // Click the Rate button in the iframe
    cy.get('button.ipc-btn.ipc-btn--primary')
      .contains('Rate')
      .should('be.visible')
      .click();

    // Assertion: Verify that the rating was applied (check the 5-star selection)
    cy.get('span.ipc-rating-star--5.ipc-rating-star--active')
      .should('exist')
      .and('be.visible');
  });
});
