describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.login("registered");
  });

  context("Successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/subscriptions",
        response: { message: "Payment successful. Thank you for subscribing!" },
      });
    });

    it("Subscriber get success message as a response", () => {
      cy.get('[data-cy="become-subscriber"]').click();
      cy.wait(1000);
      cy.typeInCardInformation("card-number", "cardnumber", "4242424242424242");
      cy.typeInCardInformation("card-expiry", "exp-date", "1222");
      cy.typeInCardInformation("card-cvc", "cvc", "999");

      cy.get("button").contains("Subscribe Now!").click();

      cy.get("[data-cy='payment-success-message']").contains(
        "Payment successful. Thank you for subscribing!"
      );
      cy.get('[data-cy="become-subscriber"]').should("not.exist");
    });
  });

  context("Unsuccessfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/subscriptions",
        response: { message: "Payment failed, please try again" },
        status: 422,
      });
    });

    it("user gets error message and stays in the form", () => {
      cy.get('[data-cy="become-subscriber"]').click();
      cy.wait(1000);
      cy.typeInCardInformation("card-number", "cardnumber", "4242424242424242");
      cy.typeInCardInformation("card-expiry", "exp-date", "4444");
      cy.typeInCardInformation("card-cvc", "cvc", "111");

      cy.get("button").contains("Subscribe Now!").click();

      cy.get("[data-cy='failure-message']").contains(
        "Payment failed, please try again"
      );
      cy.get('[data-cy="become-subscriber"]').should("exist");
    });
  });
});
