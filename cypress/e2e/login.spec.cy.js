import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage ()
describe('Orange HRM Tests', () => {
  const selectorsList = {
    dashboardGrid: ".oxd-layout-context",
    alertTitle: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    fistNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",

  }

  it.only('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usenameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.alertTitle)
  }) 
})