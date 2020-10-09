describe("Visitor can see all listed articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });

  it("visitor can see article title", () => {
    cy.get("[data-cy='article-1']").within(() => {
      cy.get("[data-cy='title']").should("contain", "Hello World");
    });
  });

  it("visitor can see article teaser", () => {
    cy.get("[data-cy='article-2']").within(() => {
      cy.get("[data-cy='teaser']").should(
        "contain",
        "Sun is always shining in Kista"
      );
    });
  });
});
