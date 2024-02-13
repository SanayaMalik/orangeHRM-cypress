export class LoginPage {
    elements = {
      logoBranding: () => cy.get('.orangehrm-login-branding'),
      Username: () => cy.get('input[name="username"]'),
      Password: () => cy.get('input[name="password"]'),
      Submit: () => cy.get('button[type="submit"]'),
    }
  
    login() {
      this.elements.Submit().click();
    }
  }
  

 