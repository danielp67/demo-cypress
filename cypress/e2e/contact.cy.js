describe('contact page', () => {
  it('it navigate to the contact page', () => {
    cy.visit('http://localhost:8080/#/contact')
    cy.get('#name').type('name')
    cy.get('#email').type('test@test.fr')
    cy.get('#message').type('Bonjour, votre site est génial !')
    cy.contains('Envoyer').click()
    cy.get('.success').should('be.visible').should('contain', 'Message envoyé avec succès.')
  })

  /* it('it did not contain XSS vulnerability', () => {
  cy.visit('http://localhost:8080/#/contact')
  cy.get('#name').type('name')
  cy.get('#email').type('test@test.fr')
  cy.get('#message').type('<script>alert("XSS");</script>')
  cy.contains('Envoyer').click()
  cy.get('.success').should('be.visible').should('contain', 'Message envoyé avec succès.')
  cy.get('[data-cy="successMessage"]').should('be.visible').should('contain', 'Message envoyé avec succès.')
  cy.on('window:alert', () => {
    throw new Error('Une fenêtre d\'alerte s\'est affichée !');
  });
}) */
})