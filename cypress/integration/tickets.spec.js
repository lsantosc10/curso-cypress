import { describe, it } from 'mocha';
describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", () => {
        const firstName = "Leones";
        const lastName = "Santos";

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("leones.santoscampos@gmail.com");
        cy.get("#requests").type("vegetarian");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });

    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });

    it("select 'vip' ticket type", () => {
        cy.get("#vip").check();
    });

    it("selects 'social media' checkbox", () => {
        cy.get("#social-media").check();
    });

    it("selects 'friends' and 'publication', then uncheck", () => {
        cy.get("#friend").check();
        cy.get("#publication").check();
        cy.get("#friend").uncheck();
    });

    
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it.only("alerts on invalid email", () => {
        
       cy.get("#email")
       .as("email") // alias
       .type("talkingabouttesting-gmail.com");

       cy.get("#email.invalid").should("exist");

       cy.get("@email")
       .clear()
       .type("talkingabouttesting@gmail.com");

       cy.get("#email.invalid").should("not.exist");


   });
        
});