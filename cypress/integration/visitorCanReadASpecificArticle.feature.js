describe("visitor can read a specific article", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles.json"
    });

    cy.visit("/");
  });

  it("visitor can see a specific article's title", () => {
    cy.get("[data-cy='article-1']").within(() => {
      cy.get("[data-cy='title']").should("contain", "Hello World");
      cy.get()
    });
  });

  it("visitor can see a specific article's teaser", () => {
    cy.get("[data-cy='article-2']").within(() => {
      cy.get("[data-cy='teaser']").should(
        "contain",
        "Sun is always shining in Kista"
      );
    });
  });

  it("should display a specific article's content", () => {
    cy.get("[data-cy='article-3']").within(() => {
      cy.get("[data-cy='content']").should(
        "contain",
        "Jenny is cool"
      );
    });
  });
});
