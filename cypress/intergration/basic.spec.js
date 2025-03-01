describe("start with basic cypress commands", () => {
  it("start cypress", () => {
    cy.visit("https://www.google.com/");
    cy.url().should('eq','https://www.google.com/');
  });
});
