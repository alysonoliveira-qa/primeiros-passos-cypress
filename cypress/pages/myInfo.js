class MyInfo {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton:".--close",
            
    }

    return selectors
    }

    accessGenericField() {
        cy.get(this.selectorsList().firstNameField).clear().type('FirstNameTest')
        cy.get(this.selectorsList().middleNameField).clear().type('Middle Name')
        cy.get(this.selectorsList().lastNameField).clear().type('LastNameTest')
        // cy.get(this.selectorsList().genericField).eq(3).clear().type('NicknameTest')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('Employee')
        cy.get(this.selectorsList().genericField).eq(4).clear().type('OtherIdTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('DriverLicenseTest')
        cy.get(this.selectorsList().genericField).eq(6).clear().type('2025-03-10')
        cy.get(this.selectorsList().dateCloseButton).click()
    }
}

export default MyInfo