import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage ()
const dasboardPage = new DashboardPage ()
const menuPage = new MenuPage ()
const myInfoPage = new MyInfoPage ()
describe('Orange HRM Tests', () => {

  it('User Info Update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dasboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'Nick Name')
    myInfoPage.fillEmployeeDetails('EmployId', 'otherId', '2025-07-29', '123456', '0987654')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
  
})