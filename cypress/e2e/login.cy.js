const { beforeEach } = require("mocha");

describe('template spec', () => {
  beforeEach(()=>{
    cy.LoginSite();
  })

  it('Should navigate to the dashboard and perform dashboard tests', () => {
    cy.LoginSite(cypress.env('username'), cypress.env('password'));

    // const functionalities = [
    //   'Time at Work',
    //   'My Actions',
    //   'Quick Launch',
    //   'Buzz Latest Posts',
    //   'Employees on Leave Today',
    //   'Employee Distribution by Sub Unit',
    //   'Employee Distribution by Location'
    // ];

    
    // cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget')
      // .each(($div, index) => {
      //   cy.wrap($div).within(() => {
      //     cy.contains('.oxd-text.oxd-text--p', new RegExp(functionalities[index])).should('be.visible');
      //   });
      // });

      it('dsfhsd',(()=>{
        //reached the dah and validated for the 7 tiles
        cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget').then(($ele)=>{
          expect($ele.Text()).include("Time at Work").and.include("My Actions").and.include("Quick Launch").and.include("Buzz Latest Posts").and.include("Employees on Leave Today").and.include("Employee Distribution by Sub Unit").and.include("Employee Distribution by Location")
        })
        cy.get('.oxd-main-menu-item').should('have.class', 'active');


      })
      
      )
    
  });
});
