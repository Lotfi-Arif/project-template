describe('frontend-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should allow typing in the search bar', () => {
    cy.get('#search').type('Test Product');
  });

  it('should be able to open and select from the category dropdown', () => {
    cy.get('.dropdown-hover').click(); // Opens the dropdown
    cy.get('.dropdown-content').contains('Electronic').click(); // Selects an item from the dropdown
  });

  it('should navigate to the Profile page', () => {
    cy.get('a[href="/profile"]').click();
    // Add assertions to verify you're on the Profile page
  });
});
