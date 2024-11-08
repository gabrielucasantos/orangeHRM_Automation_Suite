class PimPage {

    selectorsList() {
        const selectors = {
            employeeName: '.oxd-autocomplete-text-input',
            button: '[type="submit"]',
            editAction: '.oxd-table-cell-action-space',
            genericField: ".oxd-input--active",
            submitButton: ".orangehrm-left-space"
        }

        return selectors
    }
    fillEmployeeInformation(hints) {
        cy.get(this.selectorsList().employeeName).eq(0).type(hints)
        cy.get(this.selectorsList().button).click()
        cy.get(this.selectorsList().editAction).eq(0).click()
    }

    fillPersonalDetailsEdit(otherId) {
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default PimPage