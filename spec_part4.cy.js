describe('IMDb Born Today - Search for Celebrities Born Yesterday', () => {
  const dayjs = require('dayjs')

  Cypress.dayjs = dayjs


  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test, based on: https://github.com/cypress-io/cypress/issues/2554 
    return false
  })
  
  it('Shows "we are working on this" whenever cypress fails (not the website)', function () {
    cy.visit('https://www.spanishdict.com/examples/we%20are%20working%20on%20this?lang=en')
  })

  // Access baseUrl before each test
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Accept').click({force:true}) // to accept cookies
  });

  it('Navigates to Born Today section and searches Celebrities born yesterday', () => {
    // Unfold the Menu
    cy.get('#imdbHeader-navDrawerOpen')
      .should('be.visible')
      .click();

    // Click on "Top 250 TV Shows" from the menu
    cy.get('[data-testid="list-container"]')
      .contains(/Born Today|Nacidos hoy/)
      .click({force:true});

    // Clear the default search
    cy.get('[data-testid="selected-input-chip-list-birthday-10-24"]').click('right');
    

    
    // Unfold the Birthday filter and search for celebrities born yesterday
    cy.get('[data-testid="accordion-item-birthdayAccordion"] > .ipc-accordion__item__chevron > .ipc-icon').click();
    var yesterday = dayjs().subtract(1,'day').format('MM-DD').toString(); 
    cy.get('[data-testid="birthday-input-test-id"]').type('10-23{enter}');
    //cy.get('[data-testid="birthday-input-test-id"]').type(yesterday+'{enter}');
   

    // Wait for the list to populate and click the 3rd name in the list
    cy.get('[data-testid="adv-search-get-results"] > .ipc-btn__text').click();
    cy.get(':nth-child(3) > .ipc-metadata-list-summary-item__c > .ipc-metadata-list-summary-item__tc > .sc-77f37b3d-0 > .sc-77f37b3d-1 > .sc-ada31d55-0 > .sc-ada31d55-3 > [data-testid="nlib-title"] > .ipc-title-link-wrapper > .ipc-title__text').click();


    // Take a screenshot of the page
    cy.screenshot('celebrity-born-yesterday');
    });
});