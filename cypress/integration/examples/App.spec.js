describe("app renders", () => {
  it("without failing", () => {
    cy.visit("/");
    const pTag = cy.get('[data-cy=introText]');
    pTag.should("have.text", "Cypress in CRA");
    pTag.should("not.have.text", "asdf");
    cy.get('[data-cy=container]').children()
  });
});