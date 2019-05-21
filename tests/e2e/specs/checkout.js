// https://docs.cypress.io/api/introduction/api.html

describe("Checkout process", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Loading the page", function() {
    it("contains the expected components", () => {
      cy.contains("h1", "CHECKOUT");
      cy.get(".card");
      cy.get("form");
      cy.get("button");
    });

    it("contains an empty form", () => {
      const form = cy.get("form");
      form.get(`input[name="name"]`).should("be.empty");
      form.get(`input[name="expiration"]`).should("be.empty");
      form.get(`input[name="ccv"]`).should("be.empty");
      form.get(`input[name="card-number"]`).should("be.empty");
    });

    it("card is not flipped", () => {
      cy.get(".card").should("not.have.class", "flipped");
    });

    it("button is disabled", () => {
      cy.get(".button").should("be", "disabled");
    });
  });

  context("Pressing button without filling form", function() {
    it("Does not go to /checkout", () => {
      cy.get("button").click({ force: true });
      cy.url().should("not.include", "/success");
    });
  });

  context("Interacting with ccv input", function() {
    it("Card is flipped on focus and blur", () => {
      cy.get(`input[name="ccv"]`).focus();
      cy.get(".card").should("have.class", "flipped");
      cy.get(`input[name="ccv"]`).blur();
      cy.get(".card").should("not.have.class", "flipped");
    });
  });

  context("Filling the form ", function() {
    const name = "Jane";
    const expiration = "11/99";
    const ccv = "1234";
    const cardNumber = "1234 1234 1234 1234";

    beforeEach(() => {
      const form = cy.get("form");
      form.get(`input[name="name"]`).type(name);
      form.get(`input[name="expiration"]`).type(expiration);
      form.get(`input[name="ccv"]`).type(ccv);
      form.get(`input[name="card-number"]`).type(cardNumber);
    });

    it("Updates the card", () => {
      cy.get(".card").contains(name);
      cy.get(".card").contains(expiration);
      cy.get(".card").contains(ccv);
      cy.get(".card").contains(cardNumber);
    });
  });

  context("Filling the form with VALID values", function() {
    beforeEach(() => {
      const form = cy.get("form");
      form.get(`input[name="name"]`).type("Jane");
      form.get(`input[name="expiration"]`).type("11/99");
      form.get(`input[name="ccv"]`).type("1234");
      form.get(`input[name="card-number"]`).type("1234 1234 1234 1234");
    });

    it("Does not show errors", () => {
      cy.get("span.error").should("not.exist");
      cy.get("form")
        .get(`input[name="ccv"]`)
        .type("123");
      cy.get("span.error").should("not.exist");
    });

    it("Button is enabled", () => {
      cy.get(".button").should("be", "enabled");
    });

    it("Clicking button goes to /success", () => {
      cy.get("button").click();
      cy.url().should("include", "/success");
    });
  });

  context("Filling the form and leaving EMPTY values", function() {
    beforeEach(() => {
      const form = cy.get("form");
      form
        .get(`input[name="name"]`)
        .type("a")
        .clear();
      form
        .get(`input[name="expiration"]`)
        .type("14/99")
        .clear();

      form
        .get(`input[name="ccv"]`)
        .type("1")
        .clear();

      form
        .get(`input[name="card-number"]`)
        .type("1234 1234")
        .clear();
    });

    it("Does show errors", () => {
      const form = cy.get("form");
      form
        .get(`input[name="name"]`)
        .siblings(".error")
        .contains("You must complete this field");

      form
        .get(`input[name="expiration"]`)
        .siblings(".error")
        .contains("You must complete this field");

      form
        .get(`input[name="ccv"]`)
        .siblings(".error")
        .contains("You must complete this field");

      form
        .get(`input[name="card-number"]`)
        .siblings(".error")
        .contains("You must complete this field");
    });

    it("Button is disabled", () => {
      cy.get(".button").should("not.be", "enabled");
    });
  });

  context("Filling the form with INVALID values", function() {
    beforeEach(() => {
      const form = cy.get("form");
      form.get(`input[name="expiration"]`).type("14/99");
      form.get(`input[name="ccv"]`).type("1");
      form.get(`input[name="card-number"]`).type("1234 1234");
    });

    it("Does show errors", () => {
      const form = cy.get("form");

      form
        .get(`input[name="expiration"]`)
        .siblings(".error")
        .contains("The format is MM/YY, please choose a valid month");

      form
        .get(`input[name="ccv"]`)
        .siblings(".error")
        .contains("The number must be between 3 and 4 characters");

      form
        .get(`input[name="card-number"]`)
        .siblings(".error")
        .contains("You must enter a valid credit card number");
    });

    it("Button is disabled", () => {
      cy.get(".button").should("not.be", "enabled");
    });
  });
});
