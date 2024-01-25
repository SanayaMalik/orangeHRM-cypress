

describe('template spec', () => {
  it('login',()=>{
    cy.LoginSite("Admin","admin123");
  })
  /*
  it('empty_credential', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('.orangehrm-login-branding').should('be.visible');
    cy.get('input[placeholder="Username"]')
    cy.get('input[placeholder="Password"]')
    cy.get('button[type="submit"]').click()
    cy.get('div').contains(/required/i);

  })
  it('invalid_credentals',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('.orangehrm-login-branding').should('be.visible');
    cy.get('input[placeholder="Username"]').type('xyz')
    cy.get('input[placeholder="Password"]').type('xyz')
    cy.get('button[type="submit"]').click()
    cy.get('p').contains(/invalid credentials/i);
  })
  */
})