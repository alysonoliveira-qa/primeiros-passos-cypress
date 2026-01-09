import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM Tests', () => {


  it('Login - Fail', () => {
    //cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.accessLoginPage()
    // cy.get(selectorsList.wrongCredentialAlert)
    })
    
    it('Login - Success', () => {
    //cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    // cy.get(selectorsList.wrongCredentialAlert)
    })

  })