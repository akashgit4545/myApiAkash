describe("Validate country api", () => {
  const countryName = "Algeria";

  function getCommanName(countryName) {
    return cy
      .request({
        url: `https://restcountries.com/v3.1/name/${countryName}/`,
        method: "GET",
        qs: {
          fullText: true,
        },
      })
      .then((response) => {
        expect(response.status).to.be.eq(200);
        return response.body[0].name.common;
      });
  }

  function getOfficalName(name) {
    return cy
      .request({
        url: `https://restcountries.com/v3.1/name/${name}/`,
        method: "GET",
        qs: {
          fullText: true,
        },
      })
      .then((response) => {
        expect(response.status).to.be.eq(200);
        return response.body[0].name.official;
      });
  }

  function getArea(countryName) {
    return cy
      .request({
        url: `https://restcountries.com/v3.1/name/${countryName}/`,
        method: "GET",
        qs: {
          fullText: true,
        },
      })
      .then((response) => {
        expect(response.status).to.be.eq(200);
        return response.body[0].area;
      });
  }

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
        // expect(country).to.have.property("ccn3");
        expect(country).to.have.property("cca3");
        // expect(country).to.have.property("independent");
        expect(country).to.have.property("status");
        expect(country).to.have.property("unMember");
        // expect(country).to.have.property("currencies");
        expect(country).to.have.property("idd");
        // expect(country).to.have.property("capital");
        expect(country).to.have.property("altSpellings");
        expect(country).to.have.property("region");
        // expect(country).to.have.property("languages");
        expect(country).to.have.property("translations");
        expect(country).to.have.property("latlng");
        expect(country).to.have.property("landlocked");
        expect(country).to.have.property("area");
        // expect(country).to.have.property("demonyms");
        expect(country).to.have.property("flag");
        expect(country).to.have.property("maps");
        expect(country).to.have.property("population");
        expect(country).to.have.property("car");
        expect(country).to.have.property("timezones");
        expect(country).to.have.property("continents");
        expect(country).to.have.property("flags");
        expect(country).to.have.property("coatOfArms");
        expect(country).to.have.property("startOfWeek");
        expect(country).to.have.property("capitalInfo");
      });
    });
  });

  it(`validate country fields and log the results for ${countryName} country`, () => {
    getCommanName(countryName).then((commonName) => {
      cy.log(commonName);
      console.log(`${countryName} has comman name  :`, commonName);
    });
    getOfficalName(countryName).then((commonName) => {
      cy.log(commonName);
      console.log(`${countryName} has offical name  :`, commonName);
    });
    getArea(countryName).then((commonName) => {
      cy.log(commonName);
      console.log(`${countryName} has an area of :`, commonName);
    });
  });
});
