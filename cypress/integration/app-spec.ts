// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can search for countries by name", () => {
    cy.get("[data-cy=TextInput]").click().type("antarctica");

    cy.get("[data-cy=ContentCard]").should("exist").and("be.visible");
    cy.get("[data-cy=Flag-AQ]").should("exist").and("be.visible");
  });

  it("can click a card to reveal the detail view", () => {
    cy.get("[data-cy=TextInput]").click().type("sweden");

    cy.get("[data-cy=DetailView]").should("not.exist").and("not.be.visible");

    cy.get("[data-cy=ContentCard]").click();

    cy.get("[data-cy=DetailView]").should("exist").and("be.visible");
  });
});
