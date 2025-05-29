//const apiProduct = `${Cypress.env("apiUrl")}/products`;
const apiProduct = Cypress.env("apiUrl") + `/products`;

context("GET /products", () => {
  it("gets a list of products", () => {
    cy.request("GET", apiProduct).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).length.to.be.greaterThan(15)
    })
  })

  let categoryId;
const apiCategories = `${Cypress.env("apiUrl")}/categories`;
it("Récupérer toutes les catégories et extraire un ID", () => {
  cy.request("GET", apiCategories).then((response) => {
    categoryId = response.body[Math.floor(Math.random() * response.body.length)].id;
  });
});


it("Récupérer les détails d'une catégorie par ID", () => {
  // Vérifiez que l'ID de catégorie a été extrait avec succès
  expect(categoryId).to.be.a("number");


  cy.request(apiCategories + `/${categoryId}`)
    .its("status")
    .should("eq", 200);
});




cy.request({
  method: "POST",
  url: apiUrl + "/reviews",
  failOnStatusCode: false //n’oubliez pas cette option, sinon vous n’irez pas dans la réponse à la ligne suivante
}).then((response) => {
  expect(response.status).to.eq(401);
});
})