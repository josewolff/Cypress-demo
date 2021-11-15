import CreateAccountPageActions from "../../pomExample/CreateAccountPageActions";
describe("Test using pom", () => {

    

    beforeEach("viti pagae", () => {
        cy.visit(Cypress.env("host") + "register.html");
    })


    it("test pom", () => {
        const createPage = new CreateAccountPageActions();
        createPage.createAccountProcess();
        cy.url().should("include","login.html");
    })

    it("Only Filling name", () => {
        const createPage = new CreateAccountPageActions();
        createPage.faillLastName();
        cy.url().should("include","login.html");
    })
})
