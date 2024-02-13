// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// commands.js
import 'cypress-xpath';
//using pom to access this selector
import { LoginPage } from '../pages/loginPage';

//the class is imported therefore convert into object before accessing the function
const loginPage = new LoginPage()
//adding custom commands to login on a page
Cypress.Commands.add('LoginSite',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('.orangehrm-login-branding').should('be.visible');
        cy.get('input[name="username"]').type(Cypress.env('username'));
        cy.get('input[name="password"]').type(Cypress.env('password'), { log: false });
        //cy.get('button[type="submit"]').click();
        //used login function to click on login button
        loginPage.login();
        cy.get('.oxd-userdropdown-name').should('be.visible');
});
//why clearcache used??
Cypress.Commands.add('clearCache', () => {
        cy.clearCache();
      });
      //const xyz=['Admin','Enabled'] NOT A GOOD PRACTICE
      Cypress.Commands.add('SearchUser', () => {
        cy.get(".oxd-input-group .oxd-input ").type(Cypress.env('username'));
        cy.get(".oxd-select-text-input").first().click();
        cy.get(".oxd-select-dropdown").contains('Admin').click();
        cy.get(".oxd-select-text-input").last.click();
        cy.get(".oxd-select-dropdown").contains('Enabled').click();
        // .each(($el,index)=>{
        //   cy.wrap($el).click();
        //   cy.get(".oxd-select-dropdown").contains(xyz[index]).click();
        // })
        // cy.get(".oxd-button").contains("Search").click();
        //       cy.get('span[class="oxd-text oxd-text--span"]').should('contain.text','Record Found');
      });
      
        