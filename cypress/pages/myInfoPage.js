class MyInfoPage {
    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']", 
            lastNameField: "[name='lastName']",
            middleNameField: "[name='middleName']",
            genericField: ".oxd-input--active", 
            datefield: "[placeholder='yyyy-mn-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItenCombobox: ".oxd-select-dropdown > :nth-child(27)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(4)",
            dateCloseButton: ".--close", 
            submitButton: ".orangehrm-left-space",
            dataField: "[placeholder='yyyy-dd-mm']",
            fielRadio: ".oxd-radio-input"
        }

        return selectors
    }

    fillPersonalDetails(firstName, nickName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(nickName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)  
    }

    fillIndentificationData(employeId, otherId, driversLicenseNumber, licenseExpiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().dataField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillPersonalData(dateOfBirth) {
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().secondItenCombobox).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().thirdItemCombobox).click()
        cy.get(this.selectorsList().dataField).eq(1).clear().type(dateOfBirth)
        cy.get(this.selectorsList().fielRadio).eq(0).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

}

export default MyInfoPage