import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'
import PimPage from '../pages/pimPage'

const Chance = require('chance')

const chance = new Chance();
const loginPage = new LoginPage ()
const dasboardPage = new DashboardPage ()
const menuPage = new MenuPage ()
const myInfoPage = new MyInfoPage ()
const pimPage = new PimPage ()
describe('Orange HRM Tests', () => {

  it('User creation', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dasboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    myInfoPage.fillIndentificationData(chance.ssn({ ssnFour: true }), chance.cf(), chance.ssn({ dashes: false }), '2035-07-15')
    myInfoPage.fillPersonalData('2000-01-22')
    myInfoPage.saveForm()
  })

  it.only('edit user', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dasboardPage.checkDashboardPage()
    menuPage.accessPIM()
    pimPage.fillEmployeeInformation('444444')
    pimPage.fillPersonalDetailsEdit(chance.ssn({ dashes: false }))
  })
  
})