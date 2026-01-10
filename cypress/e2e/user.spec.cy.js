import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    // selectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    // dashboardGrid: " .orangehrm-dashboard-grid",
    // 
    // firstNameField: "[name='firstName']",
    // middleNameField: "[name='middleName']",
    // lastNameField: "[name='lastName']",
    // genericField: ".oxd-input--active",
    // dateField: "[placeholder='yyyy-mm-dd']",
    // dateCloseButton:".--close",
    // submitButton:"[type='submit']",
    // listSelectMenu:".oxd-select-wrapper",
    // selectCountry: ".oxd-select-dropdown > :nth-child(27)",
    // selectSocialStatus: " .oxd-select-dropdown > :nth-child(3)",
  }

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.name(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.profession(), chance.ssn(), chance.cf(), chance.date({string:true}))
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

    // cy.get(selectorsList.dashboardGrid)
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.middleNameField).clear().type('Middle Name')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    // cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('DriverLicenseTest')
    // cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericField).eq(8).clear().type('SsNumberTest')
    // cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    // cy.get(selectorsList.listSelectMenu).eq(0).click()
    // cy.get(selectorsList.selectCountry).click()
    // cy.get(selectorsList.listSelectMenu).eq(1).click()
    // cy.get(selectorsList.selectSocialStatus).click()
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Sucessfully Updated')
    // cy.get(' .oxd-toast-close')
  })

})