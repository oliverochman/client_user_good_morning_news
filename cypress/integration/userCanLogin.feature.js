describe("User can login and see 'become a subscriber' button", () => {
  context("Successfully", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: "fixture:login_user.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:login_user.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json",
      });

      cy.visit("/");
      cy.get('[data-cy="login-button"]').contains("Login").click();
    });

    it("user can login", () => {
      cy.get('[data-cy="login-form"]').within(() => {
        cy.get('[data-cy="email"]').type("registered@mail.com");
        cy.get('[data-cy="password"]').type("password");
        cy.get('[data-cy="submit"]').contains("Submit").click();
      });
      cy.get('[data-cy="become-subscriber"]')
        .contains("Become Subscriber")
        .should("be.visible");
    });
  });

  context("Unsuccessfully with wrong credentials", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        response: {
          errors: ["Invalid login credentials. Please try again."],
          success: false,
        },
        status: "401",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: {
          errors: ["Invalid login credentials. Please try again."],
          success: false,
        },
      });
      cy.visit("/");
      cy.get('[data-cy="login-button"]').contains("Login").click();
    });
    it("invalid credentials", () => {
      cy.get('[data-cy="login-form"]').within(() => {
        cy.get('[data-cy="email"]').type("invalid@mail.com");
        cy.get('[data-cy="password"]').type("wrong_password");
        cy.get('[data-cy="submit"]').contains("Submit").click();
      });
      cy.get('[data-cy="become-subscriber"]').should("not.exist");
      cy.get('[data-cy="message"]').should(
        "contain",
        "Invalid login credentials. Please try again."
      );
    });
  });
});
