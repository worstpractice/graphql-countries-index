// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can search for countries by name", () => {
    cy.get("[data-cy=TextInput]").click().clear().type("antarctica");

    cy.get("[data-cy=ContentCard]").should("be.visible");
    cy.get("[data-cy=Flag-AQ]").should("be.visible");
  });

  it("can input junk without getting results", () => {
    cy.get("[data-cy=TextInput]").click().clear().type("narnia");

    cy.get("[data-cy=ContentCard]").should("not.be.visible");
    cy.get("[data-cy=Flag-AQ]").should("not.be.visible");
  });

  it("can click a card to open the detail view", () => {
    cy.get("[data-cy=TextInput]").click().clear().type("sweden");

    cy.get("[data-cy=DetailView]").should("not.be.visible");

    cy.get("[data-cy=ContentCard]").click();

    cy.get("[data-cy=DetailView]").should("be.visible");
  });

  it("can exit detail view", () => {
    cy.get("[data-cy=TextInput]").click().clear().type("antarctica");

    cy.get("[data-cy=DetailView]").should("not.be.visible");

    cy.get("[data-cy=ContentCard]").click();

    cy.get("[data-cy=DetailView]").should("be.visible");

    cy.get("[data-cy=Header]").click({ force: true });

    cy.get("[data-cy=DetailView]").should("not.be.visible");
  });

  it("can clear all results", () => {
    cy.get("[data-cy=ContentCard]").should("not.be.visible");
    cy.get("[data-cy=Flag-AQ]").should("not.be.visible");

    cy.get("[data-cy=TextInput]").click().clear().type("antarctica");

    cy.get("[data-cy=ContentCard]").should("be.visible");
    cy.get("[data-cy=Flag-AQ]").should("be.visible");

    cy.get("[data-cy=TextInput]").click().clear();

    cy.get("[data-cy=ContentCard]").should("not.be.visible");
    cy.get("[data-cy=Flag-AQ]").should("not.be.visible");
  });

  it("can navigate inside the detail view", () => {
    cy.get("[data-cy=TextInput]").click().clear().type("sweden");

    cy.get("[data-cy=DetailView]").should("not.be.visible");

    cy.get("[data-cy=ContentCard]").click();

    cy.get("[data-cy=DetailView]").should("be.visible");

    cy.get("[data-cy=ContentCard]").should("be.visible");

    let times = 5;

    while (times--) {
      cy.get("[data-cy=DetailView]").children().find("[data-cy=ContentCard]").first().click();
    }
  });
});
