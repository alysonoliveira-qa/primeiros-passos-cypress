class MyInfoPage  {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            //genericField: ".oxd-input--active",

            //Parte do Chat GPT
            nickName: '[name="nickName"]', //(adicionei depois eu mesmo)
            employeeId: '[name="employeeId"]',
            otherId: '[name="otherId"]',
            driverLicense: '[name="licenseNo"]',
            licenseExpiry: '[placeholder="yyyy-mm-dd"]',
            //Seguindo o Curso/o que aprendi
            dateCloseButton:".--close",
            submitButton:"[type='submit']",
            listSelectMenu:".oxd-select-wrapper",
            dropdownOptions: ".oxd-select-dropdown .oxd-select-option",
    }

    return selectors
    }

    fillPersonalDetails(firstName, lastName, middleName, nicknameTest, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().genericField).eq(3).clear().type(nicknameTest)
        cy.get('body').then($body => {
            if ($body.find('[name="nickName"]').length) {
               cy.get('[name="nickName"]').clear().type(nickName)
            }
        })
    }

    //fillEmployeeDetails(employee, otherIdTest, driverLicenseTest, dateLicense, ssNumberTest, sinNumberTest) {
        /* cy.get(this.selectorsList().genericField).eq(4).clear().type(employee)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherIdTest)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseTest)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(dateLicense)       
        cy.get(this.selectorsList().dateCloseButton).click() */
        //cy.get(this.selectorsList().genericField).eq(8).clear().type(ssNumberTest)
        //cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumberTest)
    //}
    
    fillEmployeeDetails(otherId, driverLicense, licenseExpiry) {

        cy.get('body').then($body => {

            if ($body.find('[name="otherId"]').length) {
               cy.get('[name="otherId"]').clear().type(otherId)
            }

            if ($body.find('[name="licenseNo"]').length) {
               cy.get('[name="licenseNo"]').clear().type(driverLicense)
            }

            if ($body.find('[placeholder="yyyy-mm-dd"]').length) {
              cy.get('[placeholder="yyyy-mm-dd"]')
                .eq(0)
                .invoke('val', '')
                .type(licenseExpiry)
            }

        })

    }


    saveForm(){
        cy.contains('button', 'Save').click()
        
        //No Error Validation
        cy.get(' .oxd-input-field-error').should('not.exist')
    }

    fillStatus(){
        // Nationality
        cy.get(this.selectorsList().listSelectMenu).eq(0).click()
        cy.contains(
            this.selectorsList().dropdownOptions,
            'Brazilian'
        ).click()

        // Marital Status
        cy.get(this.selectorsList().listSelectMenu).eq(1).click()
        cy.contains(this.selectorsList().dropdownOptions, 'Married').click()
    }
}

export default MyInfoPage