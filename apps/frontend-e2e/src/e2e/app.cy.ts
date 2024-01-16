// Global handling of uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
  console.error('Uncaught Exception:', err);
  // Prevent Cypress from failing the test
  return false;
});

describe('frontend-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should allow typing in the search bar', () => {
    // Custom timeout can be added if needed
    cy.get('#search', { timeout: 10000 }).type('Test Product');
  });

  it('should be able to open and select from the category dropdown', () => {
    cy.get('.dropdown-hover').click(); // Opens the dropdown
    // Add a timeout if the dropdown takes time to appear
    cy.get('.dropdown-content', { timeout: 5000 })
      .contains('Electronic')
      .click(); // Selects an item from the dropdown
  });
});
