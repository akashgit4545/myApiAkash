describe("Validate country api", () => {
  it("validate all country list api", () => {
    cy.request({
      url: "https://restcountries.com/v3.1/all",
      method: "GET",
    }).then((response) => {
      expect(response.status).to.be.eq(200);
      expect(response.body).to.be.an("Array");
      expect(response.body.length).to.be.eq(250);
      response.body.forEach((country) => {
        expect(country).to.have.property("name");
        expect(country).to.have.property("cca2");
      });
    });
  });
});
