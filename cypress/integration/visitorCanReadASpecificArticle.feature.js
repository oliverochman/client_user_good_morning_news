describe("Visitor can read a specific article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json"
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:articles_show.json"
    })

    cy.visit("/");

    cy.get("[data-cy='article-1']").within(() => {
      cy.get("[data-cy='title']").click()
    })
  });

  it("and see its content", () => {
    cy.get("[data-cy='article']").within(() => {
      cy.get("[data-cy='title']").should("contain", "Hello World");
      cy.get("[data-cy='teaser']").should(
        "contain",
        "Sun is always shining in Kista"
      );
      cy.get("[data-cy='content']").should(
        "contain",
        "Jenny is cool"
      );
    });
  });
});
