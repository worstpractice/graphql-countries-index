// type definitions for Cypress object "cy"
/// <reference types="cypress" />

const FAKE_COUNTRY = "narnia" as const;
const REAL_COUNTRY = "antarctica" as const;

const ContentCard = "[data-cy=ContentCard]" as const;
const DetailView = "[data-cy=DetailView]" as const;
const FlagOfAntarctica = "[data-cy=Flag-AQ]" as const;
const Header = "[data-cy=Header]" as const;
const TextInput = "[data-cy=TextInput]" as const;

describe("Learn2Esport Countries Index", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can search for countries by name", () => {
    cy.get(TextInput).click().clear().type(REAL_COUNTRY);

    cy.get(ContentCard).should("be.visible");
    cy.get(FlagOfAntarctica).should("be.visible");
  });

  it("can input junk without getting results", () => {
    cy.get(TextInput).click().clear().type(FAKE_COUNTRY);

    cy.get(ContentCard).should("not.be.visible");
    cy.get(FlagOfAntarctica).should("not.be.visible");
  });

  it("can click a card to open the detail view", () => {
    cy.get(TextInput).click().clear().type(REAL_COUNTRY);

    cy.get(DetailView).should("not.be.visible");

    cy.get(ContentCard).click();

    cy.get(DetailView).should("be.visible");
  });

  it("can exit detail view", () => {
    cy.get(TextInput).click().clear().type(REAL_COUNTRY);

    cy.get(DetailView).should("not.be.visible");

    cy.get(ContentCard).click();

    cy.get(DetailView).should("be.visible");

    cy.get(Header).click({ force: true });

    cy.get(DetailView).should("not.be.visible");
  });

  it("can clear all results", () => {
    cy.get(ContentCard).should("not.be.visible");
    cy.get(FlagOfAntarctica).should("not.be.visible");

    cy.get(TextInput).click().clear().type(REAL_COUNTRY);

    cy.get(ContentCard).should("be.visible");
    cy.get(FlagOfAntarctica).should("be.visible");

    cy.get(TextInput).click().clear();

    cy.get(ContentCard).should("not.be.visible");
    cy.get(FlagOfAntarctica).should("not.be.visible");
  });

  it("can navigate inside the detail view", () => {
    cy.get(TextInput).click().clear().type(REAL_COUNTRY);

    cy.get(DetailView).should("not.be.visible");

    cy.get(ContentCard).click();

    cy.get(DetailView).should("be.visible");

    cy.get(ContentCard).should("be.visible");

    let navigations = 5;

    while (navigations--) {
      cy.get(DetailView).children().find(ContentCard).first().click();
    }
  });
});
