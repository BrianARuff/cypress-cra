describe("app renders", () => {
  it("without failing", () => {
    cy.visit("/");
    const pTag = cy.get('[data-cy=introText]');
    pTag.should("have.text", "Cypress in CRA");
    pTag.should("not.have.text", "asdf");
    cy.get('[data-cy=container]').children()
  });
  it("renders count", () => {
    cy.get('[data-cy=count]').should("have.text", "1");
  })
  it("increments count when clicked", () => {
    cy.get('[data-cy=incrementCount]').click()
    cy.get('[data-cy=count]').should("have.text", "2");
  })
});