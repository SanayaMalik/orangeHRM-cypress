const { beforeEach } = require("mocha");

describe('template spec', () => {
  //performing login before each it block
  beforeEach(() => {
    cy.LoginSite();
  });

  //this spec file is use to check the performance
  it('check Performance',()=>{
    cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget').then(($ele) => {
           expect($ele.text()).to.include("Time at Work")
             .and.to.include("My Actions")
             .and.to.include("Quick Launch")
             .and.to.include("Buzz Latest Posts")
             .and.to.include("Employees on Leave Today")
             .and.to.include("Employee Distribution by Sub Unit")
             .and.to.include("Employee Distribution by Location");
        });

        //click on performance tab
        cy.get('a').contains('Performance').click();

        //asserting reached on performance tab
        cy.get('button[type="submit"]').contains('Search').should('be.visible');

        //filling up the feilds

        cy.get(".oxd-select-text-input").first().click();
        cy.get(".oxd-select-dropdown").contains('Automaton Tester').click();


        cy.get(".oxd-select-text-input").eq(1).click();
        cy.get(".oxd-select-dropdown").contains('OrangeHRM').click();


        cy.get(".oxd-select-text-input").eq(2).click();
        cy.get(".oxd-select-dropdown").contains('Current Employees Only').click();


        cy.get(".oxd-select-text-input").last().click();
        cy.get(".oxd-select-dropdown").contains('Activated').click();


        cy.get(".oxd-autocomplete-text-input").type('1').get(".oxd-autocomplete-dropdown").wait(5000).click();


        cy.get(".oxd-date-input ").first().click().get('.oxd-date-input-calendar').contains('1').click();
        cy.get(".oxd-date-input ").last().click().get('.oxd-date-input-calendar').contains('3').click();

        
        //at last clicking on seearch
        cy.get('button[type="submit"]').contains('Search').click();

      
 });
});

