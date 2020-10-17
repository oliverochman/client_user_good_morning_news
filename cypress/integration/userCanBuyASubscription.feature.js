describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.login();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/subscriptions",
      response: "fixture:subscription_success.json"
    });
  });
  it("successfully", () => {
    cy.get('[data-cy="become-subscriber"]').click()
    cy.wait(1000)
    cy.typeInCardInformation("card-number", "cardnumber", "4242424242424242")
    cy.typeInCardInformation("card-expiry", "exp-date", "1222")
    cy.typeInCardInformation("card-cvc", "cvc", "999")
    cy.get('button').contains("Subscribe Now!").click()
    cy.get("[data-cy=message]").contains("Payment successful. Thank you for subscribing!")
    cy.get('[data-cy="become-subscriber"]').should("not.exist")
  });
});