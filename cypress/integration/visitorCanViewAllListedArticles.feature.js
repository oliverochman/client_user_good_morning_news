describe("visitor can see all listed articles", () => {
  context("when visiting starting page", () => {
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

  context("when visiting sports category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/sports",
        response: "fixture:sports_index.json",
      });
      cy.visit("/");

      cy.get("[data-cy='navigation-bar']").within(() => {
        cy.get("[data-cy='sports']").click();
      });
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

  context("when visiting entertainment category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/entertainment",
        response: "fixture:entertainment_index.json",
      });
      cy.visit("/");

      cy.get("[data-cy='navigation-bar']").within(() => {
        cy.get("[data-cy='entertainment']").click();
      });
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

  context("when visiting weather category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/weather",
        response: "fixture:weather_index.json",
      });
      cy.visit("/");
      cy.get("[data-cy='navigation-bar']").within(() => {
        cy.get("[data-cy='weather']").click();
      });
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

  context("when visiting business category", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/business",
        response: "fixture:business_index.json",
      });
      cy.visit("/");
      cy.get("[data-cy='navigation-bar']").within(() => {
        cy.get("[data-cy='business']").click();
      });
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
});
