class DashboardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            dropdownMenu: ".oxd-userdropdown-icon",
            logout: "[href='/web/index.php/auth/logout']",
            logoOrangeHRM: "[alt='orangehrm-logo']"
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
        }

    logoutPage() {
        cy.get(this.selectorsList().dropdownMenu).click()
        cy.get(this.selectorsList().logout).click()
        cy.get(this.selectorsList().logoOrangeHRM).should('be.visible')
    }
}

export default DashboardPage