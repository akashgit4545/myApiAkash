describe("start with basic cypress commands", () => {
  it("start cypress", () => {
    cy.visit("https://www.google.com/");
    cy.url().should("eq", "https://www.google.com/");
  });

  it("second url to viit", () => {
    cy.visit("https://www.youtube.com/");
  });

  it("adding by branch", () => {
    cy.visit("https://www.youtube.com/");
  });
});
