cy.intercept('GET', '/api/users', {
  statusCode: 200,
  body: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }],
}).as('getUsers');

cy.intercept('POST', '/api/users', (req) => {
  req.reply({ statusCode: 201, body: { id: 3, name: 'New User' } });
}).as('createUser');


cy.intercept('GET', '/api/users', { statusCode: 200, body: [] }).as('emptyUsers');
cy.wait('@emptyUsers').then((interception) => {
  // Effectuez des assertions ou des validations ici
});

cy.intercept({
  url: 'http://example.com/search*',
  query: { q: 'expected terms' },
}).as('search')
cy.wait('@search')