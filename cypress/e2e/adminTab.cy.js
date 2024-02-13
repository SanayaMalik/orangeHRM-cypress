const { beforeEach } = require("mocha");

describe('template spec', () => {
  beforeEach(() => {
    cy.LoginSite();
  });
  //verifying the dashboard page is visible
   it('Should navigate to the dashboard and perform dashboard tests', () => {
     cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget').then(($ele) => {
       expect($ele.text()).to.include("Time at Work")
         .and.to.include("My Actions")
         .and.to.include("Quick Launch")
         .and.to.include("Buzz Latest Posts")
         .and.to.include("Employees on Leave Today")
         .and.to.include("Employee Distribution by Sub Unit")
         .and.to.include("Employee Distribution by Location");
    });
    // Using 'contains' to click on the anchor tag with text "Admin"
    cy.get('a').contains('Admin').click();
    //validating the admin page is visited
    cy.get('button[type="submit"]').contains('Search').should('be.visible');
    //implementing the search user
    cy.SearchUser();
    //
    cy.get(".oxd-table-row").then(($ele)=> {
     expect($ele.text()).to.include("Admin")
    .and.to.include("Enabled")
    })
   
  });
   it('checks edit and delete functionality',()=>{
    //checking the 7 tiles on dashboard 
     cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget').then(($ele) => {
       expect($ele.text()).to.include("Time at Work")
         .and.to.include("My Actions")
         .and.to.include("Quick Launch")
         .and.to.include("Buzz Latest Posts")
         .and.to.include("Employees on Leave Today")
         .and.to.include("Employee Distribution by Sub Unit")
         .and.to.include("Employee Distribution by Location");
    });
    //navigating to the admin tab
    cy.get('a').contains('Admin').click();
    //validating that reached the admin tab
    cy.get('button[type="submit"]').contains('Search').should('be.visible');
    //trash icon-used for delete
    cy.get(".oxd-icon.bi-trash").last().click();
    //clicking on the delete icon a dilogue box appears
    cy.get('.oxd-sheet.oxd-dialog-sheet').should('be.visible');
    //clicking on the delete button on the dilogue box
    cy.get(".oxd-button.orangehrm-button-margin").contains("Yes, Delete").click();
    //validating the record has been deleted

    //pencil icon used for editing purposes
    cy.get(".oxd-icon bi-pencil-fill").last().click();
    //a new page appears for editing the user
    cy.get(".orangehrm-card-container").should('contain',"Edit User");
    //save changes
    cy.get("oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space").contains("Save").click();
    //validate that we got back to the admin page
    cy.get('button[type="submit"]').contains('Search').should('be.visible');
    //validating the changes


   })
   //tedting for the add functionality
  it('check the add funtionality',()=>{
    //validating for the 7 tiles on the dashboard
    cy.get('.oxd-grid-item.oxd-grid-item--gutters.orangehrm-dashboard-widget').then(($ele) => {
           expect($ele.text()).to.include("Time at Work")
             .and.to.include("My Actions")
             .and.to.include("Quick Launch")
             .and.to.include("Buzz Latest Posts")
             .and.to.include("Employees on Leave Today")
             .and.to.include("Employee Distribution by Sub Unit")
             .and.to.include("Employee Distribution by Location");
        });
        //migrating to the admin page
        cy.get('a').contains('Admin').click();
        //validating that reached the admin page
        cy.get('button[type="submit"]').contains('Search').should('be.visible');
        //clicking on the ad button
        cy.get(".oxd-button ").contains('Add').click();
        //we move to a new window for add
        //filling the details of the user to be added on the db
        cy.get(".oxd-select-text-input").first().click();
        cy.get(".oxd-select-dropdown").contains('Admin').click();
        cy.get(".oxd-select-text-input").last().click();
        cy.get(".oxd-select-dropdown").contains('Enabled').click();
        // Get the text content of .oxd-userdropdown-name and type it into .oxd-autocomplete-text-input--before
        // cy.get('.oxd-userdropdown-name').invoke('text').then((text) => {
        //   cy.get('.oxd-autocomplete-text-input--before').type(text,{force:true});
        // });
        cy.get(".oxd-autocomplete-text-input").type('1').get(".oxd-autocomplete-dropdown").wait(5000).click();
        cy.get(".oxd-form-row .oxd-grid-item .oxd-input ").first().type('asdfggh');
        cy.get(".oxd-form-row .oxd-grid-item .oxd-input ").eq(1).type('1234@sana');
        cy.get(".oxd-form-row .oxd-grid-item .oxd-input ").last().type('1234@sana');
        //clicking on save
        cy.get('button[type="submit"]').contains('Save').click();

      
 });
});

