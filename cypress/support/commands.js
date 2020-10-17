Cypress.Commands.add("login", () => {
  cy.server();
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v1/auth/sign_in",
    response: "fixture:successful_login.json",
  });
  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/v1/auth/**",
    response: "fixture:successful_login.json",
  });
  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/v1/articles",
    response: "fixture:articles_index.json",
  });

  cy.visit("/");
  cy.get('[data-cy="login-button"]').contains("Login").click();

  cy.get('[data-cy="login-form"]').within(() => {
    cy.get('[data-cy="email"]').type("registered@mail.com");
    cy.get('[data-cy="password"]').type("password");
    cy.get('[data-cy="submit"]').contains("Submit").click();
  });
});
