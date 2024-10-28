describe('IMDb Celebrity Born Today - 40 Years Ago', () => {
  
  beforeEach(() => {
    cy.visit('/'); // Visit the baseUrl (IMDb homepage)
  });

  it('should find celebrities born exactly 40 years ago today and click the first link in the first result description', () => {
    
    // Step 1: Unfold the Menu button
    cy.get('#imdbHeader-navDrawerOpen--desktop').click();
    cy.get('a[href="/feature/bornondate/"]').click(); // Navigate to Born Today section

    // Step 2: Delete the default search
    cy.get('input[name="name"]').clear(); // Clears the name field

    // Step 3: Open the birth date picker and set the date to 40 years ago from today
    const today = new Date();
    const fortyYearsAgo = new Date(today.setFullYear(today.getFullYear() - 40));
    const formattedDate = fortyYearsAgo.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    // Set "from" date using the date picker
    cy.get('input[name="birth_monthday"]').type(formattedDate);

    // Set "to" date using the text field (assuming it's the same as "from")
    cy.get('input[name="birth_monthday"]').clear().type(formattedDate);

    // Submit the search
    cy.get('button[type="submit"]').click();

    // Step 4: Click on the first link in the first result description
    cy.get('.lister-item') // Get the first result in the list
      .first()
      .find('a') // Find the first link in the description
      .first()
      .click();

    // Step 5: Take a screenshot
    cy.screenshot('first-celebrity-link'); // Takes a screenshot of the result

    // Assertions
    cy.url().should('include', '/name/'); // Ensure we navigated to a celebrity page
    cy.get('h1').should('be.visible'); // Ensure that the page has a title element visible
  });

});