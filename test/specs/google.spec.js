const helper = require("protractor-helper");

const GooglePage = require("../page-objects/google");

describe("the google page", () => {
    const googlePage = new GooglePage();

    beforeEach(() => browser.get(googlePage.relativeUrl));

    describe("tentando abrir o navegador", () => {

        it("tentando digitar no google", () => {
            helper.fillFieldWithText(googlePage.search.search, "Teste");
        });
    })
});
