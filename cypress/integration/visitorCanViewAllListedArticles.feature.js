describe("visitor can see all listed articles", () => {
  
  
  
  
  context("when visiting starting page", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/news",
        response: "fixture:news_index.json",
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
      cy.get("[data-cy='article-4']").within(() => {
        cy.get("[data-cy='title']").should("contain", "Vännäs HC: 'Inget lag har tränat hårdare än oss'");
      });
    });

    it("visitor can see article teaser", () => {
      cy.get("[data-cy='article-5']").within(() => {
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Vi har kartlagt inkomsterna i innebandyns SSL.Hur mycket tjänar spelarna i DITT lag?"
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
      cy.get("[data-cy='article-10']").within(() => {
        cy.get("[data-cy='title']").should("contain", "Tudelad konstnär gjuter nytt liv i gammal illusion");
      });
    });

    it("visitor can see article teaser", () => {
      cy.get("[data-cy='article-11']").within(() => {
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Läsare som öppnar Anne Applebaums nya bok vet redan att det ser mörkt ut för demokratin. Tyvärr lyckas hon inte ge några nya insikter om varför det har blivit så. Håkan Lindgren läser ”Demokratins skymning” och blir besviken. Under strecket"
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
      cy.get("[data-cy='article-6']").within(() => {
        cy.get("[data-cy='title']").should("contain", "Helgvädret - paraply eller solglasögon?");
      });
    });

    it("visitor can see article teaser", () => {
      cy.get("[data-cy='article-7']").within(() => {
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Förutom färgstarka löv förknippar vi ofta hösten med regn, men stämmer det att hösten har mer nederbörd än övriga månader?"
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
      cy.get("[data-cy='article-8']").within(() => {
        cy.get("[data-cy='title']").should("contain", "Stockholm ger Kry extra betalt för digitala besök");
      });
    });

    it("visitor can see article teaser", () => {
      cy.get("[data-cy='article-9']").within(() => {
        cy.get("[data-cy='teaser']").should(
          "contain",
          "Politikerna har försökt täppa till hålen – ändå är den kritiserade vårdappen en framgångssaga"
        );
      });
    });
  });
});
