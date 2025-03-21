describe("Validate country api", () => {
  it("validate all country list api", () => {
    cy.request({
      url: "https://restcountries.com/v3.1/all",
      method: "GET",
    }).then((response) => {
      expect(response.status).to.be.eq(200);
    });
  });
});
