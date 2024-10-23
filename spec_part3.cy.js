describe('IMDb Test - Top 250 TV Shows and Breaking Bad', () => {
  
  // Access baseUrl before each test
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Accept').click({force:true}) // to accept cookies
  });

  it('Navigates to Top 250 TV Shows and interacts with Breaking Bad photos', () => {
    // Unfold the Menu
    cy.get('#imdbHeader-navDrawerOpen')
      .should('be.visible')
      .click();

    // Click on "Top 250 TV Shows" from the menu
    cy.get('[href="/chart/toptv/?ref_=nv_tvv_250"] > .ipc-list-item__text')
      .contains('Top 250 TV Shows')
      .click({force: true}); // we need to force the click because the visibility is "hidden" 

    // Click on Breaking Bad
    cy.contains('a', 'Breaking Bad').click();

    // Verify we're on the Breaking Bad page
    cy.url().should('include', '/title/tt0903747/');
    cy.contains('h1', 'Breaking Bad').should('exist');

    // Go to Photos section
    cy.get('[data-testid="photos-title"]').contains(/Photos|Imágenes/).click();

    // I couldn't find the filter from the photos section, so I did a small detour via a menu button at the top right corner
    cy.get('[data-testid="mv-gallery-button"]').click();
    cy.get('[data-testid="image-chip-dropdown-test-id"]').click();

    // This is how the process would work to get the 2nd picture for Danny Trejo, but it's all in an iframe that I can't locate
    // Check that the iframe is loaded
    cy.frameLoaded()
    
    // Find Danny Trejo in the search drop down menu
    cy.iframe('iframe's name which I can't find')
      .contains('Danny Trejo')
      .click();

    // Wait for photos to load and click on the 2nd photo
    
    cy.get('.media_index_thumb_list img').eq(1).click();

    // Verify the modal or photo display appears
    cy.get('.media-viewer').should('be.visible');
  });
});