describe('Orange HRM Tests', () => {
  const selectorsList = {
    usenameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    alertTitle: "[role='alert']"
  }
  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usenameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usenameField).type('Testfail')
    cy.get(selectorsList.passwordField).type('Senhafail')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertTitle)
  }) 
})