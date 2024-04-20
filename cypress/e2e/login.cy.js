describe('Login Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('User successfully login with valid credentials', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('123456');
    cy.get('button[type="submit"]').click();
    cy.get('#loginMessage').should('have.text','Login successful!');
  });

  it('User see error message when login with invalid credentials', () => {
    cy.get('#username').type('invalid_username');
    cy.get('#password').type('INVALIDP4SS');
    cy.get('button[type="submit"]').click();
    cy.get('#loginMessage').should('have.text', 'Invalid username or password.');
  });

  it('User see error message when login with empty credentials', () => {
    cy.get('button[type="submit"]').click();
    cy.get('#loginMessage').should('have.text', 'Please enter both username and password.');
  });

  it('User can clear the text from the field after failed login', () => {
    cy.get('#username').type('admin');
    cy.get('#password').type('invalid_password');
    cy.get('button[type="submit"]').click();
    cy.get('#username').clear();
    cy.get('#password').clear();
    cy.get('#username').should('have.value', '');
    cy.get('#password').should('have.value', '');
  });

  it('Login component elements are present', () => {
    cy.get('h2').should('be.visible').and('contain', 'Login');
    cy.get(':nth-child(1) > label').should('be.visible').and('contain', 'Username');
    cy.get('#username').should('be.visible');
    cy.get(':nth-child(2) > label').should('be.visible').and('contain', 'Password');
    cy.get('#password').should('be.visible');
    cy.get('[type="submit"]').should('be.visible').and('contain', 'Login');
  });
});
