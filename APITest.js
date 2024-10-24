describe('PokeAPI Berry and Berry Flavor API Tests', () => {

  const apiBaseUrl = 'https://pokeapi.co/api/v2';

  // Helper function to validate response
  function validateBerryResponse(response, idOrName) {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('name');
    expect(response.body.id).to.be.a('number');
    expect(response.body.name).to.equal(idOrName);
  }

  // Test 1: Valid berry ID
  it('should return the expected response for a valid berry id', () => {
    const validBerryId = 1; // Example: ID of "cheri"
    cy.request(`${apiBaseUrl}/berry/${validBerryId}`).then((response) => {
      validateBerryResponse(response, 'cheri');
    });
  });

  // Test 2: Error when calling with an invalid berry ID
  it('should return an error for an invalid berry id', () => {
    const invalidBerryId = 9999; // Non-existent berry ID
    cy.request({
      url: `${apiBaseUrl}/berry/${invalidBerryId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  // Test 3: Valid berry name
  it('should return the expected response for a valid berry name', () => {
    const validBerryName = 'pecha';
    cy.request(`${apiBaseUrl}/berry/${validBerryName}`).then((response) => {
      validateBerryResponse(response, validBerryName);
    });
  });

  // Test 4: Error when calling with an invalid berry name
  it('should return an error for an invalid berry name', () => {
    const invalidBerryName = 'nonexistentberry';
    cy.request({
      url: `${apiBaseUrl}/berry/${invalidBerryName}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  // Test 5: Valid berry flavor by name
  it('should return the expected response for a valid berry flavor name', () => {
    const validFlavorName = 'spicy';
    cy.request(`${apiBaseUrl}/berry-flavor/${validFlavorName}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('berries');
    });
  });

  // Test 6: Pick all berries with "spicy" flavor, find the one with highest potency
  it('should find the berry with the highest potency in the spicy flavor and validate its details', () => {
    cy.request(`${apiBaseUrl}/berry-flavor/spicy`).then((response) => {
      expect(response.status).to.eq(200);
      
      const berries = response.body.berries;
      let highestPotencyBerry = berries.reduce((max, berry) => berry.potency > max.potency ? berry : max, berries[0]);

      // Now call the berry API using the highest potency berry
      cy.request(`${apiBaseUrl}/berry/${highestPotencyBerry.berry.name}`).then((berryResponse) => {
        validateBerryResponse(berryResponse, highestPotencyBerry.berry.name);
      });
    });
  });

});
